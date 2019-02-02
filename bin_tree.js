"use strict";

function Node( val, idx ) {
   this.value = val;
   this.indexList = [idx];
   this.parent = null;
   this.left = null;
   this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.insert = function(val, idx){
  var temp = new Node(val, idx);
  if( !this.root){
    this.root = temp;
    return null;
  }
  var n = this.root;
  while( n ) {

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

  exports.BinaryTree = BinaryTree; 

}(typeof exports === 'undefined' ? this.BinaryTreeLib = {} : exports));


