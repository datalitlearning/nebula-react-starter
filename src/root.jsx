import ReactDOM from 'react-dom';
import React from 'react';
import Table from './components/Table';
import properties from './object-properties';

export function render(element) {
  ReactDOM.render(<div>Hello JSX</div>, element);
}

export function teardown(element) {
  ReactDOM.unmountComponentAtNode(element);
}
