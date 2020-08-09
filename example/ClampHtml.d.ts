import React from 'react';
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
declare const ClampInlineHtml: React.FC<ClampInlineHtmlProps>;
export default ClampInlineHtml;
