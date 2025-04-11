import React from 'react';
import Userdashboard from "./Userdashboard"; // import the user dashboard component
import './Userdashboard-FAQs.css';

function UserdashboardFAQ() {
    return (
        <>
            <Userdashboard />
            <div className="faq-container">
                <div className="faq-content">
                    <h1><strong>1. What is  PathFinder?</strong></h1>
                    <p>PathFinder is a career recommendation system designed to 
                        help students explore potential courses and careers based on their skills, interests, and personality.</p>

                    <h1><strong>2.How does PathFinder determine career recommendations?</strong></h1>
                    <p> PathFinder uses a combination of personality assessments, 
                        academic performance, and algorithm-driven analysis to suggest career paths best suited for you.</p>

                    <h1><strong>3. Who can use PathFinder?</strong></h1>
                    <p>  Any student who is unsure about their career path, whether they are in high school, senior high
                         school, or even college students considering a shift.</p>
                    
                    <h1><strong>4. How do I take the assessment?</strong></h1>
                    <p>  You can access the assessment through the Assessment tab. Answer the multiple-choice questions honestly, 
                        and the system will generate career suggestions based on your responses.</p>
                    
                    <h1><strong>5. Can I retake the assessment?</strong></h1>
                    <p>  Yes, you can retake the assessment anytime to explore different career possibilities.</p>

                    <h1><strong>6. What happens after I complete the assessment?</strong></h1>
                    <p>  Once you finish the assessment, you will receive a personalized report with suggested career paths, 
                        suitable courses, and insights based on your strengths and interests.</p>

                    <h1><strong>7. How do I find more details about a suggested career?</strong></h1>
                    <p>  Click on any recommended career in the Careers tab to view job descriptions, 
                        required skills, salary expectations, and career growth opportunities.</p>
                    
                    <h1><strong>8. Does PathFinder show available schools or programs for my recommended career?</strong></h1>
                    <p>  Yes! The Courses section provides a list of schools or institutions offering programs 
                        related to your recommended careers.
                    </p>

                    <h1><strong>9. Can I explore careers outside of my current track?</strong></h1>
                    <p>  Absolutely! PathFinder is designed to help you discover careers that match your 
                        interests, even if they differ from your current academic track.
                    </p>

                    <h1><strong>10. I forgot my password. How can I reset it?</strong></h1>
                    <p>  Click on Forgot Password on the login page and follow the instructions to reset your password.</p>

                    <h1><strong>11. What should I do if my results don’t match my interests?</strong></h1>
                    <p>  PathFinder provides recommendations, but they are not absolute. Use the system as a guide and 
                        combine it with self-reflection and further research before making a decision.</p>

                    <h1><strong>12. Who do I contact if I encounter issues with the system?</strong></h1>
                    <p>  You can reach out to our support team through the Support tab, where you’ll find live chat, a 
                        ticketing system, or contact information for technical support.</p>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
            </div>
        </>
    ); 
}

export default UserdashboardFAQ;