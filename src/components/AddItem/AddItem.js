import React ,{Component} from "react";
import "./AddItem.css"

class Add extends Component{

    state ={
        name:'' ,
        age : ''
    }

    handlechange=(e) => {

        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit=(e) =>{

        e.preventDefault();
        if(e.target.name.value === ''){
            return false;
        }else{
            this.props.add(this.state)
            this.setState({
                name:'' ,
                age :''
            })
        }
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  placeholder="Enter Name..."  id="name"  onChange={this.handlechange} value={this.state.name} />
                    <input type="number"  placeholder="Enter age..."  id="age"  onChange={this.handlechange} value={this.state.age} />
                    <input type="Submit" value="Add"  />

                </form>
            </div>
        )
    }
}
export default Add;