import React from 'react';

interface Props {
  tag: string;
  autoresize: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis: string;
  onIncrement: () => void;
  expanded: boolean;
  content: string;
}

const defaultProps: Props = {
  tag: 'div',
  autoresize: false,
  maxLines: 5,
  maxHeight: 120,
  ellipsis: '...',
  onIncrement: () => {},
  expanded: false,
  content: '',
};

const ReactSimpleClamp: React.FC<Props> = (properties) => {
  const { tag, content } = properties;
  const contentWrapper = <span>{content}</span>;
  const linesWrapper = <span style={{ boxShadow: 'transparent 0 0' }}>{contentWrapper}</span>;
  return React.createElement(tag, { style: { overflow: 'hidden' } }, linesWrapper);
};

ReactSimpleClamp.defaultProps = defaultProps;

export default ReactSimpleClamp;
