// TODO: 1 start

// component化
// 可以讓我們重複使用，不用寫一堆重複的東西，餵data給他就好(data binding)


/*
// 早期寫法
class MyComponent extends React.Component {
  render() {
    return (
      <div className="my-component">
        這是ReactComponent組件
      </div>
    );
  }
}
// */
// TODO: 1 end

// TODO: 2 start

// 現代寫法
// Reactcomponent 就是 JS 的 function 
// component 名稱一定要用大寫開頭，才能透過 JSX 去編譯
// 也可以跟html標籤區分
// return JSX 元素
// class 要寫成 className
// JSX 內用{}包起來的是 JS 的運算
// 沒包的就是 JSX
// return 的()是防止JS幫你加; 導致 undefined
function FunctionalComponent() {
  return (
    <div className="functional-component">
      <br/>
      {
        new Date().toDateString()
      }
    </div>
  )
}

/*
function FunctionalComponent(){
  return (
    <div className="functional-component">
      這是functionalComponent組件
      <br/>
      今天日期：
      {
        new Date().toDateString()
      }
    </div>
  )
}
// */
// TODO: 2 end

// TODO:3 start

// 所有的元素(component)都要有結束標示 "/""

ReactDOM.render(
  <div>
    <MyComponent />
    <FunctionalComponent />
  </div>
  ,
  document.getElementById("app")
)
/*
ReactDOM.render(
  <div>
    <MyComponent />
    <FunctionalComponent />
  </div>
  ,
  document.getElementById('app')
);
// */
// TODO:3 end