import React,{Component} from "react";
import Todo from "./components/TodoItems/TodoItems";
import Add from "./components/AddItem/AddItem";


class App extends Component {

  state={
    items :[
      {id : 1 , name :"Tasneem" , age :22},
      {id : 2 , name :"Tamim" , age :23},
      {id : 3 , name :"Tasneem" , age :24}

    ]
  }
  deleteItem =(id) =>{
    let items = this.state.items .filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  add = (item) => {
    item.id= Math.random();
    let items = this.state.items ;
    items.push(item) ;
    this.setState({items})


  }

  render(){
  return (
    <div className="App">
        <div className="App container" >
        <h1 className="text-center">Todo ListApp</h1>
        <Todo items={this.state.items} deleteItem={this.deleteItem}/>
        <Add add={(this.add)}/>
        </div>

    </div>
  );
}
}

export default App;
