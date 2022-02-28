import palm from '../assets/images/media/palm/palm_grey.svg'

const Palm = (props) => {
    return (
            <img className= {`absolute w-4/5 -z-10 ${(props.position == 'left' ? 'LeftFlip -left-1/4 md:-left-1/6' : 'RightFlip -right-1/4 md:-right-1/6')}`} style={{maxWidth: '800px', top: props.top}} src={palm}></img>
    )
}
export default Palm;