import axios from 'axios'
import {useEffect,useState} from 'react';
import {router} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import jwt_decode from "jwt-decode";
const Member=()=>{
	const [value,setvalue]=useState('default')
	let history=useHistory()
	 const decoded = jwt_decode(localStorage.getItem('token'));
	 console.log(decoded)
	useEffect(()=>{
		axios.get('/restrictedPage',{
			headers:{
				'token':localStorage.getItem('token')
			}
		})
		.then((res)=>{
			setvalue(decoded.user)
		})
		.catch((err)=>{
			console.log(err)
		})
	},[])
	const logout=()=>{
		localStorage.removeItem('token')
		history.push('/log')
		alert("you are logged out!")
	}
	return(
		 <div> 
		 <h1> Details </h1>
            <h3> User Id: {value.id}</h3>
            <h3> User Email: {value.email}</h3>
            <button onClick={logout}>Logout</button>
        </div>
		)
}
export default Member;