import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import BinaryTreeLib from './data_structures/bin_tree';
import MinimumDifference from './data_structures/minimum_difference';
it("check empty BST", () => {
  var BST = new BinaryTreeLib.BinarySearchTree();
  
  expect(BST.size()).toBe( 0);
});

it("check if correct amount inserted", () => {
  var BST = new BinaryTreeLib.BinarySearchTree();
  var arr = [0, 1, 1, 2, 3, 4, 5, 6, 7]
  var answer = [0, 1, 2, 3, 4, 5, 6, 7];
  arr.forEach(function(val, idx) {
    BST.insert(val, idx);
  })
  
  expect(BST.size()).toBe( answer.length);
});

it("Sample test", () => {
  var sample =  [ 5, 8, 2, 4 ];
  var answer = [ 2,4,5,8]
  var BST = new BinaryTreeLib.BinarySearchTree();
  sample.forEach(function(val, idx) {
    BST.insert(val, idx);
  })
  var n = BST.rbegin();
  var output = []
  while(n) {
    output.push(n.getValue());
    n = n.rnext();
  }
  expect(output).toEqual(expect.arrayContaining( answer));
});

it("keep the array in order", () => {
  var BST = new BinaryTreeLib.BinarySearchTree();
  var arr = [0, 1, 1, 2, 3, 4, 5, 6, 7]
  var answer = [0, 1, 2, 3, 4, 5, 5, 6, 7];
  arr.forEach(function(val, idx) {
    BST.insert(val, idx);
  })
  var n = BST.begin();
    
  var output = []
  while(n) {
    output.push(n.getValue());
    n = n.next();
  }
  expect(output).toEqual(expect.arrayContaining( answer));
});

it("sort with duplicates", () => {
  var BST = new BinaryTreeLib.BinarySearchTree();
  var arr = [0, 1, 1, 3, 7, 6]
  var answer = [0, 1, 3, 6, 7];
  arr.forEach(function(val, idx) {
    BST.insert(val, idx);
  })
  var n = BST.begin();
    
  var output = []
  while(n) {
    output.push(n.getValue());
    n = n.next();
  }
  expect(output).toEqual(expect.arrayContaining( answer));
});

it("Sample test", () => {
  var sample =  [ 5, 8, 2, 4 ];
  var [diff, indexes] = MinimumDifference.MinimumDifference(sample)
  expect(diff).toBe(1);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


