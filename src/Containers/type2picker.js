import React,{Component, useState} from 'react';
import '../App.css';
import { CirclePicker} from "react-color";

class Tp extends Component{
    constructor(props){
        super(props);
        this.state={
            color:"#ccc",


        }

    }
    setColor(hexValue){
        return(
            this.setState({
                color: hexValue
            })
        );
    }

    render(){

        
        return (
            <div className="App textColor">
                <h2 > React Color Picker</h2>
                <div className="area" style={{backgroundColor:this.state.color}}>
                    
                </div>
                <CirclePicker
                    className="mt-5"
                    onChange={color  => this.setColor(color.hex)}
                />
                <p>Hex Code : {this.state.color}</p>

            </div>

        );
    }
}
export default Tp;