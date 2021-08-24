// useEffect 知道component的建立與死亡
// 被建立就‘打api到後端，建立跟死亡都只會發生一次
// 
function Clock() {
  React.useEffect(() => {
    // 建立時發生，執行componentDidMount ex: setinterval
    console.log('componentDidMount')
    return () => {
      // 死亡時發生，執行componentWillUnmount ex: clearinterval
      console.log('componentWillUnmount');
    }
  }, []);

  return (
    <div className="my-component">
      <h2>react useEffect</h2>
    </div>
  )
}
