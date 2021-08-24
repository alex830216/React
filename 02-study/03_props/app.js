// 初學者用 component 接收參數的唯一方法就是要透過props取得，不要打破這個原則
// 進階版先不用學
// props 是 object
// 第一行用解構附職方式取出key(img,name,children)
// children 是特有的key，內建的關鍵字
// 所有要透過 JS 運算的東西都是用{}包起來 ex:{img} {name} {children}
// name: 只是字串

function FunctionalCard(props){

  const {
    img, name, children
  } = props;
  return (
    <div className="card">
      <img className="img" src={img}/>
      <div className="name">name:{name}</div>
      <div className="quote">quote:{children}</div>
    </div>
  );
  /* // TODO1
  const {
    img, name, children
  } = props;
  return (
    <div className="card">
      <img className="img" src={img} />
      <div className="name">name:{name}</div>
      <div className="quote">quote:{children}</div>
    </div>
  );
  // */
}

// 客製化的 component
// 把 參數(img="http://fakeimg.pl/300x100/ecf0f1/" name="milkmidi")丟到 component 裡
// 把這邊的 <h1> 標籤丟進去 會跑到 children ，用它來接收
// props 傳的參數一慮都是字串，要傳其他型態的值的話要用{}包起來
// 用內建的關鍵字塞值還是會用h1

ReactDOM.render(
  // TODO2
  <div className="app">
    <FunctionalCard
      img="http://fakeimg.pl/300x100/ecf0f1/"
      count={1}
      bool={true}
      name="milkmidi" />
    <FunctionalCard
      img="http://fakeimg.pl/240x80/ecf0f1/"
      name="奶綠茶">
      <h1>我是子元素</h1>
    </FunctionalCard>
  </div>
  //
  ,
  document.getElementById('app')
);