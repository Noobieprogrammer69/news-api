import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Article from '../components/Article';

export const Banner = ({ purpose, title1, title2, desc1, desc2, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="white" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="2xl" color="white" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="white">{desc1}<br />{desc2}</Text>
    </Box>
  </Flex>
)

export default function Home({ news }) {

  return (
    <Box>
      <Banner
        purpose="NEWS WEBSITE"
        title1="HOT TOPICS FOR"
        title2="EVERYONE"
        desc1="BREAKING NEWS"
        desc2="AND MORE"
        imageUrl='https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='
      />
      <div className='border__category'>
      <Link href={`/tesla-news`} passHref>
          TESLA
      </Link>
      <Link href={`/wsj-news`} passHref>
        WSJ
      </Link>
      </div>
      <Flex className='ariticle__index'>
        {news.articles.map((article) => <Article article={article} key={article.id} />)}
      </Flex>
      <Flex>
      </Flex>
    </Box>
   
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5de26851a94f486fabe82c0e6700a42f');
  
  const data = await res.json();

  return {
    props: { 
      news: data,
    }
  }
}



