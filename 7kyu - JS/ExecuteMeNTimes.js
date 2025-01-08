// You're given a procedure / method that executes a passed action n times, but it does so in a purely sequential manner. If you inspect the sample tests, you'll find that the action takes about 1 second to complete, and this action is repeated 20 times which results in a timeout.

// Find a way to execute the action n times in parallel, such that the sample tests complete under the 12 second time limit imposed by Codewars. The submission tests will also test for similar scenarios.

// arr is passed to promise.all(). means the arr consists of promises as elements
// execute is marked as async, meaning it deals with async operations, meaning action is async operation and returns promise
async function execute(action, nTimes){
  const arr = [];  // for all promises returned by each action() call
  for(let i = 0; i < nTimes; i++){
    arr.push(action());
  }
  await Promise.all(arr);
}