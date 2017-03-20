import React from 'react';
import Test from './Test.js'
class App extends React.Component{
  constructor(){//属性
    super();
    this.state={num:0,show:true}
    console.log('initial state');
  }
  componentWillMount(){//组件将会被装载
    console.log('will mount');
  }
  componentDidMount(){//组件装载完毕
    console.log('Did mount');
  }
  componentWillReceiveProps(){//组件将要更新，属性被修改之前
    console.log('will receive props');
  }
  shouldComponentUpdate(nextProps,nextState){//判断是否需要更新
    if(nextState.num<5){
      return true
    }
      return false
  }
  componentWillupdate(){//更新之前
    console.log('will update');
  }
  componentDidUpdate(){//组件更新完毕
    console.log('did update');
  }
  render(){
    console.log('mount');
    return(
      <div>
        数值：{this.state.num}
        <button onClick={()=>this.setState({num:this.state.num+1})}>click</button>
        <button onClick={()=>this.setState({show:false})}>销毁Test</button>
        <button onClick={()=>this.setState({show:true})}>恢复Test</button>
        {/* <Test childNum={this.state.num}/> */}
        {this.state.show?<Test childNum={this.state.num}/>:null}
      </div>
    )
  }
}
export default App
//1，初始化，首次渲染
// constryctor
// componentWillMount
// render
// componentDidMount
//2,更新阶段（state.props发生变化时触发)
// componentWillReceiveProps
// shouldComponentUpdate
// componentWillupdate
// render
// componentDidUpdate
