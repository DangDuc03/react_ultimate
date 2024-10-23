
const TodoData = (props) => {
    const { todoList } = props
    return (<div className="todo-data">
        {todoList.map((items, index) => {
            return (
                <>
                    <div className={`todo-items`} key={items.id}>
                        <div>{items.name}</div>
                        <button className="btn-delete">Delete</button>
                    </div>
                </>
            )
        })}
    </div>
    )
}


export default TodoData;