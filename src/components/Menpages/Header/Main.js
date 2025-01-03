import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    
    const [Show, setShow] = useState()
    const [Mobile, setMobile] = useState()
    const [Home, setHome] = useState(false)
    const [Page, setPage] = useState(false)
    const [Insurances, setInsurances] = useState(false)
    const [Portfolio, setPortfolio] = useState(false)
    const [Blog, setBlog] = useState(false)
    const [Btnshow, setBtnshow] = useState(false);


  return (
    <>
       <header className="main-header">
            <div className="topbar-one">
                <div className="container">
                
                
                
                
                </div>
               
            </div>
            <div className="main-header__middle">
                <div className="container">
                <div className="main-header__left">
                    <Link to="/" className="main-header__logo">
                    {/* <img src="assets/images/logo-light.png"  width={100}/> */}
                    </Link>
                    <Link to="#" className="main-header__toggler mobile-nav__toggler" onClick={() => setMobile(true)}>
                    <span />
                    <span />
                    <span />
                    </Link>
                </div>
                
                
                
                </div>
               
            </div>
            <nav className="main-menu sticky-header">
                <div className="container">
                <ul className="main-menu__list">
                    <li className="menu-item-has-children">
                    <Link to="/">Home</Link>

                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/about">About me</Link>

                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/habilidades">Habilidades</Link>

                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/proyectos">Proyectos</Link>

                    </li>

                    <li>
                    <Link to="/contact">Contacto</Link>
                    </li>
                </ul>
                
                <div className="main-menu__right">
                    
                    <Link to="/contact" className="thm-btn">
                    <span>
                        Whatsapp <i className="far fa-arrow-right" />
                    </span>
                    </Link>
                   
                    <Link to="#" className="main-menu__toggler side-drawer__toggler" onClick={() => setShow(true)}>
                    <span />
                    <span />
                    <span />
                    </Link>
                </div>
                
                </div>
               
            </nav>

            <nav className="main-menu sticky-header sticky-header--cloned sticky-fixed">
                <div className="container">
                    <ul className="main-menu__list">
                    <li className="menu-item-has-children current">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/about">About me</Link>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/habilidades">Habilidades</Link>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to="/proyectos">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                    </ul>
                    <div className="main-menu__right">
                    
                    <Link to="/contact" className="thm-btn">
                        <span>
                        Whatsapp <i className="far fa-arrow-right" />
                        </span>
                    </Link>
                    
                    <Link to="#" className="main-menu__toggler side-drawer__toggler" onClick={() => setShow(true)}>
                        <span />
                        <span />
                        <span />
                    </Link>
                    </div>
                    
                </div>
            </nav>

       </header>

       {Mobile && 
            <div className={`mobile-nav__wrapper ${"expanded"}`}>
                <div className="mobile-nav__overlay mobile-nav__toggler" />
            
                <div className="mobile-nav__content">
                <Link to="#" className="mobile-nav__close mobile-nav__toggler" onClick={() => setMobile(false)}>
                    <span />
                    <span />
                </Link>
                <div className="logo-box">
                    <Link to="/" aria-label="logo image">
                    {/* <img src="assets/images/logo-light.png" alt="Insuco" width={100}/> */}
                    </Link>
                </div>
                
                <div className="mobile-nav__container">

                    <ul className="mobile-menu__list">
                        <li className="menu-item-has-children current">
                        <Link to="/" onClick={()=> setHome(!Home)}>
                            Home
                            {/* <button aria-label="dropdown toggler">
                            <i className="fa fa-angle-down" />
                            </button> */}
                        </Link>
                        </li>
                        <li className="menu-item-has-children">
                        <Link to="/about" onClick={()=> setPage(!Page)}> 
                        About me
                            {/* <button aria-label="dropdown toggler">
                                <i className="fa fa-angle-down" />
                            </button> */}
                        </Link>

                        </li>

                        <li className="menu-item-has-children">
                        <Link to="/habilidades" onClick={()=> setInsurances(!Insurances)}>
                        Habilidades 
                            {/* <button aria-label="dropdown toggler">
                            <i className="fa fa-angle-down" />
                            </button> */}
                        </Link>

                        </li>
                        <li className="menu-item-has-children">
                        <Link to="/Proyectos" onClick={()=> setPortfolio(!Portfolio)} > Proyectos
                            {/* <button aria-label="dropdown toggler">
                                <i className="fa fa-angle-down" />
                            </button> */}
                        </Link>

                        </li>

                        <li>
                        <Link to="/contact">Contacto</Link>
                        </li>
                    </ul>
                </div>

                
                
                
                </div>
                
            </div> 
        }

           
            {Show && 
                <div className={`side-drawer__wrapper ${"expanded"}`}>
                    <div className="side-drawer__overlay side-drawer__toggler" />
                    
                    <div className="side-drawer__content">
                    <Link to="#" className="side-drawer__close side-drawer__toggler" onClick={() => setShow(false)}>
                        <span />
                        <span />
                    </Link>
                    <div className="logo-box">
                        <Link to="/" aria-label="logo image">
                        <img src="assets/images/logo-light.png" alt="Insuco" width={200}/>
                        </Link>
                    </div>
                

                    
                    <div className="footer-one__widget">
                        <h3 className="footer-one__widget__title">Contacto</h3>
                        <ul className="list-unstyled footer-one__widget__contact">
                        <li>
                            <i className="far fa-envelope-open" />
                            <Link to="mailto:alejandronaranjo357@gmail.com">alejandronaranjo357@gmail.com</Link>
                        </li>
                        <li>
                            <i className="far fa-phone-plus" />
                            <Link to="tel:+57 3175816061">+57 3175816061</Link>
                        </li>
                        </ul>
                        
                    </div>
                    
                    </div>
                    
                </div>  
            }

            {Btnshow && 
                <div className={`search-popup ${"active"}`} onClick={() => setBtnshow(false)}>
                    <div className="search-popup__overlay search-toggler" />

                    <div className="search-popup__content">
                        <form action="#">
                        <label htmlFor="search" className="sr-only">
                            search here
                        </label>
                        
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="thm-btn">
                            <span>
                            <i className="far fa-search" />
                            </span>
                        </button>
                        </form>
                    </div>

                </div>
            }

    </>
  )
}

export default Header