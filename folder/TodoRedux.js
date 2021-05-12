import {useStore,useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
function Todo(){
	let arr=[];
	const dispatch=useDispatch()
	const store=useStore()
	const todo=useSelector(state=>state.todo)
	const [Todo,setTodo]=useState([])
	const AddTodo=(e)=>{
		e.preventDefault()
		const task=document.getElementById('task').value
		const status=document.getElementById('status').value
		let ob={task:task,status:status}
		let abc=Todo.concat(ob)
		console.log(abc)
		setTodo(abc)
		console.log(Todo)
		dispatch({type:'counter/addtodo',todo:abc})

	}
	console.log(todo)
	return(
		
		<div>
		{
			todo.map(function(val){
				return <div>{val.task} {val.status}</div>
			})
		}
		<div>
		<form onSubmit={AddTodo}>
		<input type="text" name="task" id="task" placeholder="Enter Task"/>
		<input type="text" name="status" id="status"placeholder="Status"/>
		<button>Submit</button>
		</form>
		</div>
		</div>)
	}
	export default Todo