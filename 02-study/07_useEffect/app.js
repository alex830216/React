// 用 show 控制 <Clock /> 的出現及消失
// 用以觸發useEffect
function App(){
  const [show, setShow] = React.useState(false);
  const atClick = () => {
    setShow(!show);
  }

  return (
    <div className="app">
      <button onClick={atClick}>switch Clock</button>
      {show && <Clock />}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);