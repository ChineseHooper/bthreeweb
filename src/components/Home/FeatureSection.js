import React from 'react';
import FeatureList from './FeatureList/FeatureList';

function FeatureSection(){
    return(
        <section className="feature-list-container flexbox">
            <div className="list-content">
                <div className="section-title">
                    <h1>What bThere does for you</h1>
                    <p>We solve a common set of problems for thousands of robot development teams</p>
                </div>
                <FeatureList></FeatureList>
            </div>
            <div className="list-background"></div>
        </section>
    )
}

export default FeatureSection;