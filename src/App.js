import './App.css';
import { useState, useEffect, useRef, memo, useCallback, useMemo } from "react";
import Counter from './component/Count';
import { useDispatch } from 'react-redux';
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login';
import Profile from './component/Profile';
import { increment, decrement } from './redux/store';
import LogoutLogin from './component/LogoutLogin';
import Search from './component/Search';
import TodoList from './component/Todo';

const App = () => {
  const name = "John"
  const isNameShowing = true;
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <h1>Hello {isNameShowing? name : 'someone'}</h1> */}
      {/* <Counter/> */}
      {/* <Timer/> */}
      {/* <Stopwatch/>
      <Parent/> */}
      <LogoutLogin/>
      <Search/>

      <TodoList/>

      <h1>Welcome to learning of react</h1>
      <button onClick={e => dispatch(increment())}>Increment</button>
      <Counter />
      <button onClick={e => dispatch(decrement(2))}>Decrement</button>

      <UserContextProvider>
        <h1> Learning context api </h1>
        <Login/>
        <Profile/>
        
      </UserContextProvider>

    </div>
  );
}

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <p>Timer: {seconds}s</p>;
// }

// function Stopwatch() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     return () => {
//       clearInterval(timerRef.current);
//     };
//   }, []);

//   const startTimer = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       timerRef.current = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//       }, 1000);
//     }
//   };

//   const stopTimer = () => {
//     if (isRunning) {
//       clearInterval(timerRef.current);
//       setIsRunning(false);
//     }
//   };

//   const resetTimer = () => {
//     clearInterval(timerRef.current);
//     setIsRunning(false);
//     setSeconds(0);
//   };

//   return (
//     <div>
//       <h1>Stopwatch: {seconds}s</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }

// Memoization
// const ChildComponent = memo(({ count }) => {
//   console.log("Child Rendered");
//   return <h2>Count: {count}</h2>;
// });

// function Parent() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <ChildComponent count={count} />
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <input onChange={(e) => setText(e.target.value)} />
//     </div>
//   );

// }
// const ChildComponent = memo(({ increment }) => {
//   console.log("Child Rendered");
//   return <button onClick={increment}>Increment Count</button>;
// });

// function Parent() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <ChildComponent increment={increment} />
//     </div>
//   );
// }

// expensive memo demo

// function ExpensiveCalculation({ number }) {
//   const result = useMemo(() => {
//     console.log("Expensive Calculation Running...");
//     let sum = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       sum += number;
//     }
//     return sum;
//   }, [number]);

//   return <div>Result: {result}</div>;
// }

// function ExpensiveMemo() {
//   const [number, setNumber] = useState(1);
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <ExpensiveCalculation number={number} />
//       <button onClick={() => setNumber(number + 1)}>Increment Number</button>
//       <input onChange={(e) => setText(e.target.value)} placeholder="Type here" />
//     </div>
//   );
// }
// // both use memo and callback

// const ChildComponent = memo(({ filterNumbers, increment }) => {
//   console.log("Child Rendered");

//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//       <h3>Filtered Numbers: {filterNumbers.join(", ")}</h3>
//     </div>
//   );
// });

// function Parent() {
//   const [count, setCount] = useState(0);
//   const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   const [filter, setFilter] = useState(5);

//   const filterNumbers = useMemo(() => {
//     console.log("Filtering Numbers...");
//     return numbers.filter((n) => n > filter);
//   }, [numbers, filter]);

//   const increment = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <ChildComponent filterNumbers={filterNumbers} increment={increment} />
//       <button onClick={() => setFilter((prev) => prev - 1)}>Decrease Filter</button>
//     </div>
//   );
// }
export default App;


