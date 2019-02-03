import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import BinaryTreeLib from './data_structures/bin_tree';

it("check empty BST", () => {
  var BST = new BinaryTreeLib.BinarySearchTree();
  
  expect(BST.size()).toBe( 0);
});

it("check if correct amount inserted", () => {
  var BST = new BinaryTreeLib.BinarySearchTree();
  var arr = [0, 1, 1, 2, 3, 4, 5, 6, 7]
  var answer = [0, 1, 2, 3, 4, 5, 5, 6, 7];
  arr.forEach(function(val, idx) {
    BST.insert(val, idx);
  })
  
  expect(BST.size()).toBe( answer.length);
});

it("keep the array in order", () => {
  var BST = new BinaryTreeLib.BinarySearchTree();
  var arr = [0, 1, 1, 2, 3, 4, 5, 6, 7]
  var answer = [0, 1, 2, 3, 4, 5, 5, 6, 7];
  arr.forEach(function(val, idx) {
    BST.insert(val, idx);
  })
  var n = BST.next();
  var output = []
  while(n) {
    output.push(n.getValue());
  }
  expect(output).toBe( answer);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


