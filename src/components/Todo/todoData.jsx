
const TodoData = (props) => {
    const { name, age, data, todoList } = props
    return (<div className="todo-data">
        <p> name : {name}</p>
        <p> age : {age}</p>
        <div>
            <p>{JSON.stringify(todoList)}</p>
        </div>
    </div>
    )
}


export default TodoData;