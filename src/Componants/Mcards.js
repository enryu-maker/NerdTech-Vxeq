import React from 'react'
import './Mcards.css'

export default function Mcards() {
    const card = [
        {
            title: "Immigration Assessment",
            info: "VXEQ IFPL shall assess your eligibility for immigration to Singapore, Canada, or Australia based on your qualifications, work experience, education, language proficiency, and other relevant factors.",
        },
        {
            title: 'Visa Application Assistance',
            info: 'Assistance with the preparation and submission of visa applications, including the required documentation for various visa categories such as skilled migration, family reunification, student visas, and more.',
        },
        {
            title: 'Documentation Guidance',
            info: 'Providing guidance on the documentation required for the visa application process, ensuring that all necessary paperwork is in order and meets the immigration authorities',
        },
        {
            title: 'Language Proficiency Testing',
            info: 'Assistance and guidance in preparing for language proficiency tests, such as IELTS or TOEFL, which are often required for immigration purposes. ',
        },
        {
            title: 'Job Search Support',
            info: 'Services to help individuals find employment opportunities in the destination country, especially for skilled migration programs where securing a job offer may be a requirement.            ',
        },
        {
            title: 'Education Consultation',
            info: 'Advising on educational opportunities in the destination country, including assistance with admission applications, course selection, and student visa applications.',
        },
        {
            title: 'Pre-Departure Orientation',
            info: 'Providing information and support to help individuals prepare for their move, including understanding the local culture, healthcare system, and other aspects of daily life.',
        },
        {
            title: 'Legal Advice',
            info: 'Offering legal advice on immigration laws and regulations, ensuring that clients are informed about the legal aspects of the immigration process.',
        },
        {
            title: "Post-Arrival Support",
            info: "Services to assist with the settlement process, such as finding accommodation, opening bank accounts, obtaining local identification, and connecting with community resources.",
        },
        {
            title: "Appeals and Reviews",
            info: "Assisting clients in the case of visa denials or other issues by providing support in the appeals process or requesting a review of the decision.",
        }

    ]
    return (
        <>
            <div className="container-fluid py-5 bg-light">
                <h1 className='text-center fw-bold display-5 ' style={{letterSpacing:"2px"}}>OVERVIEW</h1>
                <p className='text-center fw-bold fs-5 px-3 py-3 text-secondary' style={{letterSpacing:"1px"}}>We provide specialized migration services for Singapore,
                    Canada, and Australia. We typically offer a range of services to individuals and families
                    looking to immigrate to these countries. The specific services may vary from one country to
                    another, but here are some common offerings:</p>
                <div className="row">
                    {card.map((item, index) => (

                        <div class="content1 shadow border-bottom border-primary border-4 col-md-3 bg-white col-sm-12 my-3 py-5">
                            <div class="content-overlay1"></div>
                            <h3 class="content-title1 fs-6 fw-bold  text-center">{item.info}</h3>
                            <div class="content-details1 fadeIn-bottom">

                                <p class="content-text1 fs-3">{item.title}</p>
                            </div>
                        </div>


                    ))}
                </div>
                <p className='text-center fw-bold fs-5 px-3 py-5 text-secondary'>It's important to note that immigration policies and procedures can change,
                     so VXEQ IFPL shall keep you updated with the latest information and regulations.</p>
                     
            </div>
        </>
    )
}
