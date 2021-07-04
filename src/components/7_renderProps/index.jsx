import React, {Component} from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                {<!--声明render函数，不调用-->}
                <A render={(name) => <C name={name}/>}/>
            </div>
        )
    }
}

// render 是个函数，返回一个标签体，函数接收name的参数
class A extends Component {
    state = {name: 'tom'}

    render() {
        console.log(this.props);
        const {name} = this.state
        return (
            <div className="a">
                <h3>我是A组件</h3>
                {<!--这里调用render函数，返回一个标签，此处渲染标签体-->}
                {this.props.render(name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        console.log('B--render');
        return (
            <div className="b">
                <h3>我是B组件,{this.props.name}</h3>
            </div>
        )
    }
}
