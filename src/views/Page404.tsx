import React from 'react';

export default function Page404() {
    return (
        <div className={'h-full w-full flex items-center justify-center'}>
            <div className={'h-[300px] w-[500px] border-[3px] border-gray-400 rounded-[10px] flex flex-col items-center justify-center'}>
                <div className={'text-[80px] font-semibold text-gray-400'}>
                    404
                </div>
                <div className={'text-[20px] text-gray-400'}>
                    The page you are looking for is not available.
                </div>
            </div>
        </div>
    )
}
