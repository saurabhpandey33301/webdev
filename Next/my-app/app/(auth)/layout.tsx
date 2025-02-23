import React from "react";

export default function({children}:{children: React.ReactNode}) {
    return(
        <>
        <div className=" fixed z-30 w-full mt-16 text-center text-black bg-yellow-300">
             flat 20% off for 10 days
        </div>
         {children}        
        </>

    )
}