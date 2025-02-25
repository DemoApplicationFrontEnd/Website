import React from 'react';
import './login.css';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const navigate = useNavigate();
    const handlechange = () => {
        navigate("/register")
    }

    return (
        <div className='loginwrapper'>
            <div className='loginContainer' >
                <div className='loginpic'>
                    <Person2TwoToneIcon />
                </div>
                <h2 className='logintitle'>Login</h2>
                <form className='loginform1'>
                    <label for="username">Username</label>
                    <input type="text" className='logininput' autoComplete='off' placeholder='username'></input>
                    <label for="username">Password</label>
                    <input type="password" className='logininput' autoComplete='off' placeholder='password'></input>
                    <button className='logininput' type='button' style={{ background: "green", padding: "10px 6px", marginTop: "15px", color: "white" }}>Login</button>
                    <p className='loginparagraph'>don't have account? <span onClick={handlechange} className='loginancher'>Click to Register</span></p>
                </form>
            </div>

        </div>
    )
}
