import { Element, Text } from 'domhandler';
import { possibleStandardNames, getPropertyInfo, BOOLEAN, OVERLOADED_BOOLEAN } from 'react-property';
import { INLINE_HTL_TAG_NAMES } from './constants';

export function styleToProps(styles: string): Record<string, string> {
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
  } catch {
    return {};
  }
}

export function attributesToProps(attributes: Record<string, unknown>): Record<string, unknown> {
  const props: Record<string, unknown> = {};
  for (const attributeName in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, attributeName)) {
      const attributeValue = attributes[attributeName];
      const lowerCasedName = attributeName.toLowerCase();

      if (lowerCasedName === 'style' && typeof attributeValue === 'string') {
        props.style = styleToProps(attributeValue);
        continue;
      }

      const propName = possibleStandardNames[lowerCasedName];
      if (propName) {
        props[propName] = attributeValue;
        const propInfo = getPropertyInfo(propName);
        switch (propInfo && propInfo.type) {
          case BOOLEAN:
            props[propName] = true;
            break;
          case OVERLOADED_BOOLEAN:
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

export function isValideInlineHtmlNode(node: Element | Text): boolean {
  if (node.type === 'text' && node instanceof Text) {
    return true;
  }
  if (node.type === 'tag' && node instanceof Element) {
    return INLINE_HTL_TAG_NAMES.has(node.name.toLowerCase());
  }
  return false;
}


