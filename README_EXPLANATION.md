
# Problem

Write a function that takes in an array of numbers and returns the minimum difference between any two numbers in the array.
For example if the array is [ 5, 8, 2, 4 ] then the minimum difference would be 1 because array[0] = 5 and array[3] = 4 leading to 5 - 4 = 1.
## Constraints:
You can only subtract from left to right (ex: you can't do 4 - 2 since that's going backwards but you can do 5 - 2).
You can't subtract a number from itself (ex: 5 - 5)
Result can't be negative (ex: 5 - 8)

All comparions must by compared to any value on the right side
Negative and zero minimum differences are impossible since values cannot compare a number larger than itself.

## Size of Problem space:
This problem has an upper bound of n! comparisons. Each iteration compares 1 less value such that (n-1)(n-2)(n-3).... until (n-n+1).

## Goal:
Write an algorithm that is faster than O(n!) with a reasonable amount of space used.

## A naive solution in psuedo code
### Runtime Complexity of O(n!)
### Space Complexity of O(1) if the user only needs 1 pair or less indexes 
```
fn solution(arr){
   var minDiff = minDifference;
   # I debate whether or not to include this feature in space complexity
   # This feature is not needed in the algorithm for the solution
   var idxList = [] 
   for( var i = 0; i < arr.length - 1; i++)
     for( var j = i + 1; i < arr.length - 1; j++)
        if( arr[i] > arr[j]){
            var d = arr[i] - arr[j];
            if (d == minDiff){
               idxList.minDiff( (i,j))  
            } else {
              if( d < minDiff){
                 minDiff = d
                 idxList = [(i,j)]
              }
            }
        }
    return ( minDiff, idxList)
}
```
## Solutions:
### Proposal 1: Skip List - Not Implemented
* SkipList is a LinkedList with extra metadata for binary searching.
* Insert and neighbor lookup should be O(1) after the position is found.

Runtime: O(nlogn) Each element requires O(logn) time to complete
Space: O(n) to O(nlogn) The space complexity is determined on how the binary search levels are implemented.

### Proposal 2: BST - Implemented
* BST tree can walk to its neighbor and its nodes are sorted by nature.
* Since this problem requires a node walk, children nodes must see their parents.

Runtime: O(nlogn) Each element requires O(logn) time to complete
Space: O(n) each element is only inserted once. In fact, the space might be lower than n when there are duplicates


## Future Considerations

### Performance

* Proper Floyd heap sort https://en.wikipedia.org/wiki/Binary_heap#Building_a_heap
* Implement and test skip lists
* Implement delete and modify so the whole tree does not need to be rebuilt.

### Frontend
* Use Jison to test grammars and implement error messages
* Create more visuals results.


## Rationale:
Naive Solution: A native solution can be used as a reference as the absolute floor of runtime performance.

Giving up Hashmaps: Coding test abused hash maps often. This problem needs to see each elements sorted neighbor from an unsorted list. Hashmaps do not sort arrays which eliminates this data structure.

Evaluate the Array in reverse: 
The tree needs need to be built and remove one by one when the array is evaluated right to left.
However, each element is evaluated as the tree is built right to left which removes unnecessary deletes

Data Structure: This problem overuses two operations: insert and neighbor lookup. In an unrealistic scenerio, this problem requires arbitary inserts in the middle of the array. Since memove is slow, a data structure can provide cheap inserts and neighbor transversal.

Skip List: Since memmove is expensive for moving huge chucks of memmory, LinkedList has O(1) inserts. Neverless, linkedlist needs to be traversed linearly. LinkedList needs to be O(logn) or faster to have an overall performance of O(nlogn). A Skip List is essentially a binary searched linkedlist.

BST: BST can be walked in either order. Inserts have a reasonable log n time. Therefore, time complexity is more likely O(nlogn).

SPA-ReactJS: This assignment has a criteria of being presented to a client rather than an academic or a manager.
Clients want observable testable demos. I applied to a Reactjs job.
If this challenge was presented to an academic, I would need to achieve some type of rigor. My test cases would be more comprehensive and documented as unique with little deplication. 
If this challenge was presented to a manager, the code would have a better overview and become more shareable for the rest of the team.
