import React from 'react';
export interface ReactSimpleClampProps {
  tag?: string;
  autoresize?: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded: boolean;
  content: string;
}
declare const ReactSimpleClamp: React.FC<ReactSimpleClampProps>;
export default ReactSimpleClamp;
