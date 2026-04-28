1. Explain in simple words the following programming paradigms:
i. [5 points] Imperative
Imperative is when giving the computer a step by step list of instructions
ii. [5 points] Object Oriented
is when you define objects and give them properties(data) and call their methods(functions) between these objects.
iii. [5 points] Functional
is when the program is a series of expressions to be evaluated. The focus is on what to compute rather than how to move data in memory functions are treated like any other value. they can be passed as arguments to other functions or returned as results.
2. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
when using the imperative paradigm the code can become sacttered and unreadble using OOP organizes things into encapsulated objects. it keeps related data and behaviors together, which makes the code much easier to manage, resuse and think about 
3. [5 points] How does the functional paradigm improve over the object oriented paradigm?
when using OOP the objects internal state constantly changes which can possible lead to error if diffrent parts of the system are trying to change the same object at the same time. functinal programing avoids this by using immutable data. since function dont change anything outside of themselves, the code is more predictable and easier to test

1.2 

const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {
    const discounted = inventory.filter(p => p.discounted);
    if (discounted.length === 0) return 0;
    return discounted.reduce((sum, p) => sum + p.price, 0) / discounted.length;
};

1.3
1. [3 points] (x, y) => x.some(y)
<T>(x: T[], y: (element: T) => boolean) => boolean

2. [3 points] x => x.map(y => y * 2)
(x: number[]) => number[]

3. [3 points] (x, y) => x.filter(y)
<T>(x: T[], y: (element: T) => boolean) => T[]

4. [3 points] x => x.reduce((acc, cur) => acc + cur, 0)
(x: number[]) => number[]

5. [3 points] (x, y) => x ? y[0] : y[1]
<T>(x: boolean, y: T[]) => T

6. [3 points] (f,g) => x => f(g(x+1))
<T, U>(f: (val: T) => U, g: (val: number) => T) => (x: number) => U