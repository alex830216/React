// Array map
// 點擊後新增資料進去
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);

// 原生JS return JSX 元素出來
// 用迴圈產生的vitual dom 要幫他寫一個key值
// className 加 data 屬性就可以在瀏覽器看到
// 不然一班寫的JSX在瀏覽器看不到
// 傳值跟傳址(傳記憶體位址)
// === 型別跟記憶體位置都一樣才會是true
// react 不會 render 型別跟記憶體位置都一樣的變數
// concat 會讓原本的 array 的值一樣但產生新的記憶體位置
// 這樣才能 render 出來 
// 當初 react 設計理念就是這樣，背後是用 === 去做判斷
// 不希望你去動到裡面的東西

function List(){
  const [list, setList] = React.useState(["學會 JS", "學會React", "年薪百萬"])
  const atAddClick = () => {
    const newList = list.concat(new Date().toString())
    setList(newList)
  }
  return (
    <div>
      <button onClick={atAddClick} >Add</button>
      <ol className="list">
        {
          list.map(function (text) {
            return <li key={text} >{text}</li>
          })
        }
      </ol>
    </div>
  )
  /* // TODO
  const [list, setList] = React.useState(['學會 JS', '學會 React', '年薪百萬']);
  const atAddClick = () => {
    var newList = list.concat(new Date().toString());
    setList(newList);
  }
  return (
    <div>
      <button onClick={atAddClick}>Add</button>
      <ol className="list">
      {
        list.map(function (text) {
          return <li key={text}>{text}</li>;
        })
      }
      </ol>
    </div>
  )
  // */
}

ReactDOM.render(
  <List />,
  document.getElementById('app')
);