
export const SearchBar = ()=>{
    return(
        <div className="w-2/4">
        <form>
            <div className="w-96 flex text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
                <input  id="default-search" className="w-full bg-stone-950 text-white border-none outline-none" placeholder="Search" required />
                <button className="bg-stone-950 hover:bg-stone-800 text-gray-400 font-bold p-2   rounded-xl inline-flex items-center ">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </button>
            </div>
        </form>
    </div>
    )
 
}


//(
    // <form className="max-w-md mx-auto ">   
    //     <label className="mb-2 
    //     text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    //     <div className="relative">
    //         <div className="absolute inset-y-0 start-0 flex 
    //         items-center ps-1 pointer-events-none">
    //             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
    //                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    //                 <path stroke="currentColor" stroke-linecap="round"
    //                     stroke-linejoin="round" stroke-width="2" 
    //                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    //             </svg>
    //         </div>
    //         <input type="search" id="default-search" 
    //         className="block w-full p-4 ps-10 pe-20 text-sm text-white
    //             border border-neutral-300 rounded-full bg-stone-600" 
    //             placeholder="Search" required />
    
    //         <button type="submit" className="text-white absolute end-2.5 
    //         bottom-2.5 bg-stone-800 hover:bg-black-800 focus:ring-4 
    //         focus:outline-none focus:ring-black-300 font-medium rounded-lg 
    //         text-sm px-4 py-2  dark:hover:bg-black-700
    //         dark:focus:ring-black-800 ">
    //             <svg className="w-8 h-4 text-gray-500 dark:text-gray-400"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    //             <path stroke="currentColor" stroke-linecap="round"
    //             stroke-linejoin="round" stroke-width="2" 
    //             d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    //         </svg>
    //         </button>
    //     </div>

    //     </form>
    // )