/**
  放兩個 Counter Component
  一個 count 為 0
  另一個 count 為 1
 */

// hooks 用法：useState
// 宣告私有變數0 回傳array 
// 第二個參數專們更改第一個參數
// setCount 被觸發時就會重新render，用React 提供得 useState 他才會知道要更新頁面
// onClick = addeventlisten(click)
// 


function Counter(props){
  const {
    // 加預設值防呆，怕使用者輸入沒有輸入值會變成undefined，造成結果是NAN
    initCount = 0
  } = props;
  const [count, setCount] = React.useState(initCount);
  const atClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <button className="my-btn" onClick={atClick}>+1</button>
    </div>
  );
  /*
  // [count, setCount] = array 解構賦值
  const [count, setCount] = React.useState(0);
  const atClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="count">{count}</div>
      <button className="my-btn" onClick={atClick}>+1</button>
    </div>
  );
  // */
}

ReactDOM.render(
  <div>
    <Counter initCount = {0}/>
    <Counter initCount = {1}/>
  </div>
  ,
  document.getElementById('app')
);