import { NavLink } from "react-router"


const NewsArticleSingle = ({article}) => {

  return (
      <>
     
          <div className="col-lg-4 col-md-6 col-12 mb-4" key={article.id}> 
              <div className="card border-0 shadow-sm h-100 rounded-4 p-3">
                <img src={article.img} className="card-img-top " alt={article.title} />
                <div className="pt-3">
                  <h4 className="fw-bold">{article.title}</h4>
                  <p className=" small mb-1 light-color">{article.desc}
                          <NavLink
                              className="country-card ms-4 fw-semi-bold read-more-btn  text-decoration-none"
                              to={`${article.id}`} 
                          > 
                         Read More     
                      </NavLink>
                  </p>
                </div>
              </div>
            
              </div>
       
    </>
  )
}

export default NewsArticleSingle
