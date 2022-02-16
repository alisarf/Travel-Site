import palm from '../assets/images/media/palm/palm_grey.svg'

const Palm = (props) => {
    return (
            <img className= {`absolute w-4/5 -z-10 ${(props.position == 'left' ? 'LeftFlip -left-1/4' : 'RightFlip -right-1/4 ')}`} style={{maxWidth: '800px', top: props.top}} src={palm}></img>
    )
}
export default Palm;