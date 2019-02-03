
# Problem

Write a function that takes in an array of numbers and returns the minimum difference between any two numbers in the array.
For example if the array is [ 5, 8, 2, 4 ] then the minimum difference would be 1 because array[0] = 5 and array[3] = 4 leading to 5 - 4 = 1.
##Constraints:
You can only subtract from left to right (ex: you can't do 4 - 2 since that's going backwards but you can do 5 - 2).
You can't subtract a number from itself (ex: 5 - 5)
Result can't be negative (ex: 5 - 8)

##Size of Problem space:
This problem has an upper bound of n! comparisons. Each iteration compares 1 less value such that (n-1)(n-2)(n-3).... until (n-n+1).

## Constraints
All comparions must by compared to any value on the right side
Negative and zero minimum differences are impossible since values cannot compare to itself and a number larger than itself

## Goal:
Write an algorithm that is faster than O(n!) which is similar to n^n runtime

## A naive solution in psuedo code
### Runtime Complexity of O(n!)
### Space Complexity of O(1) if the user only needs 1 pair or less indexes 
```
fn solution(arr){
   var maxValue = maxInt
   # I debate whether or not to include this feature in space complexity
   # This feature is not needed in the algorithm for the solution
   var idxList = [] 
   for( var i = 0; i < arr.length - 1; i++)
     for( var j = i + 1; i < arr.length - 1; j++)
        if( arr[i] > arr[j]){
            var d = arr[i] - arr[j];
            if (d == maxValue){
               idxList.append( (i,j))  
            } else {
              if( d < maxValue){
                 maxValue = d
                 idxList = [(i,j)]
              }
            }
        }
    return ( maxValue, idxList)
}
```
## Solutions:
### Proposal 1: Skip List
Skip List as Linked List which has more meta data which allows binary searching.
Insert and neighbor lookup should be O(1) after the position is found.

### Proposal 2: BST

Since this problem requires the node to see its parent, parent reference is needed.


Future Considerations

## Proper Floyd heap sort https://en.wikipedia.org/wiki/Binary_heap#Building_a_heap

## Rational:
My first task was to create a naive solution to evaluate the worst time and space complexity of the problem. This solution would be useful as a tester and a goal

I attempted to use hash maps as the solution since coding questions use them often. A common question is to find two numbers which add up to a given sum. I soon realized that the value needs their ordered neighbors which requires some ability to sort the list.

Evaluting right to left requires me to build the whole tree then remove each element in order at a time. However, evaluting left to right allow me to slowly build the tree as I evaluate each element.

This problem burdens two operations: insert and neighbor lookup. In an unrealistic scenerio, I can slowly build the assoriated array such that given this array [2,4,8]. I can binary search between 4 and 8 to grab the neighbors 5 and 8 while I insert 5 and memmove the entire right array. These operations meet the requirement for a data structure. A data structure is useful when the cost of building and maintaining outweighs the althernative algorithm.

Since memmove huge chucks of memory operations are expensive, I thought about creating a linked list which requires arbitary inserts. Skiplist was brainstorm due to its ability to binary search and see its neighbors.

In addition, the BST has well defined structured. I can find closest neighbors given whether or not the node is a leaf or branch
