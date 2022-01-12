
const ProgressBar = (props) => {
    const red = '#f44336';
    const green = '#4caf50';
    const yellow = '#ffc107';

    const color = (props.value > 66 ? green : (props.value > 33 ? yellow : red));

    return (
        <div className="flex flex-row gap-4 justify-evenly">
            <h6 style={{width: '60px'}}>{props.title}:</h6>
            <div className="w-2/4 bg-white rounded-full">
                <div className= {`RandomSize ${(props.value == 100 ? 'rounded-full' : 'Left_rounded')}`}  style={{width: props.value, backgroundColor: color}}></div>
            </div>
        </div>
    )
}

export default ProgressBar;