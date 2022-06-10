import React,{useState,useEffect} from 'react'

function Effect03(props){
  const [count,setCount] = useState(0);
//  effect1 기본
// useEffect(() =>{console.log('effec01',count)})
useEffect(() =>{console.log('effec01',count)},[])
useEffect(() => {console.log('effec02',count)},[count])
// effec2
  return(
    <div>
      <h1>effect 기본 {props.title}</h1>
      <p>count 변경보기 : {count}</p>
      <button onClick={click}>click</button>
    </div>
  )
  function click(){
    setCount(count+1)
  }
}

export default Effect03