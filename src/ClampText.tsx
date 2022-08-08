import React, { Fragment } from 'react';
import Clamp from './clamp';

export interface ClampTextProps {
  autoresize?: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded?: boolean;
  content: string;
  className?: string;
  renderAfter: (clamped: boolean) => JSX.Element | JSX.Element[];
}

const defaultProps: Partial<ClampTextProps> = {
  autoresize: false,
  ellipsis: '',
  expanded: false,
  className: '',
};

const ClampText: React.FC<ClampTextProps> = (properties) => {
  const { content, renderAfter = () => <Fragment />, ...restProps } = properties;

  const renderClampedContent = (offset: number, ellipsis: string) => {
    return (
      <span>
        {`${content.slice(0, offset)}${ellipsis}`}
        {renderAfter(true)}
      </span>
    );
  };

  const renderContent = () => {
    return (
      <span>
        {content}
        {renderAfter(false)}
      </span>
    );
  };

  return (
    <Clamp content={content} renderContent={renderContent} renderClampedContent={renderClampedContent} {...restProps} />
  );
};

ClampText.defaultProps = defaultProps;

export default ClampText;
