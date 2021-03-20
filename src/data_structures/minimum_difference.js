if ( typeof require === "function"){
   var BinaryTree = require('./bin_tree.js').BinarySearchTree;
}

function minimumDifference(arr)  {
    var BST = new BinaryTree();
    var smallest = Number.MAX_SAFE_INTEGER;
    var indexes = [];
    BST.insert(arr[arr.length-1], arr.length-1)
	for(let i = arr.length-1; i !== 0; i--){
        let idx = i-1;
        let n = BST.insert(arr[idx], idx);
        let neighbor = n.rnext();
        
        if( neighbor) {
            if(smallest > ( n.getValue() - neighbor.getValue())){
                smallest = n.getValue() - neighbor.getValue();
                indexes = neighbor.getIndexes().map(( value ) => [idx, value]);
            }
        }
    }
    //check if there is any result
    return [smallest === Number.MAX_SAFE_INTEGER? -1 : smallest, indexes]
}


(function(exports){
    exports.MinimumDifference = minimumDifference;
  }(typeof exports === 'undefined' ? this.MinimumDifferenceLib = {} : exports));
  