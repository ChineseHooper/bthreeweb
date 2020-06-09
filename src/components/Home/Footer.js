import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link' 

function Footer() {
    return (
        <div className="footer">
            <div className="company-info flexbox">
                <div className="logo"></div>
                <div className="flexbox">
                    <div className="intro">
                        <div className="ft-logo">bThere.ai</div>
                        <div className="ft-text">bThere.ai provides technology that allows robot development teams to remotely monitor and control robots, autonomous vehicles, and IoT devices from anywhere in the world, with low-latency and high-reliability.</div>
                    </div>
                    <div className="products">
                        <Link to="/products" smooth><div className="ft-title">Products</div></Link>
                        <Link to="/#team" smooth><div className="ft-link">Team</div></Link>
                        <Link to="/products#faq" smooth><div className="ft-link">FAQ</div></Link>
                    </div>
                    <div className="social-media">
                        <div className="ft-title">Contact</div>
                        <a href="mailto:hello@bthere.ai"><div className="ft-link">hello@bthere.ai</div></a>
                        <div className="flexbox">
                            <a href="mailto:hello@bthere.ai"><div className="ft-social-media mail"></div></a>
                            <a href="https://www.facebook.com/bthereai"><div className="ft-social-media facebook"></div></a>
                            <a href="https://www.linkedin.com/company/bthere-ai/"><div className="ft-social-media linkedin"></div></a>
                            <a href="https://www.instagram.com/bthere.ai/"><div className="ft-social-media twitter"></div></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">© 2020 bThere.ai. All rights reserved.</div>
        </div>
    )
}

export default Footer;