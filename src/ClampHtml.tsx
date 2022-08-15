import React, { Fragment } from 'react';
// import { parseDocument } from 'htmlparser2';
import { Element, Text } from 'domhandler';
import { parseDomNodesToReactNodes, formatDOMNodes, parseDOMNodes } from './utils';
import Clamp from './clamp';

export interface ClampInlineHtmlProps {
  autoresize?: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded?: boolean;
  content: string;
  className?: string;
  renderAfter: (clamped: boolean) => JSX.Element | JSX.Element[];
}

const defaultProps: Partial<ClampInlineHtmlProps> = {
  autoresize: false,
  ellipsis: '',
  expanded: false,
  className: '',
};

const HTML = 'html';
const HEAD = 'head';
const BODY = 'body';
const FIRST_TAG_REGEX = /<([A-Za-z]+\d?)/; // e.g., <h1>
// match-all-characters in case of newlines (DOTALL)
// const HEAD_TAG_REGEX = /<head[^]*>/i;
// const BODY_TAG_REGEX = /<body[^]*>/i;


function parseInlineHtmlToReactNodes(html: string, replace?: (domNode: Text) => JSX.Element | Record<string, unknown> | void | undefined | null | false) {
  if (typeof html !== 'string') {
    throw new TypeError('react-simple-clamp only accepts string as html content');
  }
  if (html.trim() === '') {
    return null;
  }

  let firstTagName;
  const match = html.match(FIRST_TAG_REGEX);

  if (match && match[1]) {
    firstTagName = match[1].toLowerCase();
  }


  switch (firstTagName) {
    case HTML:
    case HEAD:
    case BODY:
      throw new TypeError('react-simple-clamp only accepts inline html content');
    default:

  }

  const domNodes =  formatDOMNodes(parseDOMNodes(html));

  return parseDomNodesToReactNodes(domNodes as (Element | Text)[], replace);

}

const ClampInlineHtml: React.FC<ClampInlineHtmlProps> = (properties) => {
  const { content = '', renderAfter = () => <Fragment />, ...restProps } = properties;

  const renderClampedContent = (offset: number, ellipsis: string) => {
    let count = 0;
    let finished = false;

    const replace = (domNode: Text) => {
      if (count === offset || finished) {
        return <Fragment />;
      }
      if (count + domNode.data.length <= offset) {
        count += domNode.data.length;
        return;
      }
      const gap = offset - (count + domNode.data.length - offset);
      finished = true;
      return <Fragment>{domNode.data.slice(0, gap)}</Fragment>;
    }

    return (
      <Fragment>
        {parseInlineHtmlToReactNodes(content, replace)}
        <span>{ellipsis}</span>
        {renderAfter(true)}
      </Fragment>
    );
  };

  const renderContent = () => {
    return (
      <Fragment>
        {parseInlineHtmlToReactNodes(content)}
        {renderAfter(false)}
      </Fragment>
    );
  };

  return (
    <Clamp content={content} renderContent={renderContent} renderClampedContent={renderClampedContent} {...restProps} />
  );
};

ClampInlineHtml.defaultProps = defaultProps;

export default ClampInlineHtml;
