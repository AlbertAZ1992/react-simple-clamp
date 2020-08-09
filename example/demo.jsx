import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Clamp, { ClampHtml } from '../src';
// import './style.css';

const text = 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello'
const html =  'helloworld<span></span><span></span><span style="color: #167781">hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello<i>hellohellohellohellohellohellohellohello</i>hellohello<span>hellohellohellohello</span>hellohello<span>helloworld'
const App = () => {
  const [expanded, setExpended] = useState(false);
  return (
    <div>
      <h2>Clamp Text</h2>
      <div style={{width: 200, background: '#f5f5f5', marginBottom: 30}} >
        <Clamp
          content={text}
          maxHeight={60}
          maxLines={2}
          expanded={expanded}
          renderAfter={
            (clamped) => (<span style={{background: '#61dafb', padding: '0 4px' }} onClick={() => { setExpended(!!clamped) }}>{clamped ? 'open' : 'close'}</span>)
          }
        />
      </div>

      <div style={{width: 200, background: '#f5f5f5', marginBottom: 30}} >
        <Clamp
          content={text}
          maxHeight={120}
          expanded={expanded}
          renderAfter={
            (clamped) => (<span style={{background: '#61dafb', padding: '0 4px' }} onClick={() => { setExpended(!!clamped) }}>{clamped ? 'open' : 'close'}</span>)
          }
        />
      </div>

      <div style={{width: 200, background: '#f5f5f5', marginBottom: 30}} >
        <Clamp
          content={text}
          maxLines={3}
          expanded={expanded}
          renderAfter={
            (clamped) => (<span style={{background: '#61dafb', padding: '0 4px' }} onClick={() => { setExpended(!!clamped) }}>{clamped ? 'open' : 'close'}</span>)
          }
        />
      </div>

      <h2>Clamp Html</h2>
      <div style={{width: 200, background: '#f5f5f5', marginBottom: 30}} >
        <ClampHtml
          content={html}
          maxLines={3}
          expanded={expanded}
          renderAfter={
            (clamped) => (<span style={{background: '#61dafb', padding: '0 4px' }} onClick={() => { setExpended(!!clamped) }}>{clamped ? 'open' : 'close'}</span>)
          }
        />
      </div>
    </div>
  )
};


ReactDOM.render(<App />, document.querySelector('#app'));