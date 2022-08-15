import React from 'react';
import reactProperty from 'react-property';
import { Element, Text } from 'domhandler';


export type DOMNode = Element | Text;


const elementsWithNoTextChildren = new Set([
  'tr',
  'tbody',
  'thead',
  'tfoot',
  'colgroup',
  'table',
  'head',
  'html',
  'frameset'
]);

const inlineHtmlTagNames = new Set([
  'a',
  'abbr',
  'b', 
  'bdo', 
  'br', 
  'button', 
  'canvas', 
  'cite', 
  'code',
  'data', 
  'datalist',
  'del', 
  'dfn', 
  'em', 
  'embed', 
  'i', 
  'iframe', 
  'img', 
  'input',
  'ins',
  'kbd',
  'label', 
  'link',
  'map',
  'mark',
  'math',
  'meter',
  'noscript',
  'object',
  'output',
  'picture',
  'progress',
  'q',
  'ruby',
  'samp',
  'script',
  'select',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'textarea',
  'time',
  'u',
  'var',
  'video',
  'wbr',
]);

let parseFromTemplate: any;
if (document) {
  const template = document.createElement('template');
  if (template && template.content) {

    parseFromTemplate = (tpl: string) => {
      template.innerHTML = tpl;
      return template.content.childNodes;
    };
  }  
}

const parseFromString = (html: string) => {
  const domParser = new window.DOMParser();
  const element = domParser.parseFromString(html, 'text/html').querySelector('body');
  return element ? element.childNodes : ([] as any);
}

function getStyleProps(styles: string) {
  try {
    return styles
        .split(';')
        .filter(style => style.split(':')[0] && style.split(':')[1])
        .map(style => [
            style
                .split(':')[0]
                .trim()
                .replace(/^-ms-/, 'ms-')
                .replace(/-./g, c => c.slice(1).toUpperCase()),
            style.split(':')[1].trim(),
        ])
        .reduce(
            (styleObj, style) => ({
                ...styleObj,
                [style[0]]: style[1],
            }),
            {}
        );


    // const frameCSS = style.replace(/(([\w-.]+)\s*[^;]+);?/g, '$1:$2,')
    // // .replace(/,+$/, '');
    // const properties = frameCSS.split(', ');
    // const frameCSSObj: Record<string, string> = {};
    // properties.forEach(function(property) {
    //     const cssProp = property.split(':');
    //     const cssKey = toCamelCase(cssProp[0]);
    //     const cssValue = cssProp[1].trim();
    //     frameCSSObj[cssKey] = cssValue;
    // });
    // console.log(frameCSSObj);
    // return frameCSSObj

  } catch (error)  {
    console.log(error);
    return {};
  }
}

function attributesToProps(attributes: Record<string, unknown>) {
  const props: Record<string, unknown> = {};
  for (const attributeName in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, attributeName)) {
      const attributeValue = attributes[attributeName];
      const lowerCasedName = attributeName.toLowerCase();

      if (lowerCasedName === 'style' && typeof attributeValue === 'string') {
        props.style = getStyleProps(attributeValue);
        continue;
      }

      const propName = reactProperty.possibleStandardNames[lowerCasedName];
      if (propName) {
        props[propName] = attributeValue;
        const propInfo = reactProperty.getPropInfo(propName);
        switch (propInfo && propInfo.type) {
          case reactProperty.BOOLEAN:
            props[propName] = true;
            break;
          case reactProperty.OVERLOADED_BOOLEAN:
            if (attributeValue === '') {
              props[propName] = true;
            }
            break;
          default:
            break;
        }
        continue;
      }

      props[attributeName] = attributeValue;
    }
  }

  return props;
}

function isValideInlineHtmlNode(node: DOMNode) {
  if (node.type === 'text' && node instanceof Text) {
    return true;
  }
  if (node.type === 'tag' && node instanceof Element) {
    return inlineHtmlTagNames.has(node.name.toLowerCase());
  }
  return false;
}

export function parseDomNodesToReactNodes(
  nodes: DOMNode[], 
  replace?: (domNode: Text) => JSX.Element | Record<string, unknown> | void | undefined | null | false
): string | JSX.Element | (string | JSX.Element)[] {
  const len = nodes.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    const node = nodes[i];

    if (! isValideInlineHtmlNode(node)) {
      continue;
    }

    if (node.type === 'text' && node instanceof Text) {
      const isWhitespace = !node.data.trim().length;
      if (isWhitespace && node.parent && node.parent instanceof Element && elementsWithNoTextChildren.has(node.parent.name)) {
        continue;
      }
      if (typeof replace === 'function') {
        let replacedTextNode = replace(node);
        if (replacedTextNode && React.isValidElement(replacedTextNode)) {
          if (len > 1) {
            replacedTextNode = React.cloneElement(replacedTextNode, { key: replacedTextNode.key || i });
          }
          result.push(replacedTextNode);
          continue;
        } else {
          result.push(node.data);
          continue;
        }
      }

      result.push(node.data);
      continue;
    }

    let children = null;
    
    const props = attributesToProps(node.attribs || {});

    if (node.name === 'textarea' && node.children[0] && node.children[0] instanceof Text) {
      props.defaultValue = node.children[0].data;
    } else if (node.children && node.children.length > 0) {
      children = parseDomNodesToReactNodes(node.children as DOMNode[], replace);
    }

    if (len > 1) {
      props.key = props.key || i; 
    }

    result.push(React.createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}

function formatAttributes(attributes: NamedNodeMap) {
  const result: Record<string, string> = {};
  for (let i = 0; i < attributes.length; i++) {
    result[attributes[i].name] = attributes[i].value;
  }

  return result;
}

export function formatDOMNodes(nodes: NodeListOf<ChildNode>, parent: Element | null = null): DOMNode[] {
  const result = [];
  const len = nodes.length;
  for (let index = 0; index < len; index++) {
    const node = nodes[index];
    let current;
    switch (node.nodeType) {
      case 1:
        if (node instanceof HTMLElement && inlineHtmlTagNames.has(node.nodeName.toLowerCase())) {
          current = new Element(
            node.nodeName.toLowerCase(),
            formatAttributes(node.attributes)
          );
          current.children = formatDOMNodes(node.childNodes, current);
          break;
        }
        continue;
      case 3:
        current = new Text(node.nodeValue || '');
        break;

      default:
        continue;
    }

    const prev = result[index - 1] || null;
    if (prev) {
      prev.next = current;
    }
    current.parent = parent;
    current.prev = prev;
    current.next = null;

    result.push(current);
  }
  return result;
}

export function parseDOMNodes(html: string): NodeListOf<ChildNode> {

  if (parseFromTemplate) {
    return parseFromTemplate(html);
  }
  return parseFromString(html);
}