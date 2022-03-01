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
            <Card className='relative cursor-pointer grid_sq h-auto bg-cover flex flex-col justify-center'
                sx={{
                    borderRadius: '15px',
                    backgroundImage: `url(/images/${item.title}/${item.imageUrl})`
                }}>
                <div className='z-0 absolute top-0 bg-gradient-to-t opacity-80 from-gray-900 via-transparent-20 to-transparent trans transition-opacity hover:opacity-40 w-full h-full'></div>
                <h5 className='z-10 font-bold text-white text-center text-2xl capitalize Text-shadow Roboto_Condensed'>
                    {item.title}
                </h5>
            </Card>
            </Link>
        ))}
        </section>
    )
}

export default FeatureDestinations