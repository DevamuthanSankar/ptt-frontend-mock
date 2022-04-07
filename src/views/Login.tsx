import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import AuthData from '../models/AuthData';
import {loginUser} from "../api/authUser";
import {AxiosError, AxiosResponse} from "axios";
import {setToken} from "../store/authStore";
import {useAppDispatch} from "../store/storeHooks";
function Login () {
    const navigate = useNavigate();
    // States of the Component
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // State management
    const dispatch = useAppDispatch();

    // Function to set the email changes made to the email state
    const handleEmailChange = () => {
        setEmail((document.getElementById('email') as HTMLInputElement).value);
    }

    // Function to set the password changes made to the password state
    const handlePasswordChange = () => {
        setPassword((document.getElementById('password') as HTMLInputElement).value);
    }

    // Function to handle when login button is clicked
    const handleLogin = () => {
        let valid: boolean = true;

        if (valid && email === '') {
            valid = false;
        }

        if (valid && password === '') {
            valid = false;
        }

        if(valid) {
            const data: AuthData = {
                email: email,
                password: password
            }
            loginUser(data)
                .then((response: AxiosResponse) => {
                    dispatch(setToken(response.data.token));
                    navigate('/dashboard');
                })
                .catch((error: AxiosError) => {
                    // console.log(error)
                    alert('Email or password incorrect!')
                });
        } else {
            alert('Email id or password is empty!');
        }
    }

    return (
        <div className={'h-full w-full flex items-center justify-center bg-[#d6d6d6]'}>
            <div className={'h-[450px] w-[500px] shadow-2xl rounded-[10px] bg-white pl-[30px] pr-[30px]'}>
                <div
                    className={'text-[33px] font-semibold w-full h-[25%] flex flex-col justify-center'}>
                    <div> Log in</div>
                    <div className={'h-[1px] w-full bg-[#d6d6d6] mt-[10px]'}/>
                </div>

                <div className={'w-full h-[75%] flex flex-col item-center justify-evenly'}>
                    <div className={'w-full h-[80px] flex flex-col'}>
                        <label className={'text-[17px] font-semibold'}>
                            Email
                        </label>
                        <input type={'text'} placeholder={'Example@email.com'} autoComplete={'off'}
                               className={'focus:border-blue-500 outline-none text-[17px]  w-full h-[48px] border-[2px] border-[#d6d6d6] rounded-[6px] mt-[5px] pl-[20px]'}
                               id={'email'} onChange={() => handleEmailChange()} value={email}/>
                    </div>

                    <div className={'w-full h-[80px] flex flex-col'}>
                        <label className={'text-[17px] font-semibold'}>
                            Password
                        </label>
                        <input type={'password'} placeholder={'Password'}
                               className={'focus:border-blue-500 outline-none text-[17px]  w-full h-[48px] border-[2px] border-[#d6d6d6] rounded-[6px] mt-[5px] pl-[20px]'}
                               id={'password'} onChange={() => handlePasswordChange()} value={password}/>
                    </div>

                    <div className={'w-full h-[100px] flex flex-col items-center justify-center'}>
                        <button className={'w-[150px] h-[48px] rounded-[6px] text-white text-[20px] hover:text-blue-600 font-semibold hover:bg-white hover:border-[2px] hover:border-blue-500 bg-blue-500'} onClick={() => handleLogin()}>
                            Log in
                        </button>
                        <div className={'text-blue-600 mt-[5px]'}>
                            <Link to={'/signup'}>Don't have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
