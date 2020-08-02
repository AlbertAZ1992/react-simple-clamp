import React from 'react';
import Clamp from './clamp';

export interface ClampTextProps {
  autoresize?: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded?: boolean;
  content: string;
}

const ClampText: React.FC<ClampTextProps> = (properties) => {
  const { content, ...restProps } = properties;

  const renderClampedContent = (offset: number, ellipsis: string) => {
    return <span>{`${content.slice(0, offset)}${ellipsis}`}</span>;
  };

  const renderContent = () => {
    return <span>{content}</span>;
  };

  return (
    <Clamp content={content} renderContent={renderContent} renderClampedContent={renderClampedContent} {...restProps} />
  );
};

export default ClampText;
