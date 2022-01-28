import Footer from '../material-ui/Footer';
import HeadBanner from '../material-ui/HeadBanner';
import FavoriteCardBuilder from '../material-ui/FavoriteCardBuilder';

const Favorites = () => {
    //Get favorites from local storage
    //const value =  (localStorage.getItem('myValueInLocalStorage') || '' );
    const data = JSON.parse(localStorage.getItem('data'))
    console.log(data)

    return (
        <div>
            <HeadBanner title= 'Favorites' />
            <section className="grid gap-10 sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3">    
                {data.map(image => (
                    <FavoriteCardBuilder id= {image.id} image ={image.url} className="mx-auto h-full"/>
                ))}
            </section>
            <Footer/>
        </div>
    )
}

export default Favorites;