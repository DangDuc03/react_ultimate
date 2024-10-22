
const TodoNew = (props) => {
    console.log(">>>> check props add todo : ", props)
    const { addNewTodo } = props
    // addNewTodo("quet nha")
    return (
        <div className="todo-new">
            <input className="input-todo" type="text" />
            <button className="btn-add" onClick={addNewTodo}>ADD</button>
        </div>
    )
}

export default TodoNew;