import React from 'react';
import '../domestic/JobAssistance.css'; 
import { motion } from 'framer-motion';

const JobAssistance = () => {
    return (
        <div className="job-assistance">
            <h1 className="job-assistance__title">Job Assistance</h1>
            <motion.section
            className="job-assistance__section"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
    
                    <h2 className="job-assistance__section-title">Interview Preparation</h2>
                    <p>
                        Too many candidates mistakenly believe that being called in for an interview is being guaranteed a position. Nothing could be further from the truth. You might be the last person on a short list of candidates. Your skills, knowledge, and abilities are good – but not a perfect match for the company. However, the hiring manager is interested enough to meet with you and allow you to sell yourself to the company.
                    </p>
                    <p>
                        Clearing an interview round is the last and the most critical step. An outstanding interview session requires effective homework, ideal presentation and the right soft skills. This online course helps you to deliver an error-free interview. With its guided learning and instant feedback approach, this program empowers you with the confidence and the soft skills required for doing well in session.
                    </p>
                    <p>
                        This course aims at preparing learners for their upcoming job interviews. Comprehensive coverage of topics for all pre-interviews, at the interview & post-interview stages.
                    </p>
                    <h2 className="job-assistance__section-title">Job Search Assistance</h2>
                    <p>
                        Save a lot of time applying for vacancies and it becomes easier for consultants to reach you. Our team of experienced professionals who come from HR/Recruitment backgrounds works as your Relationship Manager. Job Search Assistant goes the extra mile for candidates. This service will provide you with a personal Relationship Manager, who will help you at every step of your job seeking – right from job search, profile optimization to company research. Job Search Management is equipped to efficiently manage your job hunt so that you reach your career goals effortlessly.
                    </p>
                    <p>
                        The Relationship Manager working with you will have interactions with you, in a span of 3/6 months to start your job search. The Relationship Manager will search for the relevant and matching job vacancies using your profile details, preferences, and on the basis of market availability. Candidates can expect 4-5 job openings per month according to their profile within the time frame of 3/6 months. The Relationship Manager will submit applications on your behalf, once you approve the job which has been searched by him/her and your Relationship Manager will also provide the company profile details to you on the basis of availability. The Relationship Manager will get in touch with you within 48 to 72 working hours of order activation.
                    </p>
                
            </motion.section>
        </div>
    );
};

export default JobAssistance;