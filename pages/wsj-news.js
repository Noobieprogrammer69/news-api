import Link from 'next/link';

import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

import React from 'react';
import { Banner } from '.';
import Wsj from '../components/Wsj';


const WallStreetJournal = ({ wsj }) => {
    console.log(wsj)

    return (
            <div className='for__home'>
                <Link href="/" passHref>
                    <BsFillArrowLeftSquareFill />
                </Link>
                <div>
                    <Banner
                        purpose="NEWS WEBSITE"
                        title1="HOT TOPICS FOR"
                        title2="EVERYONE"
                        desc1="BREAKING NEWS"
                        desc2="AND MORE"
                        imageUrl="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="
                    />
                </div>
                <div className='wsj__index'>
                    {wsj.articles.map((wsjNews) => <Wsj wsjNews={wsjNews} key={wsj.id} />)}
                </div>
            </div>
    )
}

export default WallStreetJournal;

export const getStaticProps = async () => {
    const wsjRes = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5de26851a94f486fabe82c0e6700a42f')
    const wsjResdata = await wsjRes.json();

    return {
        props: {
            wsj: wsjResdata
        }
    }
}