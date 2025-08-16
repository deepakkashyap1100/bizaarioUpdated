import "bootstrap/dist/css/bootstrap.min.css";
import AwardsSlider2 from './awards-certification/AwardsSlider2'; 
import AwardsSlider from "./awards-certification/AwardsSlider";
const Awards = () => { 
     
  return (
      <>
          <section className='spacing-top awards-certification-section position-relative'>
              <div className="container">
                  <div className="row">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                          <div>
                              <h2 className="fw-semibold ">Awards & Certification</h2>
                              <p className="light-color lmb-0">Learn from leading doctors and specialists through
                                  focused, digestible video content.</p>
                          </div> 
                      </div> 
                  </div>
                  <div className="row">
                      {/* <AwardsSlider /> */}
                      <AwardsSlider2 />
                  </div> 
              </div>
          </section>
      </>
  )
}

export default Awards