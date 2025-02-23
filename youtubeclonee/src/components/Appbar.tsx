// import { SearchBar } from "../components/SearchBar";

// export const AppBar = ()=>{
//     return(
//         <div className="flex-nowrap fixed top-0 z-10 flex w-full items-center justify-between bg-black ">
//         <div className="flex justify-between pt-1 p-3">
//            <div className="text-md inline-flex items-center pb-2">
//                 <div><img className="rounded-md w-8 h-5 pe-2" src="bar.png" alt="" /></div>
//                 <div className="ps-7"><img className="rounded-md h-10   " src="/yu.png" alt="" /></div>
//            </div>
//            <div>
//                 <SearchBar></SearchBar>
//            </div>
//            <div >
//                <button  className="rounded-full border-2 border-white p-1 ps-2 pe-2 hover:bg-stone-800 ">SignIn</button>
//             </div>
//         </div>
//         </div>
//     )
// }


// import { SearchBar } from "../components/SearchBar";

// export const AppBar = () => {
//     return (
//         <div className="fixed top-0 z-10 flex w-full items-center justify-between bg-black px-4 py-2">
//             <div className="flex items-center space-x-4">
//                 <img className="rounded-md w-8 h-5" src="bar.png" alt="Bar Icon" />
//                 <img className="rounded-md h-10" src="/yu.png" alt="Yu Icon" />
//             </div>
//             <div className="flex-grow flex justify-center  ps-40">
//                 <SearchBar />
//             </div>
//             <div>
//                 <button className="rounded-full border-2 border-white px-4 py-1 hover:bg-stone-800">
//                     Sign In
//                 </button>
//             </div>
//         </div>
//     );
// };

import { SearchBar } from "../components/SearchBar";

export const AppBar = () => {
    return (
        <div className="fixed top-0 z-10 w-full flex flex-wrap items-center bg-stone-950 px-4 py-2">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                <img className="rounded-md w-8 h-5" src="bar.png" alt="Bar Icon" />
                <img className="rounded-md h-10" src="/yu.png" alt="Yu Icon" />
            </div>

            {/* Center Section */}
            <div className=" flex-grow flex justify-center mx-4 min-w-0">
                <div className="w-full max-w-md">
                    <SearchBar />
                </div>
            </div>

            {/* Right Section */}
            <div className="mt-0">
                <button className="rounded-full border-2 border-white px-4 py-1 hover:bg-stone-800">
                    Sign In
                </button>
            </div>
        </div>
    );
};
