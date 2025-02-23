export function VideoCard(props : any){
    return(
        <div>
            <div>
            <img className="rounded-xl hover:cursor-pointer" src={props.image} alt="" />
            </div> 
            <div className="grid grid-cols-12 p-2">
                <div className="col-span-1 ">
                    <img className="rounded-full w-8 h-8" src={props.thumbnail} alt="" />
                </div>
                <div className="col-span-11 pl-2"> 
                    <div >
                     {props.title}
                    </div>
                    <div className="text-gray-400 text-base">
                    {props.author}
                    </div>
                    <div className="text-gray-400 text-base">
                    {props.veiw} | {props.timestamp}
                    </div>
                </div>
            </div>
        </div>
    )
}
  