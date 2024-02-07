import React from 'react';

export default function Maccourdion() {
    const faqData = [
        {
            question: "Q1: What services do you provide as a migration consultant?",
            answer: "A: We offer comprehensive migration services for individuals and families aiming to relocate to Singapore, Canada, or Australia. Our services include visa application assistance, eligibility assessments, document preparation, and personalized consultation to guide you through the entire migration process."
        },
        {
            question: "Q2: Which countries do you specialize in for migration services?",
            answer: "A: Our primary focus is on Singapore, Canada, and Australia. We specialize in understanding the immigration policies and procedures of these countries to provide tailored guidance to our clients."
        },
        {
            question: "Q3: How can I determine my eligibility for migration to Singapore, Canada, or Australia?",
            answer: "A: We conduct thorough eligibility assessments based on your individual profile, considering factors such as education, work experience, language proficiency, and other criteria specific to each country. Contact us for a personalized assessment."
        },
        {
            question: "Q4: What types of visas do you assist with?",
            answer: "A: We assist with various visa categories, including skilled migration, family reunification, student visas, and business visas. Our expertise covers a wide range of visa options to meet diverse client needs."
        },
        {
            question: "Q5: What sets your migration consultancy apart from others?",
            answer: "A: Our team of experienced consultants is dedicated to providing personalized, transparent, and efficient migration services. We stay updated on the latest immigration policies, ensuring our clients receive accurate and timely information."
        },
        {
            question: "Q6: Can you help with job placement in the destination country?",
            answer: "A: While we do not provide job placement services, we can offer guidance on job search strategies, networking, and connecting with relevant resources in the destination country. We focus on the immigration aspect of the process."
        },
        {
            question: "Q7: How long does the migration process typically take?",
            answer: "A: The duration varies depending on the visa category and individual circumstances. We provide a timeline estimate during the initial consultation based on the specific requirements of the chosen migration pathway."
        },
        {
            question: "Q8: What are your fees for migration consultancy services?",
            answer: "A: Our fees depend on the complexity of the case and the services required. We offer transparent fee structures and provide detailed information on costs during the initial consultation. Our goal is to ensure affordability and value for our clients."
        },
        {
            question: "Q9: How do I get started with your migration consultancy?",
            answer: "A: To get started, contact us for an initial consultation. During this session, we will assess your eligibility, discuss your migration goals, and provide information on the services we offer. From there, we can create a personalized migration plan for you."
        },
        {
            question: "Q10: How can I stay updated on changes in immigration policies?",
            answer: "A: We proactively inform our clients about any changes in immigration policies that may affect their cases. Additionally, we provide regular updates through newsletters, seminars, and our online platforms to keep clients well-informed throughout the migration process."
        }
    ];

    return (
        <>
        <div className="container-fluid bg-light pb-3 pt-2">
            <h1 className='fw-bold text-center display-6 py-3'>FAQ for MIGRATING to Singapore, Canada & Australia
</h1>
            <div className="row">
                <div className='py-5 '>

                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {faqData.map((item, index) => ( 
                            <div className="accordion-item mt-2 shadow  border-bottom border-primary border-1" key={index}>
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed bg-white fw-bold text-dark"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#flush-collapse-${index}`}
                                        aria-expanded="false"
                                        aria-controls={`flush-collapse-${index}`}
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id={`flush-collapse-${index}`}
                                    className="accordion-collapse collapse bg-secondary text-white"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">{item.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
