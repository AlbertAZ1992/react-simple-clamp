import React from 'react';
import { Element, Text } from 'domhandler';
import { ELEMENTS_NO_TEXT_CHILDREN, } from './constants';
import { isValideInlineHtmlNode, attributesToProps } from './helper';


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


export function parseDomNodesToReactNodes(
  nodes: (Element | Text)[], 
  replace?: (domNode: Text) => JSX.Element | Record<string, unknown> | void | undefined | null | false
): string | JSX.Element | (string | JSX.Element)[] {
  const len = nodes.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    const node = nodes[i];

    if (!isValideInlineHtmlNode(node)) {
      continue;
    }

    if (node.type === 'text' && node instanceof Text) {
      const isWhitespace = !node.data.trim().length;
      if (isWhitespace && node.parent && node.parent instanceof Element && ELEMENTS_NO_TEXT_CHILDREN.has(node.parent.name)) {
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
      children = parseDomNodesToReactNodes(node.children as (Element | Text)[], replace);
    }

    if (len > 1) {
      props.key = props.key || i; 
    }

    result.push(React.createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}



export function parseDOMNodes(html: string): NodeListOf<ChildNode> {
  if (parseFromTemplate) {
    return parseFromTemplate(html);
  }
  return parseFromString(html);
}