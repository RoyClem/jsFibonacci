function fib(n) {

    // function fib() returns the nth Fibonacci number

    // typical implementations to find the fibonaci sequence rely on recursion and/or use the memoization pattern 
    // However, the bottom up approach below uses iteration and executes in O(n) time 

    if (n < 0)
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    else 
    if (n === 0 || n === 1) 
        return n;


    // compute the fibonacci series from 0 up to n
    // this requires the previous 2 numbers to be tracked 

    let savePrev = 0;   // 0th fibonacci
    let prev     = 1;   // 1st fibonacci
    let current;       

    for (let i = 1; i < n; i++) {

        // Iteration 1: current = 2nd fibonacci
        // Iteration 2: current = 3rd fibonacci
        // Iteration 3: current = 4th fibonacci
        // To get nth fibonacci ... do n-1 iterations.
        current  = prev + savePrev;
        savePrev = prev;
        prev     = current;
    }

    return current;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(-1));