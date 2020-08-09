import React from 'react';
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
declare const ClampText: React.FC<ClampTextProps>;
export default ClampText;
