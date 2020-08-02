import React from 'react';
export interface ReactSimpleClampProps<T> {
  autoresize?: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded?: boolean;
  content: T;
  renderContent: () => React.ReactElement;
  renderClampedContent: (offset: number, ellipsis: string) => React.ReactElement;
}
declare const ReactSimpleClamp: React.FC<ReactSimpleClampProps<string | Array<string>>>;
export default ReactSimpleClamp;