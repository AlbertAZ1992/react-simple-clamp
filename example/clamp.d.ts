import React from 'react';
export interface ReactSimpleClampProps<T> {
    autoresize?: boolean;
    maxLines: number;
    maxHeight: number | string;
    ellipsis?: string;
    expanded?: boolean;
    className?: string;
    content: T;
    renderContent: () => JSX.Element | JSX.Element[];
    renderClampedContent: (offset: number, ellipsis: string) => JSX.Element | JSX.Element[];
}
declare const ReactSimpleClamp: React.FC<ReactSimpleClampProps<string | Array<string>>>;
export default ReactSimpleClamp;
