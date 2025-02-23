
const arr = [{
    image:"/hut.png",
    title:"Home"
},
{
    image:"/shorts.png",
    title:"Shorts"
},
{
    image:"/sub.png",
    title:"Subscriptions"
},
{
    image:"/ch.png",
    title : "Your_channel"
},
{
    image:"/clock.png",
    title:"History"
},{
    image:"/play.png",
    title: "Playlist"
},{
    image:"/video.png",
    title: "Your_videos"
}
,{
    image:"/learning.png",
    title: "Your_courses"
},{
    image:"/history .png",
    title:"Watch_later"
},{
    image:"/like.png",
    title:"Liked_videos"
}]

export const Navbar = ()=>{
    return(
        <div className="fixed h-full bg-stone-950 top-10 pt-10 ps-4 pe-1  ">
            {arr.map(arr => 
                <div className="rounded-xl p-2 grid grid-cols-4  hover:bg-stone-800" >
                <div className="col-span-1">
                <img className="rounded-md  w-6 h-6" src={arr.image} alt="" />
                </div>
                <div className="col-span-2 ">
                <button className=" rounded-full text-lg">{arr.title}</button>
                </div>
                </div>  
            )}
        </div>
    )
}