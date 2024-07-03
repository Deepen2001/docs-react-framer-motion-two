import React from 'react'

const Background = () => {
    return (
        <>
            <div className="fixed z-[2] w-full h-screen bg-zinc-800">
                <div
                    className="w-full py-10 flex justify-center text-zinc-600 text-[20px] font-semibold "
                >
                    Documents.
                </div>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] leading-none tracking-tighter font-semibold'>Docs.</h1>

            </div>

        </>
    )
}

export default Background
