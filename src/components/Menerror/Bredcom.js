import React from 'react'
import {Link} from 'react-router-dom'

function Bredcom() {
  return (
    <>
        <section className="error-page">
            <div className="container">
                <h3 className="error-page__title">OPPS! This Page are can’t be found</h3>
               
                <Link to="/" className="thm-btn">
                <span>
                    Go to Home
                    <i className="far fa-arrow-right" />
                </span>
                </Link>
                
            </div>
        </section>

    </>
  )
}

export default Bredcom