import Link from 'next/link';

const Article = ({ article }) => {

    return (
        <div className='container'>
            <div className='card'>
                <div className='imgBx'>
                    <img src={article.urlToImage || 'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='} />
                </div>
                <div className='content'>
                    <div>
                        <h3>{article.title}</h3>
                        <p>{article.content?.slice(0, 300)}</p>
                        <Link href={`${article.url}`} passhref>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;