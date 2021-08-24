// 用某個變數控制class名稱
// style={{ 第一個{}是 JSX 第二個{}是物件
// <div className={boxClassName} /> 因為沒有要在div裡面塞東西所以直接截斷，看起來比較簡短



function App(){
  const [isGreen, setGreen] = React.useState(false);
  const atClick = () => {
    setGreen(!isGreen);
  }
  var boxClassName = "box"
  if (isGreen) {
    boxClassName += "style-green"
  }
  return (
    <div className="app">
      <button className="my-btn" onClick={atClick} >isGreen</button>
      
      <div className={boxClassName} />
      <div style={{
        width: 200,
        height: 200,
        backgroundColor: isGreen ? "green" : "red",
        display: isGreen ? "block" : "none"
      }} />
    </div>
  )
  /*
  const atClick = () => {
    setGreen(!isGreen);
  }
  var boxClassName = 'box';
  if (isGreen) {
    boxClassName += ' style-green';
  }
  return (
    <div className="app">
      <button className="my-btn" onClick={atClick}>isGreen</button>
      <div className={boxClassName} />
      <div style={{
        width: 200,
        height: 200,
        backgroundColor: isGreen ? 'green' : 'red',
        display: isGreen ? 'block': 'none'
      }} />
    </div>
  )
  // */
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);