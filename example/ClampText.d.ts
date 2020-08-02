import React from 'react';
export interface ClampTextProps {
  autoresize?: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded?: boolean;
  content: string;
}
declare const ClampText: React.FC<ClampTextProps>;
export default ClampText;
