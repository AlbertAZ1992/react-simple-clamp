import React, { Fragment } from 'react';
import htmlDomParser from 'html-dom-parser';
import { Element, Text } from 'domhandler';
import { parseDomNodesToReactNodes } from './utils';
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


function parseInlineHtmlToReactNodes(html: string, replace?: (domNode: Text) => JSX.Element | Record<string, unknown> | void | undefined | null | false) {
  if (typeof html !== 'string') {
    throw new TypeError('react-simple-clamp only accepts string as html content');
  }
  if (html.trim() === '') {
    return null;
  }
  const domNodes = htmlDomParser(html);
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
        { parseInlineHtmlToReactNodes(content, replace) }
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
