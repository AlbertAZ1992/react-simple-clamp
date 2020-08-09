import React, { useState, useEffect, useRef } from 'react';

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

const RENDER_STATE = {
  START: 'START',
  DONE: 'DONE',
};

const RENDER_LOCATE_STATE = {
  START: 'START',
  DONE: 'DONE',
  ADD: 'ADD',
};

const RENDER_FILL_STATE = {
  ASCEND: 'ASCEND ',
  DESCEND: 'DESCEND ',
  DONE: 'DONE',
};

function isOverFlow(
  maxLines: number,
  screenMaxHeight: string,
  tagRef: React.RefObject<HTMLDivElement>,
  contentRef: React.RefObject<HTMLElement>,
): boolean {
  const contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;
  if (!maxLines && !screenMaxHeight) {
    return false;
  }
  if (maxLines && contentLines > maxLines) {
    return true;
  }
  if (screenMaxHeight && tagRef.current && tagRef.current.scrollHeight > tagRef.current.offsetHeight) {
    return true;
  }
  return false;
}

function useScreenMaxHeight(internalExpanded: boolean, maxHeight: number | string): string {
  const [screenMaxHeight, setScreenMaxHeight] = useState<string>('none');

  useEffect(() => {
    if (internalExpanded) {
      setScreenMaxHeight('none');
    } else if (!maxHeight) {
      setScreenMaxHeight('none');
    } else {
      setScreenMaxHeight(typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight);
    }
  }, [internalExpanded, maxHeight]);

  return screenMaxHeight;
}

function useScreenContent(
  content: string | string[],
  renderContent: () => JSX.Element | JSX.Element[],
  renderClampedContent: (offset: number, ellipsis: string) => JSX.Element | JSX.Element[],
  offset: number,
  contentLength: number,
  ellipsis: string,
): JSX.Element | JSX.Element[] {
  const [screenContent, setScreenContent] = useState<JSX.Element | JSX.Element[]>(() => renderContent());

  useEffect(() => {
    if (!contentLength) {
      setScreenContent(renderContent());
    } else if (offset !== contentLength) {
      setScreenContent(renderClampedContent(offset, ellipsis));
    }
  }, [content, renderContent, renderClampedContent, offset, contentLength, ellipsis]);

  return screenContent;
}

const ReactSimpleClamp: React.FC<ReactSimpleClampProps<string | Array<string>>> = (properties) => {
  const {
    ellipsis = '...',
    content,
    maxHeight,
    maxLines,
    expanded = false,
    renderContent,
    renderClampedContent,
    className = '',
  } = properties;
  const contentLength = content.length || 0;
  const tagRef = useRef() as React.RefObject<HTMLDivElement>;
  const contentRef = useRef() as React.RefObject<HTMLElement>;
  const offsetRef = useRef<number>(contentLength);

  const [offset, setOffset] = useState<number>(contentLength);
  const [internalExpanded, setInternalExpanded] = useState<boolean>(expanded);
  const [renderState, setRenderState] = useState<string>(RENDER_STATE.DONE);
  const [renderLocateState, setRenderLocateState] = useState<string>(RENDER_LOCATE_STATE.DONE);
  const [renderFillState, setRenderFillState] = useState<string>(RENDER_FILL_STATE.DONE);
  const [needLocationAdd, setNeedLocationAdd] = useState<boolean>(true);

  const screenContent = useScreenContent(content, renderContent, renderClampedContent, offset, contentLength, ellipsis);
  const screenMaxHeight = useScreenMaxHeight(internalExpanded, maxHeight);

  /** start rendering * */
  useEffect(() => {
    if (
      !internalExpanded &&
      isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) &&
      renderState === RENDER_STATE.DONE
    ) {
      setRenderState(RENDER_STATE.START);
    }
  }, [maxLines, maxHeight, ellipsis, internalExpanded, renderState, screenMaxHeight]);

  /** start locating * */
  useEffect(() => {
    if (renderState === RENDER_STATE.START) {
      setRenderLocateState(RENDER_LOCATE_STATE.START);
    }
  }, [renderState, contentLength]);

  /** locating process，find the locate position before clamp position as soon as posible * */
  useEffect(() => {
    const contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;
    const screenHeightHasSpace = tagRef.current && tagRef.current.scrollHeight <= tagRef.current.offsetHeight;
    if (renderLocateState === RENDER_LOCATE_STATE.START || renderLocateState === RENDER_LOCATE_STATE.ADD) {
      if (isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef)) {
        // need dec
        if (renderLocateState === RENDER_LOCATE_STATE.ADD) {
          // is cycle render
          setNeedLocationAdd(false);
          setOffset((prevOffset) => ~~(prevOffset - offsetRef.current));
        } else {
          setOffset((prevOffset) => ~~(prevOffset / 2));
          offsetRef.current /= 2;
        }
      } else if (
        needLocationAdd &&
        ((screenMaxHeight !== 'none' && screenHeightHasSpace) || (maxLines && contentLines < maxLines))
      ) {
        // need add to reach max-height
        // need add to reach max-lines
        setRenderLocateState(RENDER_LOCATE_STATE.ADD);
        setOffset((prevOffset) => ~~(prevOffset + offsetRef.current / 2));
        offsetRef.current /= 2;
      } else {
        setRenderLocateState(RENDER_LOCATE_STATE.DONE);
        setRenderFillState(RENDER_FILL_STATE.ASCEND);
      }
    }
  }, [renderLocateState, maxLines, contentRef, screenMaxHeight, screenContent, needLocationAdd]);

  /** filling process, fill the gap between locate position and clamp position * */
  useEffect(() => {
    const contentLines = contentRef.current ? contentRef.current.getClientRects().length : 0;
    if (renderFillState === RENDER_FILL_STATE.ASCEND) {
      if ((!isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) || contentLines < 2) && offset < contentLength) {
        setOffset(offset + 1);
        // console.log(RENDER_FILL_STATE.ASCEND);
      } else {
        setRenderFillState(RENDER_FILL_STATE.DESCEND);
      }
    } else if (renderFillState === RENDER_FILL_STATE.DESCEND) {
      if (isOverFlow(maxLines, screenMaxHeight, tagRef, contentRef) && contentLines > 1 && offset > 0) {
        setOffset(offset - 1);
        // console.log(RENDER_FILL_STATE.DESCEND);
      } else {
        setRenderFillState(RENDER_FILL_STATE.DONE);
        setRenderState(RENDER_STATE.DONE);
        offsetRef.current = contentLength;
      }
    }
  }, [renderFillState, contentLength, offset, contentRef, maxLines, screenMaxHeight]);

  const contentWrapper = <span>{screenContent}</span>;
  const linesWrapper = (
    <span ref={contentRef} style={{ boxShadow: 'transparent 0 0', wordBreak: 'break-all' }}>
      {contentWrapper}
    </span>
  );
  return (
    <div
      className={`react-simple-clamp ${className}`}
      ref={tagRef}
      style={{ overflow: 'hidden', maxHeight: screenMaxHeight }}
    >
      {linesWrapper}
    </div>
  );
};

export default ReactSimpleClamp;
