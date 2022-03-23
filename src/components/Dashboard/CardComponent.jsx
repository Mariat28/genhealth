function CardComponent(props) {
    return(
        <div className="rounded shadow bg-white h-36  flex justify-start mb-3 lg:mb-0  mr-4 md:mr-6 lg:mr-3">
        <div className="flex justify-center  items-center ml-6">
          <div className=" flex justify-center items-center  bg-blue-50 p-2 h-10 w-10 rounded-lg" >
            {props.icon}
          </div>
          <div className="flex flex-col justify-center ml-3" style={{color:props.color}}>
            <span className="font-semibold text-slate-700">{props.title}</span>
            <span className="text-4xl text-blue-900 font-semibold lg:text-3xl">{props.statistic}</span>
          </div>
        </div>
      </div>
    )
}
export default CardComponent;