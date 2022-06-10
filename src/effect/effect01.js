import React from 'react'

export default class Effec01 extends React.Component{
// state
state = { count : 0}
// render
render(){
  const {count} = this.state;
  return (
    <div>
      <h1>시점보기</h1>
      <p>count 변경보기 : {count}</p>
      <button onClick={this.click}>click</button>
    </div>
  )
}
// 이벤트 함수
click = () =>{
  this.setState({count : this.state.count + 1})
}
// mount
componentDidMount(){
  console.log('mount시점',this.state.count)
}
// upDate
componentDidUpdate(){
  console.log('updata시점',this.state.count)
}
}