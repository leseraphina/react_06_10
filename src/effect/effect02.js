import React,{useState,useEffect} from 'react'

function Effect02(){
  const [count,setCount] = useState(0);
//  effect 기본
useEffect(
  () => {
    console.log('effect 시작과 업데이트',count)
  }
)
  return(
    <div>
      <h1>effect 기본</h1>
      <p>count 변경보기 : {count}</p>
      <button onClick={click}>click</button>
    </div>
  )
  function click(){
    setCount(count+1)
  }
}

export default Effect02