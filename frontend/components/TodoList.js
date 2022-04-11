import React from 'react'

import Todo from "./Todo";

const TodoList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div>
      {props.listOfTasks.map(item => (
        <Todo 
        toggleItem = {props.toggleItem}
        key ={item.id}
        item={item} />
      ))}
    </div>
  );
};

export default TodoList;