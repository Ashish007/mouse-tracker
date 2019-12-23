import React from 'react';
import mouse from '../assets/mouse.jpg';
import biryani from '../assets/biryani.png';
export default class MouseTracker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:0,
            y:0
        }
    }
    moveMouseHandler(e){
        this.setState({
            x:e.clientX,
            y:e.clientY,
        })
    }
    render(){
        return <>
                <img height="100" width="200" src={mouse} onMouseMove={(e)=>this.moveMouseHandler(e)}/>
                <img height="100" width="100" src={biryani} />
                <p>The coordinates are {this.state.x} and {this.state.y}</p>
               </>
    }
}