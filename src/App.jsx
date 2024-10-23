import './components/Todo/todo.css'
import TodoData from './components/Todo/todoData'
import TodoNew from './components/Todo/todoNew'
import logo from './assets/react.svg'
import { useState } from 'react'


const App = () => {

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Dang Cong Duc"
    },
    {
      id: 2,
      name: "Mai Phuong"
    }
  ])

  const name = "Dang Duc"
  const age = 21
  const data = {
    address: "Ha Tinh",
    Phone: "0334619874"
  }

  const addNewTodo = (todo) => {
    alert(`add todo ${todo} success!!`)
    const newTodo = {
      id: randomIntFromInterval(1, 99999),
      name: todo
    }

    // đẩy vào mảng
    setTodoList([...todoList, newTodo])
  }
  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">
        <p>Todo list</p>
      </div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />

      <div className='todo-logo'>
        <img className='logo' src={logo} alt="" />
      </div>
    </div>

  )
}

export default App
