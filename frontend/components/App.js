import React from 'react'
import ReactDom from 'react-dom';
import TodoList from './TodoList'
import Form from './Form'

const listOfTodos =  [
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
      listOfTodos: listOfTodos,
      itemText: ''
    }
  }

  addItem = (e, item) =>{
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      listOfTodos: [...this.state.listOfTodos, newItem]
    })
  }

  clearCompleted = e =>{
    this.setState({
      listOfTodos: this.state.listOfTodos.filter(item => !item.completed)
    })
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.addItem(e, this.state.itemText)
    this.setState({
      itemText: ''
    })
  }


  toggleItem=(itemId)=>{
    this.setState({
      listOfTodos: this.state.listOfTodos.map(item =>{
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

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      itemText: e.target.value
    })
  };

  render() {
    return (
      <div>
      
      <TodoList
        listOfTodos= {this.state.listOfTodos}
        toggleItem= {this.toggleItem}/>
      <Form 
        addItem={this.addItem}
        clearCompleted={this.clearCompleted}
        handleSubmit = {this.handleSubmit}
        handleChanges = {this.handleChanges}
      />
      </div>
    )
  }
}
