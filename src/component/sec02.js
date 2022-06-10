import React, {useState} from 'react'
function Sec02(){
// state
// const [count,setCount] = React.useState()
const [count,setCount] = useState(0)
return (
<div>
  <h1>함수방식으로 매서드 가져오기</h1>
  <p>count : {count} : 
    <button onClick={click}>click</button>
  </p>
</div>
)
function click(){
 setCount(count + 2)
}
}


export default Sec02