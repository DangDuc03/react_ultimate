
const TodoData = (props) => {
    const { todoList } = props
    return (<div className="todo-data">
        {todoList.map((items, index) => {
            return (
                <>
                    <div className="todo-items">
                        <div>{items.name}</div>
                        <button className="btn-delete">Delete</button>
                    </div>
                </>
            )
        })}
        <p>{JSON.stringify(todoList)}</p>
    </div>
    )
}


export default TodoData;