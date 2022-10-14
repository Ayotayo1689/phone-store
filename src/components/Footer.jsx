import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
   <div className="footer">
   <div className="logo">
              Blogr
            </div>
            <div className="products">
                <div className="head">
                    Products
                </div>
                <ul>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integration</li>
            </ul>
            </div>
            <div className="products">
                <div className="head">
                    Company
                </div>
                <ul>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            </div>
            <div className="products">
                <div className="head">
                    Connect
                </div>
                <ul>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>Linkedin</li>
            </ul>
            </div>
            
   </div>
    </>

  )
}

export default Footer;