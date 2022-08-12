import React from 'react';
import reactProperty from 'react-property';
import styleToJS from 'style-to-js';
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

function getStyleProps(style: string) {
  try {
    return styleToJS(style, { reactCompat: true });
  } catch  {
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
    inlineHtmlTagNames.has(node.name.toLowerCase());
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