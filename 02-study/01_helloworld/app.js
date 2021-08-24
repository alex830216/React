// TODO: 1 start

// 告訴 HTML 我要render h1這個JSX動態元素
// ReactDOM裡面有render方法，第一個參數是 JSX，記得加逗號！，第二個參數是我要長在哪裡
// 只能有一個根節點，出錯：Adjacent JSX elements must be wrapped in an enclosing tag
// 用 div 把他包起來就只有一個根節點
ReactDOM.render(
  <div>
    <h1>123</h1>
    <h2>123</h2>
  </div>,
  document.getElementById('app')
);



/*
ReactDOM.render(
  <h1>Hello, world!!</h1>,
  document.getElementById('app')
);
// */
// TODO: 1 end