
const ProgressBar = (props) => {
    const red = '#f44336';
    const green = '#4caf50';
    const yellow = '#ffc107';

    const color = (props.value > 66 ? green : (props.value > 33 ? yellow : red));

    return (
        <div>
            <h6 className= "inline Condense font-bold tracking-wide" style={{width: '60px'}}>{props.title}:</h6>
            <div className="flex flex-row gap-4 items-center">
                <div className="w-full bg-gray-200 rounded-full h-4">
                    {/* color change by value input-->  <div className= {`RandomSize ${(props.value === 100 ? 'rounded-full' : 'Left_rounded')}`}  style={{width: props.value, backgroundColor: color}}></div>  */}
                    <div className= {`Accent_Bg h-4 ${(props.value === 100 ? 'rounded-full' : 'Left_rounded')}`}  style={{width: `${props.value}%`}}></div>
                </div>
                <div className="inline Condense font-bold tracking-wide" style={{minWidth: "40px"}}><h6 className="w-fit ml-auto">{props.value}%</h6></div>
            </div>
        </div>
    )
}

export default ProgressBar;