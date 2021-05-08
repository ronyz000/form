import axios from 'axios'
import { writeStorage } from '@rehooks/local-storage';
import {router, useHistory} from 'react-router-dom';
const Login=()=>{
	let history=useHistory()
	const doLogin=(e)=>{
		e.preventDefault()
		let userDetails={
			email:e.target.email.value,
			password:e.target.password.value
		}
		axios.post('/login',userDetails)
		.then((res)=>{
			localStorage.setItem('token',res.data.token); 
			console.log(res.data)
			 
		})
	}
	return(
		<div>
		<form onSubmit={doLogin}>
		<input type="email" placeholder="email" name="email"/>
		<input type="password" placeholder="password" name="password"/>
		<button>Login</button>
		</form>
		</div>
		)
}
export default Login