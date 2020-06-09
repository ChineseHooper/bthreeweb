import React, { useState } from 'react';
import keyword_1 from '../../img/keyword-1.png';
import keyword_2 from '../../img/keyword-2.png';
import keyword_3 from '../../img/keyword-3.png';
import keyword_4 from '../../img/keyword-4.png';
import keyword_5 from '../../img/keyword-5.png';
import Demo from './Demo/Demo';


const FeatureKeyWords = ({ keywords }) => {
    return (
        <div className="keywords-container flexbox">
            {
                keywords.map((keyword,index) => {
                    return <div className="keyword-item flexbox" key={index}>
                        <img src={keyword.icon} alt="icon"></img>
                        <div className="keyword-txt">{keyword.text}</div>
                    </div>
                })
            }
        </div>
    )
}

function DemoSection() {
    const [keywords] = useState([
        {
            icon:keyword_1,
            text:'Easy'
        },
        {
            icon:keyword_2,
            text:'Scalable'
        },
        {
            icon:keyword_3,
            text:'Secure'
        },
        {
            icon:keyword_4,
            text:'Low Latency'
        },
        {
            icon:keyword_5,
            text:'Reliable'
        }
    ])

    return (
        <section className="section-container">
            <Demo/>
            <FeatureKeyWords keywords={keywords}/>
        </section>
    )
}

export default DemoSection;