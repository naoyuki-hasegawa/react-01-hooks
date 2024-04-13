import './App.css'
import codeContext from './main';
//import SomeChild from "./SomeChild";
import {useState, useEffect, useContext, useRef, useReducer, useMemo,} from "react";
//useCallback
import useLocalStorage from './useLocalStorage';

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const codeInfo = useContext(codeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  }

  useEffect(() => {
    console.log('Hello Hooks'); 
  }, [count]);

  const handleRef = () => {
    console.log(ref);
  }

  //useMemo ブラウザのメモリに保存
  //重い処理はどこで起きているかを確認する←ブラウザのキャッシュメモリを使用するときは考える
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = useMemo(() => {
    console.log("実行されました");
    let i = 0;
    while (i < 2) {
      i++;
    }
    return count02 * count02;
  },[count02]);
  // const [count01, setCount01] = useState(0);
  // const [count02, setCount02] = useState(0);

  // const square = () => {
  //   console.log("実行されました");
  //   let i = 0;
  //   while (i < 2) {
  //     i++;
  //   }
  //   return count * count;
  // };

  //useCallback 関数をメモ化する
  // const [counter, setCounter] = useState(0);

  // const showCount = useCallback(() => {
  //   alert(`これは重い処理です。`);
  // },[counter]);
  
//カスタムフック
const [age, setAge] = useLocalStorage("age", 20); //keyとvalueをセット

  return (
    <div>
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
      <hr />

      <h1>useContext</h1>
      <p>{codeInfo.name}</p>
      <p>{codeInfo.age}</p>
      <hr />

      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>useRef</button>
      <hr />

      <h1>useReducer</h1>
      <p>カウント:{state}</p>
      <button onClick={() => dispatch({type:"increment"})}>+</button>
      <button onClick={() => dispatch({type:"decrement"})}>-</button>
      <hr />

      <h1>useMemo</h1>
      <div>カウント1:{count01}</div>
      <div>カウント2::{count02}</div>
      <div>結果:{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>+</button>
      <button onClick={() => setCount02(count02 + 1)}>+</button>
      <hr />

      <h1>useCallBack</h1>
     {/* <SomeChild showCount={showCount} />
      <button onClick={() => setCounter(counter + 1)}>＋</button> */}
      <hr />

      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(38)}>年齢をセット</button>



    </div>

  )
  }

export default App;