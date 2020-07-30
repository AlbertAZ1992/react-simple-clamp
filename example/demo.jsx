import React from 'react';
import ReactDOM from 'react-dom'
import Clamp from '../src';
// import './style.css';

const App = () =>  (
  <div>
    <span>Default</span>
    <Clamp content='你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好' maxHeight={40} maxLines={2}/>
  </div>
);


ReactDOM.render(<App />, document.querySelector('#app'));