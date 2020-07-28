import React from 'react';

var FCCounter = function FCCounter(properties) {
  var label = properties.label,
    count = properties.count,
    onIncrement = properties.onIncrement;
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement('span', null, label, ': ', count),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        role: 'button',
        tabIndex: 0,
        onClick: function onClick() {},
        onKeyDown: onIncrement,
      },
      'Increment',
    ),
  );
};
// export default {};

export default FCCounter;
