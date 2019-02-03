"use strict";

function Node( val, idx ) {
   this.value = val;
   this.indexList = [idx];
   this.parent = null;
   this.left = null;
   this.right = null;
}
//Iterator next
Node.prototype.next() = function(){
  if( this.right ){
    var n = this.right;
    while(n.left) {
      n = n.left;
    }
    return n;
  } else {
    var n = this.parent;
    while(n){
      if( this.value < n.value){
        break;
      }
      n = n.parent;
    }
    return n;
  }
}
//Reverse Iterator
Node.prototype.rnext() = function(){
  if( this.left ){
    var n = this.left;
    while(n.right) {
      n = n.right;
    }
    return n;
  } else {
    var n = this.parent;
    while(n){
      if( this.value > n.value){
        break;
      }
      n = n.parent;
    }
    return n;
  }
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.insert = function(val, idx){
  if( !this.root){
    this.root = new Node(val, idx);
    return this.root;
  }
  var n = this.root;
  //insert value into the tree
  var leaf = new Node(val, idx);

  //finish binary search until empty position is found
  while( n ) {
    leaf.parent = n;
    if( n.value > val) {
      n = n.left;
    } else {
      if( n.value === val ){
        n.indexList.push(idx);
        return n;
      } else {
        n = n.right;
      }
    }
  }
  //Use the set leaf to set the parent node.
  if(leaf.parent.value > val){
    leaf.parent.left = leaf;
  } else {
    leaf.parent.right = leaf;
  }
  return leaf;
}

BinarySearchTree.prototype.rbegin = function(){
  var n = this.root;
  while( n ){
    if( n.right === null)
      return n;
    n = n.right;
  }
}

BinarySearchTree.prototype.begin = function(){
  var n = this.root;
  while( n ){
    if( n.left === null)
      return n;
    n = n.left;
  }
}

(function(exports){

  exports.BinaryTree = BinarySearchTree;

}(typeof exports === 'undefined' ? this.BinaryTreeLib = {} : exports));


