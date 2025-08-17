import React, { useEffect } from 'react'
import { cardsData } from '../../Data/LocalData'
import NewsArticleSingle from '../../UI/NewsArticleSingle'



const NewsArticleList = () => {

  return (
    <>
        {cardsData.map((articleData) => (
          <NewsArticleSingle 
            key={articleData.id}
           
            article={articleData}
             />
            ))} 
    </>
  )
}

export default NewsArticleList
