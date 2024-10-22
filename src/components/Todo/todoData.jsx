
const TodoData = (props) => {
    const { name, age, data } = props
    console.log(">>>check props :", props)
    return (<div className="todo-data">
        <p> name : {name}</p>
        <p> age : {age}</p>
        {/* <p> data : {props.data}</p> */}
    </div>
    )
}


export default TodoData;