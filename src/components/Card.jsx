import React from 'react'
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className="card flex-shrink-0 relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>

                <div className="card-footer absolute bottom-0  left-0 w-full">
                    <div className="flex items-center justify-between mb-5 py-3 px-8" >
                        <span>{data.fileSize}</span>


                        <span className='w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center'>
                            {data.close ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>}


                        </span>
                    </div>
                    {data.tag.isOpen && (<div className={`tag w-full py-4 bg-green-600 flex justify-center items-center`} >
                        <span className='text-sm'>{data.tag.tagTitle}</span>
                    </div>)  }
                </div>

            </motion.div>
        </>
    )
}

export default Card
