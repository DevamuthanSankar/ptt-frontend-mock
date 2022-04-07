import React from "react";
import {User as UserType} from "../models/Users";
import {AiOutlineUser} from "@react-icons/all-files/ai/AiOutlineUser";
import {useNavigate} from "react-router-dom";
import {ViewUserState} from "../models/ViewUser";

interface UserProps {
    key: number;
    data: UserType;
}

export default function User(props: UserProps) {

    const navigate = useNavigate();

    const handleUserClick = () => {

        const state: ViewUserState ={
            id: props.data.id
        }

        navigate('/dashboard/user', {state})
    }

    return (
        <div className={'flex w-[450px] h-[90px] shadow-lg mb-[25px] rounded-[8px] hover:shadow-2xl cursor-pointer'}
                onClick={handleUserClick}>
            <div className={'h-full w-[27.5%]  flex items-center justify-center'}>
                <img src={props.data.avatar} alt={'Avatar'} className={'h-[65px] w-[65px] rounded-[50%]'} />
            </div>
            <div className={'h-full w-[45%] flex flex-col items-center justify-center'}>
                <div className={'w-full font-semibold text-[22.5px]'}>
                    {props.data.first_name + ' ' + props.data.last_name}
                </div>
                <div className={'w-full font-semibold text-[14px] text-[#a8a8a8]'}>
                    {props.data.email}
                </div>
            </div>
            <div className={'w-[27.5%] flex items-center justify-center'}>
                <AiOutlineUser className={'h-[30px] w-[30px] font-light'} />
            </div>
        </div>
    )
}
