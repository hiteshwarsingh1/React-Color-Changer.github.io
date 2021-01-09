import React,{Component} from "react";
import  Tp from "./type2picker";
class Main extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
        <div style={{backgroundColor:"#62C1CD"}}>
            <Tp/>
        </div>
        );
    }
}
export default Main;