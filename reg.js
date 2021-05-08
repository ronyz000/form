import React,{useRef} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
export default function RegistrationForm (){
    const {register, handleSubmit, watch, formState:{errors}} = useForm();
    const password = useRef({});
    password.current = watch('password',"");

    const registerform = (formOb) =>{
        console.log(formOb);
        axios.post('/register', formOb)
        .then((res)=>{
            console.log(res.data);
        })
    }
    return(
         <div>
            <h1>Fill the Form</h1>
            <form onSubmit={handleSubmit(registerform)}>
                <input 
                    type="text"
                    {...register("username",{
                        required:"Username required",
                    })}
                    placeholder="Enter Username" 
                /><br/>
                {errors.username && <p style={{color:"green"}}>{errors.username.message}</p>}
                <input 
                    type="email" 
                    {...register("email", {
                        required: "Email is Required!!",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                    })}
                    placeholder="Email" 
                /><br/>
                {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}

                 <input 
                    type="password"
                    name="password"
                    {...register("password",{
                        required: "Password is Required!!",
                       
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*[^a-zA-Z])(?!.*\s)/,
                            message: "Password contain One UpperCase."
                        }
                    })} 
                    placeholder="password" 
                /><br/>
                {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

                <input 
                    type="password"
                    name="confirmpassword"
                    {...register("confirmpassword",{
                        required: "Re-enter Password!!",
                        validate:value => value === password.current || "The password do not match"
                    })}
                    placeholder="Re-Enter password" 
                /><br/>
                {errors.confirmpassword && <p style={{color:"red"}}>{errors.confirmpassword.message}</p>}


                <button>Submit</button>
            </form>
        </div>
    )
}
