function UserGreeting(props){
  return <h1 className="user">{props.name}登入成功</h1>
}
function GuestGreeting() {
  return <h1 className="guest">Please sign up.</h1>;
}

// React 只提供大框架，裡面還是要自己寫JS
// Vue 有他自己的語法
// 透過 true false(選擇性切換) 來切換要 render 登入成功 還是 Please sign up.
// 三元運算子常用
// 不是用display none block 切換 css 
// 而是直接刪掉再重新render

function App(){
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const atClick = () => {
    setLoggedIn(!isLoggedIn);
  }
  return (
    <div className="app">
      <button onClick={atClick} >{isLoggedIn ? "登出" : "登入"} </button>
      {isLoggedIn ? <UserGreeting name="milkmidi" /> : <GuestGreeting /> }
      {isLoggedIn && <UserGreeting name="milkmidi" />}
    </div>
  )
  /*
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const atClick = () => {
    setLoggedIn(!isLoggedIn);
  }
  return (
    <div className="app">
      <button onClick={atClick}>{isLoggedIn ? '登出' : '登入'}</button>
      {isLoggedIn ? <UserGreeting name="milkmidi" /> : <GuestGreeting />}
      {isLoggedIn && <UserGreeting name="milkmidi" />}
    </div>
  )
  // */
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);