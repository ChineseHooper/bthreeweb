import React from 'react';
import Intro from './Intro/Intro';
import FeatureSection from './FeatureSection';
import DemoSection from './DemoSection';
import ServiceList from './ServiceList/ServiceList';
import TeamSlides from './TeamSlides/TeamSlides';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './index.css'


function Home(props) {
    return (
        <div className="home-page">
            <section className="banner">
                <Intro></Intro>
            </section>
            <section className="feature">
                <FeatureSection></FeatureSection>
            </section>
            <section className="demo">
                <div className="section-title">
                    <h1>Why bThere</h1>
                    <p>Existing tools don’t work well when devices and robots are in the field, miles away, and on a different network. That’s where we can help.</p>
                </div>
                <DemoSection></DemoSection>
            </section>
            <section id="service" className="service">
                <div className="section-title">
                    <h1>Applications We Support</h1>
                    <p>We solve a common set of problems for thousands of robot development teams</p>
                </div>
                <ServiceList></ServiceList>
            </section>
            <section id="team" className="team">
                <div className="section-title">
                    <h1>Our Team</h1>
                    <p>We’re bringing our internet services expertise to help you and your team to build solutions faster.</p>
                </div>
                <TeamSlides></TeamSlides>
            </section>
            <section  id="contact" className="contact">
                <ContactSection formPlaceHolder={props.formPlaceHolder}></ContactSection>
            </section>
            <Footer></Footer>
        </div>
    )
}


export default Home;