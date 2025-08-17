import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router'

const ArticleDetail = () => {
    const params = useParams();
    const datatest = useLoaderData();
    console.log(datatest)
    // console.log(params, 'param')
 

  return (
    <>
          detail page
          <div>
              {/* {params.id} */}
          </div>
    </>
  )
}

export default ArticleDetail
