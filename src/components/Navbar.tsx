import {useNavigate} from "react-router-dom";
import {setToken} from "../store/authStore";
import {useAppDispatch} from "../store/storeHooks";

export default function Navbar () {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(setToken(''));
        navigate('/');
    }

    return (
        <div className={'w-full h-[90px] border-b-[1px] flex flex-none items-center justify-between pl-[70px] pr-[70px]'}>
            <div className={'text-[35px] '}>
                Welcome back
            </div>
            <div className={'h-full w-[140px] flex items-center justify-center'}>
                <button className={'h-[45px] w-full bg-red-500 rounded-[8px] hover:border-[3px] hover:border-red-500 hover:bg-white hover:text-red-500 text-[18px] text-white font-semibold'}
                    onClick={handleLogout}>
                    Log out
                </button>
            </div>
        </div>
    )
}
