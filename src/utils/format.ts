import { Element, Text } from 'domhandler';
import { INLINE_HTL_TAG_NAMES } from './constants';


export function formatAttributes(attributes: NamedNodeMap): Record<string, string> {
  const result: Record<string, string> = {};
  for (let i = 0; i < attributes.length; i++) {
    result[attributes[i].name] = attributes[i].value;
  }

  return result;
}

export function formatDOMNodes(nodes: NodeListOf<ChildNode>, parent: Element | null = null): (Element | Text)[] {
  const result = [];
  const len = nodes.length;
  for (let index = 0; index < len; index++) {
    const node = nodes[index];
    let current;
    switch (node.nodeType) {
      case 1:
        if (node instanceof HTMLElement && INLINE_HTL_TAG_NAMES.has(node.nodeName.toLowerCase())) {
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

