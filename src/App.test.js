import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import BinaryTree from './data_structures/bin_tree';

it("keep the array in order", () => {
  var arr = [0, 1, 1, 2, 3, 4, 5, 6, 7]
  var answer = [0, 1, 2, 3, 4, 5, 5, 6, 7];
  var BST = BinaryTree.BinaryTree();
  arr.forEach(function(val, idx) {
    BST.insert(val, idx);
  })
  var n = BST.next();
  var output = []
  while(n) {
    output.push(n.getValue());
  }
  expect(output, answer);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


