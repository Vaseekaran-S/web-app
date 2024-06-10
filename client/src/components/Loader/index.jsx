
import React from 'react'

export default function Loader({ color }) {
    return (
        <div className="fixed h-[100vh] w-[100vw] top-0 left-0 flex justify-center items-center z-50 backdrop-blur-xs bg-black/20">
            <div
                className={`inline-block h-12 w-12 animate-spin rounded-full border-4 border-${color} border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
                role="status">
            </div>
        </div>
    )
}
