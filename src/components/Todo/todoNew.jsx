
const TodoNew = (props) => {
    console.log(">>>> check props add todo : ", props)
    const { addNewTodo } = props
    // addNewTodo("quet nha")
    const handleAddTodo = () => {
        addNewTodo("Clean House")
    }

    const handleInput = (data) => {
        console.log(" >>> check input : ", data)
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
        </div>
    )
}

export default TodoNew;