import React, { useState, useEffect, useCallback, useRef } from 'react';

export interface ReactSimpleClampProps {
  tag?: string;
  autoresize?: boolean;
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded: boolean;
  content: string;
}

function useClamped(content: string, offset: number | null) {
  const [clamped, setClamped] = useState<boolean>(false);

  useEffect(() => {
    if (!content) {
      setClamped(false);
    } else {
      setClamped(offset !== content.length);
    }
  }, [content, offset]);

  return clamped;
}

function useScreenMaxHeight(internalExpanded: boolean, maxHeight: number | string): string {
  const [screenMaxHeight, setScreenMaxHeight] = useState<string>('');

  useEffect(() => {
    if (internalExpanded) {
      setScreenMaxHeight('');
    } else if (!maxHeight) {
      setScreenMaxHeight('');
    } else {
      setScreenMaxHeight(typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight);
    }
  }, [internalExpanded, maxHeight]);

  return screenMaxHeight;
}

function useOverflowed(
  maxLines: number,
  maxHeight: string,
  tagRef: React.MutableRefObject<HTMLElement>,
  contentRef: React.MutableRefObject<HTMLElement>,
): boolean {
  const [overflowed, setOverflowed] = useState<boolean>(false);
  const contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;

  useEffect(() => {
    if (!maxLines && !maxHeight) {
      setOverflowed(false);
    } else if (maxLines && contentLines > maxLines) {
      setOverflowed(true);
    } else if (maxHeight && tagRef.current.scrollHeight > tagRef.current.offsetHeight) {
      setOverflowed(true);
    } else {
      setOverflowed(false);
    }
  }, [maxLines, maxHeight, tagRef, contentLines]);
  return overflowed;
}

function useScreenContent(content: string, offset: number, clamped: boolean, ellipsis: string): string {
  const [screenContent, setScreenContent] = useState<string>(content);

  useEffect(() => {
    setScreenContent(clamped ? `${content.slice(0, offset)}${ellipsis}` : content);
  }, [content, offset, clamped, ellipsis]);

  return screenContent;
}

const ReactSimpleClamp: React.FC<ReactSimpleClampProps> = (properties) => {
  const { tag = 'div', ellipsis = '...', content, maxHeight, maxLines, expanded } = properties;

  const tagRef = useRef() as React.MutableRefObject<HTMLElement>;
  const contentRef = useRef() as React.MutableRefObject<HTMLElement>;

  const [offset, setOffset] = useState<number>(content.length || 0);
  const [internalExpanded, setInternalExpanded] = useState<boolean>(expanded);

  const clamped = useClamped(content, offset);
  const screenContent = useScreenContent(content, offset, clamped, ellipsis);
  const screenMaxHeight = useScreenMaxHeight(internalExpanded, maxHeight);
  const overFlowed = useOverflowed(maxLines, screenMaxHeight, tagRef, contentRef);

  const search = useCallback(
    (from = 0, to = offset) => {
      const contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;
      if (to - from <= 3) {
        while ((!overFlowed || contentLines < 2) && offset < content.length) {
          setOffset(offset + 1);
        }
        while (overFlowed && contentLines > 1 && offset > 0) {
          setOffset(offset - 1);
        }
        return;
      }
      const target = Math.floor((to + from) / 2);
      setOffset(target);
      if (overFlowed) {
        search(from, target);
      } else {
        search(target, to);
      }
    },
    [overFlowed, offset, content, contentRef],
  );

  useEffect(() => {
    if (!internalExpanded && (overFlowed || clamped)) {
      search();
    }
  }, [clamped, overFlowed, internalExpanded, search]);

  const contentWrapper = <span>{screenContent}</span>;
  const linesWrapper = (
    <span ref={contentRef} style={{ boxShadow: 'transparent 0 0' }}>
      {contentWrapper}
    </span>
  );
  return React.createElement(tag, { style: { overflow: 'hidden' }, ref: { tagRef } }, linesWrapper);
};

export default ReactSimpleClamp;
