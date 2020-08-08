import React from 'react';
export interface ClampInlineHtmlProps {
  autoresize?: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded?: boolean;
  content: string;
}
declare const ClampInlineHtml: React.FC<ClampInlineHtmlProps>;
export default ClampInlineHtml;
