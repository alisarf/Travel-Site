import { Card } from "@mui/material"
import { Link } from 'react-router-dom'

/** Square cards with title and background image**/
//prop input requirement is an array of the following...
//arr = [..., {title, imageUrl, pathUrl}]

const FeatureDestinations = ({arr}) => {


    return (
        <section className='w-container mx-auto grid grid-cols-2 gap-4 mb-12 md:mb-20 md:grid-cols-3 lg:grid-cols-5'>
        {arr.map( item => (
            <Link to={`/${item.pathUrl}`}>
            <Card className='cursor-pointer grid_sq h-auto bg-cover flex flex-col justify-center'
                sx={{
                    borderRadius: '15px',
                    backgroundImage: `url(/images/${item.title}/${item.imageUrl})`
                }}>
                <h5 className='font-bold text-white text-center text-2xl capitalize Text-shadow Roboto_Condensed'>
                    {item.title}
                </h5>
            </Card>
            </Link>
        ))}
        </section>
    )
}

export default FeatureDestinations