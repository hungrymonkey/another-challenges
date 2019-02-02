
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
Write an algorithm that is faster than O(n!) which is essentially n^n runtime

## A naive solution in psuedo code
### Runtime Complexity of O(n!)
### Space Complexity of O(1) if the user only needs 1 pair or less indexes 
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

## Solutions:
### Proposal 1: Skip List
Skip List as Linked List which has more meta data which allows binary searching.


### Proposal 2:

Rational:
My first task was to create a naive solution to evaluate the worst time and space complexity of the problem. This solution would be useful as a tester and a goal
