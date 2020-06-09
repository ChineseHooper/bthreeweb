import React, { useState } from 'react';
import feature_1 from '../../../img/feature-1.png'
import feature_2 from '../../../img/feature-2.png'
import feature_3 from '../../../img/feature-3.png'
import './FeatureList.css'

const Feature = (props) => {
    return (
        <div className="homepage-feature flexbox">
            <div className="homepage-ft-icon" style={{backgroundImage:`url(${props.icon})`}}/>
            <div className="homepage-ft-txt">
                <div className="txt-title">{props.title}</div>
                <div className="txt-description">{props.description}</div>
            </div>
        </div>
    )
}

function FeatureList() {
    const [features] = useState([
        {
            title:"Gets you to market faster",
            src: feature_1,
            description:"All services for our team of industry experts, personal training, support line and help desk."
        },
        {
            title:"Saves your developer time and money",
            src: feature_2,
            description:"All services for our team of industry experts, personal training, support line and help desk."
        },
        {
            title:"Is more secure and is feature rich",
            src: feature_3,
            description:"All services for our team of industry experts, personal training, support line and help desk."
        }
    ])

    return (
        <div className="homepage-feature-list">
            {
                features.map((feature,index)=>{
                    return <Feature key={index} title={feature.title} description={feature.description} icon={feature.src}></Feature>
                })
            }
        </div>
    )
}

export default FeatureList;