import ReactDOM from 'react-dom';
import React from 'react';

export function render(element) {
  ReactDOM.render(<div>Hello JSX</div>, element);
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}
