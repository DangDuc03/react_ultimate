import { useState } from "react"

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("Duc")

    const { addNewTodo } = props
    const handleAddTodo = () => {
        console.log(">>> check value input : ", valueInput)
    }

    const handleInput = (data) => {
        setValueInput(data)

    }
    return (
        <div className="todo-new">
            <input
                className="input-todo"
                type="text"
                onChange={(event) => handleInput(event.target.value)} />
            <button
                className="btn-add"
                style={{ cursor: "pointer" }}
                onClick={handleAddTodo}
            >ADD</button>
            <div>
                Data your input = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;