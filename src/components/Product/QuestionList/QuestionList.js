import React, { useState } from 'react';
import './QuestionList.css';

const QuestionTrack = (props) => {
    return (
        <div className="question-container">
            <div className="question">{props.question}</div>
            <div className="question-answer">{props.answer}</div>
        </div>
    )
}

function QuestionList() {
    const [questions] = useState([
        {
            question:'Is my data secure and private?',
            answer:'Yes. Your data travels over secure network connections using state of the art encryption. bThere never looks at or records your data unless you ask us to.'
        },
        {
            question:'How easy is it to integrate?',
            answer:'The bThere client can be installed on your robot in minutes. You can quickly start viewing video from your robot. bThere works with ROS to make it easy to plug into your existing data flows.'
        },
        {
            question:'What do I need to use this service?',
            answer:'The bThere shell service works with Ubuntu 16.04 and above. The bThere robot client works with ROS 1 Melodic (on Ubuntu 18.04). The bThere web console works with the Chrome browser. We support most cameras with automatic configuration.'
        },
        {
            question:'What customer support do you provide?',
            answer:'During our beta period we talk with customers regularly by email and Zoom. If you run into issues we’ll work with you to get them resolved.'
        },
        {
            question:'Can I make a free plan to get started?',
            answer:'You need a little dummy text for your mockup, Lorem ipsum dolor sit amet'
        }
    ])

    return(
        <div className="question-list-container">
            {
                questions.map((track,index)=>{
                    return <QuestionTrack key={index} question={track.question} answer={track.answer}></QuestionTrack>
                })
            }
        </div>
    )
}

export default QuestionList;