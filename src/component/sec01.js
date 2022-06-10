import React from 'react'

export default class Sec01 extends React.Component{
state = {
  count : 0
}
render(){
  return (
    <div>
      <h1></h1>
      <p>count : {this.state.count} : 
        <button
        onClick={this.click}>
        click
        </button>
      </p>
    </div>
  )
}
click = () =>{
  this.setState(
    {count : this.state.count + 1}
  )
}
}



