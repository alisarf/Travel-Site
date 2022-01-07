import ReactPlayer from "react-player";

//INPUT PROPS: Video, msg and an optional speed

const VideoBanner = (props) => {
    
    return (
        <div className='relative'>
            <ReactPlayer className='w-full'
            url= {props.video}
            playing
            muted
            width="100%"
            height="100%"
            loop="true"
            playbackRate = {(props.speed ? props.speed : 1.5)}
            config={{ file: { attributes: {
                autoPlay: true,
                muted: true
            }}}}
            />
            <div className='w-full h-full absolute flex align-middle top-0'>
            <h3 className='Font_brushy text-9xl m-auto text-white z-10'>{(props.msg ? props.msg : 'Explore!')}</h3>
            </div>
        </div>
    )
}

export default VideoBanner;