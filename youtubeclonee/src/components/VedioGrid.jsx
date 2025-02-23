import {VideoCard} from "../components/VideoCard";

const VIDEOS =[{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},
{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},
{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},
{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},
{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},
{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},
{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},{
    image : "/photo.jpg",
    thumbnail:"/thumb.jpg",
    title : "Hass Hass (Official Video) | Diljit X Sia",
    author : "T-series",
    veiw : "2.3M views",
    timestamp : "1 month ago",
},]



export const VideoGrid =  ()=>{
     return(

        <div className="pt-20 ps-5 ms-60">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
             {VIDEOS.map(video => 
                <div >
                    <VideoCard
                    image = {video.image}
                    thumbnail = {video.thumbnail}
                    title = {video.title}
                    author = {video.author}
                    timestamp = {video.timestamp}
                    veiw = {video.veiw}
                    />
                </div>
             )}
        </div>

        </div>

     )
}