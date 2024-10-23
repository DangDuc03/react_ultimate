import { useState } from "react"

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("Duc")

    const { addNewTodo } = props
    const handleAddTodo = () => {
        addNewTodo(valueInput)
        console.log(">>> check value input : ", valueInput)
        setValueInput("")
    }

    const handleInput = (data) => {
        setValueInput(data)

    }
    return (
        <div className="todo-new">
            <input
                className="input-todo"
                type="text"
                onChange={(event) => handleInput(event.target.value)}
                value={valueInput}
            />
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