import Link from 'next/link';

const TeslaNews = ({ teslaNews }) => {
    return (
        <div className='tesla__container'>
        <div className='tesla__card'>
            <div className='tesla__imgBx'>
                <img src={teslaNews.urlToImage || 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='} />
            </div>
            <div className='tesla__content'>
                <div>
                    <h3>{teslaNews.title}</h3>
                    <p>{teslaNews.content?.slice(0, 300)}</p>
                    <Link href={`${teslaNews.url}`} passhref>Read More</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TeslaNews;