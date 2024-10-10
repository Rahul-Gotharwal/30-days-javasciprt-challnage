// // youtube video example
// let counter = 0;
// const getData = () =>{
//     console.log("the api call is happen" , counter++ )
// }

// const Debounce =(fn,delay) =>{
// let timer
//  return function (...args) {
//     clearTimeout(timer)
//   timer = setTimeout(() => {
//     fn.apply(this, args)
//   }, delay);
//  }
// }

// const betterFunction = Debounce(getData , 300);
// betterFunction(); // This should not log immediately
// betterFunction(); // This should not log immediately
// setTimeout (() => betterFunction(),300)
// setTimeout(() => betterFunction(), 500);
/*
betterFunction() is called, and the debounced getData function is scheduled to execute after 300 milliseconds.

Before the 300 milliseconds elapse, betterFunction() is called again. This resets the timer, so the debounced function will wait another 300 milliseconds.

After 500 milliseconds, the last call to betterFunction() is made. This time, since the timer has not been reset within the last 300 milliseconds, the debounced function is finally executed, and the counter is incremented.

To see the effect more clearly, you can modify the delay in the Debounce function and observe how it impacts the execution of the debounced function. For example:

javascript
Copy code {const betterFunction = Debounce(getData, 100);}
const betterFunction = Debounce(getData, 100);
With this change, the debounced function will execute after 100 milliseconds of inactivity, and you should observe different behavior based on the adjusted delay.
*/


// cahtgpt code
function debounce(fn, t) {
    let timer;
  
    return function (...args) {
      clearTimeout(timer);
  
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, t);
    };
  }
  
  // Example usage:
  let start = Date.now();
  function log(...inputs) {
    console.log([Date.now() - start, inputs]);
  }
  
  const dlog = debounce(log, 50);
  
  setTimeout(() => dlog(1), 50); // this line can be remove because the it is not sheduled 
  setTimeout(() => dlog(2), 75);
  setTimeout(() => dlog("hell"), 500);
  
  /* 
  notes  for the queston to underastnd
  The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).
the second call is reset again at the time 50 again so 50 +75 = > 125
  
  */

/*
setTimeout(() => dlog(1), 50);: The first call to dlog is scheduled after 50 milliseconds. However, since the debounce delay is set to 50 milliseconds, the timer is cleared, and the debounced function is not executed immediately.

setTimeout(() => dlog(2), 75);: The second call to dlog is scheduled after 75 milliseconds. This occurs before the 50 milliseconds delay from the first call has passed, so the timer is reset. The debounced function is still not executed.

setTimeout(() => dlog(3), 500);: The third call to dlog is scheduled after 500 milliseconds. This occurs after both the 50 milliseconds and 75 milliseconds delays from the first two calls have passed. Therefore, the debounced function is executed with the latest input, which is 3.

Now, let's look at the output:

[143, [2]]: The debounced function is executed after 143 milliseconds (50 milliseconds + 75 milliseconds + some additional time for execution). The inputs for this execution are [2], which is the latest input from the second call.

[576, [3]]: The debounced function is executed again after 576 milliseconds (500 milliseconds + some additional time for execution). The inputs for this execution are [3], which is the latest input from the third call.
*/ 