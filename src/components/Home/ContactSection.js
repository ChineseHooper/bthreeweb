import React from 'react';
import FormCard from './Form/FormCard';

function ContactSection(props){
    return(
        <section className="contact-container flexbox">
            <section className="contact-form">
                <FormCard placeholder={props.formPlaceHolder}></FormCard>
            </section>
            <section className="contact-figure">
                <div className="section-title">
                    <h1>Let's get in touch</h1>
                    <p>Connect us through email: hello@bthere.ai</p>
                </div>
                <div className="figure-img"></div>
            </section>
        </section>
    )
}

export default ContactSection;