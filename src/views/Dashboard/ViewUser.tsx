import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {ViewUserState} from "../../models/ViewUser";
import {User} from "../../models/Users";
import {getUser} from "../../api/users";
import {BiArrowBack} from "@react-icons/all-files/bi/BiArrowBack";

export default function ViewUser() {
    const location = useLocation();
    const state = location.state as ViewUserState;
    const [user, setuser] = useState({} as User);
    const navigate = useNavigate();

    useEffect(() => {
        getUser(state.id)
            .then((response) => {
                const data = response.data.data as User;
                setuser(data);
            })
            .catch((error) => {
                alert('Unable to find user');
                navigate('/dashboard');
            })
    }, [state, navigate]);

    const handleBack = () => {
        navigate('/dashboard');
    }


    return (
        <div className={'w-full flex-auto p-[30px_70px] flex flex-col'}>
            <div className={'w-full h-[100px] flex'}>
                <div className={'h-auto w-[25%] text-[30px]'}>
                    <BiArrowBack className={'cursor-pointer'} onClick={handleBack} />
                </div>
                <div className={'h-auto w-[50%] flex justify-center text-[30px] font-semibold'}>
                    User Details
                </div>
                <div className={'h-auto w-25%'} />
            </div>
            <div className={'flex justify-center'}>
                <div className={'h-[500px] w-[400px] rounded-[10px] shadow-2xl flex flex-col'}>
                    <div className={'w-full h-[300px] flex items-center justify-center'}>
                        <img src={user.avatar} alt={'Avatar'} className={'w-[180px] h-[180px] rounded-[50%]'} />
                    </div>
                    <div className={'w-full h-[200px] flex flex-col'}>
                        <div className={'w-full h-[50px] flex items-center justify-between pl-[40px] pr-[40px]'}>
                            <div className={'text-[20px]'}>
                                First Name
                            </div>
                            <div className={'text-[20px] font-semibold'}>
                                {user.first_name}
                            </div>
                        </div>
                        <div className={'w-full h-[50px] flex items-center justify-between pl-[40px] pr-[40px]'}>
                            <div className={'text-[20px]'}>
                                Last Name
                            </div>
                            <div className={'text-[20px] font-semibold'}>
                                {user.last_name}
                            </div>
                        </div>
                        <div className={'w-full h-[50px] flex items-center justify-between pl-[40px] pr-[40px]'}>
                            <div className={'text-[20px]'}>
                                Email
                            </div>
                            <div className={'text-[20px] font-semibold'}>
                                {user.email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
