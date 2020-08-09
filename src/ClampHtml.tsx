import React, { Fragment } from 'react';
import parse from 'html-react-parser';
import Clamp from './clamp';

export interface ClampInlineHtmlProps {
  autoresize?: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded?: boolean;
  content: string;
  className?: string;
}

const ClampInlineHtml: React.FC<ClampInlineHtmlProps> = (properties) => {
  const { content, ...restProps } = properties;

  const renderClampedContent = (offset: number, ellipsis: string) => {
    let count = 0;
    let finished = false;
    return (
      <Fragment>
        {parse(content, {
          replace(domNode): JSX.Element | void {
            if (domNode.type === 'text') {
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
          },
        })}
        <span>{ellipsis}</span>
      </Fragment>
    );
  };

  const renderContent = () => {
    return parse(content);
  };

  return (
    <Clamp content={content} renderContent={renderContent} renderClampedContent={renderClampedContent} {...restProps} />
  );
};

export default ClampInlineHtml;
