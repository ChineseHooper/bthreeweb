import React, { useState, useEffect } from 'react';
import './TeamSlides.css';
import member1 from '../../../img/member-1.png';
import member2 from '../../../img/member-2.png';
import member3 from '../../../img/member-3.png';
import linkedin from '../../../img/Linkedin2.png';

function TeamSlides() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [members] = useState([
        {
            id: 1,
            figure: member1,
            title: "Co-founder",
            name: "Stuart Marshall",
            linkedin:"https://www.linkedin.com/in/thestuartmarshall/",
            intro: "Stuart has 26 years in software development/management. He worked at managing teams in AWS, Microsoft, and the computer game industry. Stuart is an expert in SaaS and high-scale distributed systems."
        },
        {
            id: 2,
            figure: member2,
            title: "Co-founder",
            name: "Matt Wenger",
            linkedin:"https://www.linkedin.com/in/wengermatt/",
            intro: "Matt is an expert in security, distributed, embedded systems and has 24 years of experience in software / hardware development / management. He has worked in software and management teams at Amazon, Oracle, and early stage companies."
        },
        {
            id: 3,
            figure: member3,
            title: "Growth & Design",
            name: "Zaris Shen",
            linkedin:"https://www.linkedin.com/in/zarisshen/",
            intro: "Zaris has worked at a prominent VC company and worked in sales and marketing at a VC-backed SaaS startup. She also has great experience in UX  and graphic design."
        }
    ])

    useEffect(() => {
        const interval = setInterval(() => {
            handleSlideIndexRight()
        }, 5000);
        return () => clearInterval(interval);
    })

    const handleSlideIndexRight = () => {
        if (currentSlideIndex >= members.length - 1) {
            setCurrentSlideIndex(0)
        } else {
            setCurrentSlideIndex(currentSlideIndex + 1)
        }
    }

    const handleSlideIndexLeft = () => {
        if (currentSlideIndex <= 0) {
            setCurrentSlideIndex(members.length - 1)
        } else {
            setCurrentSlideIndex(currentSlideIndex - 1)
        }
    }

    const calculateSlideClass = (index) => {
        if (index === currentSlideIndex) {
            return "slide initial"
        } else if (index === currentSlideIndex + 1) {
            return "slide next"
        } else if (index === currentSlideIndex - 1) {
            return "slide prev"
        } else {
            return "slide"
        }
    }

    return (
        <div className="cars-container flexbox">
            <div className="slides-btn slide-btn-l" onClick={handleSlideIndexLeft}>
                <div className="arrow arrow-left"></div>
            </div>
            <div className="slides-viewport">
                <div className="slides-body">
                    {
                        members.map((member, index) => {
                            return (
                                <div className={calculateSlideClass(index)} key={index}>
                                    <div className="mb-image" style={{ backgroundImage: `url(${member.figure})` }}></div>
                                    <div className="mb-info flexbox">
                                        <div className="mb-title">{member.title}</div>
                                        <div className="flexbox">
                                            <div className="mb-name">{member.name}</div>
                                            <a href={member.linkedin} className="mb-linkedin">
                                                <img  src={linkedin} alt=""></img>
                                            </a>
                                        </div>
                                        <div className="mb-intro">{member.intro}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="slides-btn slide-btn-r" onClick={handleSlideIndexRight}>
                <div className="arrow arrow-right"></div>
            </div>
        </div>
    )
}

export default TeamSlides;