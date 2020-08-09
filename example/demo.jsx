import React from 'react';
import ReactDOM from 'react-dom'
import Clamp, { ClampHtml } from '../src';
// import './style.css';

const text = 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello'
const html =  'helloworld<span></span><span></span><span style="color: #167781">hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello<i>hellohellohellohellohellohellohellohello</i>hellohello<span>hellohellohellohello</span>hellohello<span>helloworld'
const App = () =>  (
  <div>
    <h2>Clamp Text</h2>
    <div style={{width: 200, background: '#f5f5f5', marginBottom: 30}} >
      <Clamp content={text} maxHeight={40} maxLines={2}/>
    </div>

    <div style={{width: 200, background: '#f5f5f5', marginBottom: 30}} >
      <Clamp content={text} maxHeight={120}/>
    </div>

    <div style={{width: 200, background: '#f5f5f5', marginBottom: 30}} >
      <Clamp content={text} maxLines={3}/>
    </div>

    <h2>Clamp Html</h2>
    <div style={{width: 200, background: '#f5f5f5', marginBottom: 30}} >
      <ClampHtml content={html} maxLines={3}/>
    </div>
  </div>
);


ReactDOM.render(<App />, document.querySelector('#app'));