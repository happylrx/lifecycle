import React from 'react';
class Test extends React.Component{
  componentWillMount(){
    console.log('我要被销毁了');
  }
  render(){
    return(
      <div>
        我是test组件:{this.props.childNum}
      </div>
    )
  }
}
export default Test
