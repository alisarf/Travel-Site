
const ProgressBar = (props) => {
    return (
        <div className="flex flex-row gap-4 justify-evenly">
            <h6 style={{width: '60px'}}>{props.title}:</h6>
            <div className="w-2/4 bg-white rounded-full">
                <div className= "Bg_dk_teal RandomSize rounded-full" style={{width: props.value}}></div>
            </div>
        </div>
    )
}

export default ProgressBar;