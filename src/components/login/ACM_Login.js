
import React from "react";
import './ACM_Login.scss';
import { useState } from "react";
import { auth } from "../professional-events/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
 
const ACM_Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const history = useHistory();

    const handleRegister = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>  {
            //sighned in
            console.log('Loging Successfully');
            history.push("./ACM_admin");
        })
        .catch((error) => {
            alert("Wrong credentials")
            const errorCode = error.code;
            const errorMessage = error.message;
        }) ;

    };
    

    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     try {
    //     await firebase.auth().signInWithEmailAndPassword(email, password);
    //     console.log('Login Succesfully');
    //     history.push("./admin");
    //             } 
    //     catch (error) {
    //     console.error('Login failed: ', error);
    //     }

    // }


    return(
        <div>
            <div className="header">
                <h1>LOGIN</h1>
                <form onSubmit={handleRegister} className="loginContainer">

                    <label htmlFor="email" className="formText" style={{color: "white"}}>Email</label>
                    <input type="email" className="textBox" onChange={(e)=>(setEmail(e.target.value))} value={email}/>

                  
                    <label htmlFor="password" className="formText">Password</label>
                    <input type="password" className="textBox" onChange={(e)=>(setPassword(e.target.value))} value={password}/>
                    <button className="btn btn-primary my-2" type="submit">Login</button>
                </form>

            </div>
        </div>

    );

}


export default ACM_Login;