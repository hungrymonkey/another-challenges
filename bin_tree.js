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
    return null;
  }
  var n = this.root;
  //insert value into tree
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

  exports.BinaryTree = BinarySearchTree;

}(typeof exports === 'undefined' ? this.BinaryTreeLib = {} : exports));


