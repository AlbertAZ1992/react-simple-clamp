# react-simple-clamp

React clamping component, supporting both text and html inline content.

## Features

- both text and html inline content can be clamped.
- configure only with max height and or max lines.
- customizable expand(read more) and or collapse(read less) options.
- customizable ellipsis.

## Usage

### clamp normal text

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clamp from 'react-simple-clamp';
// or import { ClampText } from 'react-simple-clamp';

const text = 'hellowordhellowordhellowordhellowordhellowordhellowordhellowordhellowordhellowordhelloword';
const App = () => (
  <div style={{ width: 200 }}>
    <Clamp content={text} maxHeight={40} maxLines={2} />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
```

Using `renderAfter` and `expanded` to expand(read more) or collapse(read less) component:

```jsx
...
const App = () => {
  const [expanded, setExpended] = useState(false);
  return (
    <div style={{width: 200, background: '#f5f5f5', marginBottom: 30}} >
      <Clamp
        content={text}
        maxHeight={60}
        maxLines={2}
        expanded={expanded}
        renderAfter={
          (clamped) => (
            <span style={{background: '#61dafb', padding: '0 4px' }}
              onClick={() => { setExpended(!!clamped) }}>
              {clamped ? 'open' : 'close'}
            </span>
          )
        }
      />
    </div>
  )
};
```

### clamp html

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ClampHtml } from 'react-simple-clamp';

const html =
  'hello<span></span><span></span><span style="color: #167781">hellohellohellohellohello<i>hello</i>hellohellohellohello<span></span><span>world';
const App = () => (
  <div style={{ width: 200 }}>
    <ClampHtml content={html} maxHeight={40} maxLines={2} />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
```

## API

Both default `Clamp` (`ClampText`) and `ClampHtml` have same props

```typescript
export interface ClampProps {
  maxLines: number;
  maxHeight: number | string;
  ellipsis?: string;
  expanded?: boolean;
  content: string;
  className?: string;
  renderAfter: (clamped: boolean) => JSX.Element | JSX.Element[];
}
```

- `maxLines`: Max number of display lines
- `maxHeight`: Max height of component, can be configure with number of px value or string of CSS property
- `ellipsis`: Ellipsis content after the clamped main content
- `expanded`: Whether component is expanded
- `content`: Text to clamp, text or **[inline html elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)**
- `className`: Default CSS class name of component
- `renderAfter`: render function for the content after the main content and ellipsis content (if exist)

## License

[MIT](https://github.com/AlbertAZ1992/react-simple-clamp/blob/master/LICENSE)
