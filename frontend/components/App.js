import React from 'react'
import ReactDOM from 'react'
import TodoList from './TodoList'
import Form from './Form'

const listOfTasks = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]



export default class App extends React.Component {
  constructor(){
    super()

    this.state ={
      listOfTasks: listOfTasks
    }
  }

  addItem = (e, item) =>{
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      listOfTasks: [...this.state.listOfTasks, newItem]
    })
  }

  clearTasks = e =>{
    this.setState({
      groceries: this.state.listOfTasks.filter(item => !item.completed)
    })
  }

  toggleTasks= (itemId) => {
    this.setState({
      groceries: this.state.listOfTasks.map(item =>{
        if(itemId === item.id){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h2>Todo App</h2>
        <Form addItem={this.addItem}/>
         </div>
        <TodoList
          listOfTasks={this.state.listOfTasks}
          toggleItem={this.toggleTasks}
          />
        <button
         onClick={this.clearTasks} 
         className="clear-btn">Clear Completed
         
         </button>
       </div>
    );
  }
}
