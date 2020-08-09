# react-simple-clamp

React clamping component, both text and html content support

## Features

- both text and html inline content can be clamped
- configure only with max height and or max lines
- customizable ellipsis

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
  content: string;
  className?: string;
}
```

| prop      | type              | default              | description                                                                                 |
| --------- | ----------------- | -------------------- | ------------------------------------------------------------------------------------------- |
| content   | `string`          |                      | Text to clamp, text or _inline html_                                                        |
| maxLines  | `number`          |                      | Max number of display lines                                                                 |
| maxHeight | `number | string` |                      | Max height of component, can be configure with number of px value or string of CSS property |
| ellipsis  | `string`          | `...`                | Ellipsis content after the clamped content                                                  |
| className | `string`          | `react-simple-clamp` | CSS class names added to component                                                          |

## License

[MIT](https://github.com/AlbertAZ1992/react-simple-clamp/blob/master/LICENSE)
