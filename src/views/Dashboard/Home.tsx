import React, {useEffect, useState} from 'react';
import {getUsers} from "../../api/users";
import Users, {User} from "../../models/Users";
import UserComponent from '../../components/User';

export default function Home() {

    const [users, setUsers] = useState([] as User[]);
    const [userCount, setUserCount] = useState(0);
    useEffect(() => {
        fetchUsers();
    }, []);


    const fetchUsers = () => {
        getUsers()
            .then((response) => {
                const data = response.data as Users;
                setUsers(data.data);
                setUserCount(data.data.length);
            })
            .catch((error) => {
                alert('Something wrong happened. Unable to fetch user data.');
            })

    }

    return (
        <div className={'w-full flex-auto p-[30px_70px]'}>
            <div className={'text-[35px] font-semibold'}>
                Users
            </div>
            <div className={'text-[15px] font-semibold'}>
                {`${userCount} users`}
            </div>
            <div className={'w-full mt-[30px] flex flex-wrap justify-between'}>
                {
                    users.map((user: User) => {
                        return (
                            <UserComponent key={user.id} data={user} />
                        );
                    })
                }
            </div>
        </div>
    );
}
