import React from 'react';
import Overview from './Overview/Overview';
import FeatureList from './FeatureList/FeatureList';
import UserFlow from './UserFlow/UserFlow';
import QuestionList from './QuestionList/QuestionList';
import './index.css'

function Home(props) {
    return (
        <div className="home-page">
            <section className="overview">
                <h1 className="section-header">Overview of Service</h1>
                <Overview></Overview>
                <FeatureList></FeatureList>
            </section>
            <section className="getting-start">
                <h1 className="section-header">Getting Started is Easier than You Think!</h1>
                <UserFlow onClick={props.onClick}></UserFlow>
            </section>
            <section id="faq" className="FAQ">
                <h1 className="section-header">Frequently Asked Questions</h1>
                <QuestionList></QuestionList>
            </section>
        </div>
    )
}


export default Home;