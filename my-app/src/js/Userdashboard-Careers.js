import React from 'react';
import Userdashboard from "./Userdashboard";
import '../css/Userdashboard-Careers.css';
import Career1 from '../images/career1.png';
import Career2 from '../images/career2.png';
import Career3 from '../images/career3.png';
import Career4 from '../images/career4.png'; 

function Careers() {
    return (
        <>
            <Userdashboard />
            <div className="faq-container">
                <div className="faq-content">
                    <h1><strong>Career Section</strong></h1>
                    
                    {/* Software Developer */}
                    <div className="course-intro">
                        <div className="course-text">
                            <h1><strong>1. Software Developer <br/>Role Description:</strong></h1>
                            <p>Software developers design, create, and maintain applications for 
                                computers, mobile devices, and cloud-based systems. They work with 
                                programming languages like Python, Java, C++, and JavaScript to build software 
                                solutions for businesses, consumers, and enterprises.</p>
                            <h1><strong>Skills Required:</strong></h1>
                            <ul>
                                <li>Strong programming and debugging skills.</li>
                                <li>Knowledge of software development frameworks.</li>
                                <li>Critical thinking and problem-solving</li>
                                <li>Ability to work in teams and communicate effectively.</li>
                            </ul>
                            <h1><strong>Salary Expectations:</strong></h1>
                            <ul>
                                <li><strong>Entry-level: </strong>₱25,000 – ₱40,000/month</li>
                                <li><strong>Mid-level: </strong>₱50,000 – ₱80,000/month</li>
                                <li><strong>Senior-level: </strong>₱100,000+/month</li>
                            </ul>
                            <h1>Career Growth</h1>
                            <ul>
                                <li>Mobile App Developer</li>
                                <li>Game Developer</li>
                                <li>Software Architect</li>
                            </ul>
                        </div>
                        <img src={Career1} alt="Computer Icon" className="computer-icon-1" />
                    </div>

                    {/* AI Engineer */}
                    <div className="course-intro">
                        <div className="course-text">
                            <h1><strong>2. AI Engineer<br/> Role Description:</strong></h1>
                            <p>AI Engineers design and build artificial intelligence models
                                that can analyze data, make predictions, and automate tasks. 
                                They work on machine learning algorithms, natural language 
                                processing (NLP), and neural networks to create intelligent systems.</p>
                            <h1>Skills Required:</h1>
                            <ul>
                                <li>Proficiency in Python, TensorFlow, and PyTorch</li>
                                <li>Strong mathematical and statistical knowledge</li>
                                <li>Understanding of deep learning and neural networks</li>
                                <li>Ability to work with large datasets</li>
                            </ul>
                            <h1>Salary Expectations:</h1>
                            <ul>
                                <li>₱80,000 – ₱150,000/month (varies depending on expertise and experience)</li>         
                            </ul>
                            <h1>Career Growth:</h1>
                            <ul>
                                <li>Machine Learning Engineer</li>
                                <li>Robotics Engineer</li>
                                <li>AI Research Scientist</li>
                            </ul>        
                        </div>

                        {/* Vertically aligned images */}
                        <div className="vertical-image-stack">
                            <img src={Career2} alt="Computer Icon" className="computer-icon-2" />
                            <img src={Career3} alt="Computer Icon" className="computer-icon-3" />
                        </div>
                    </div>

                    {/* Data Scientist */}
                    <div className="course-intro">
                        <div className="course-text">
                            <h1><strong>3. Data Scientist <br/> Role Description:</strong></h1>
                            <p>Data Scientists analyze large datasets to uncover insights and 
                                trends that help businesses make data-driven decisions. They use 
                                statistical methods, machine learning, and data visualization tools
                                to extract meaningful patterns from complex data.</p>
                            <h1>Skills Required: </h1>
                            <ul>
                                <li>Expertise in Python, R, and SQL</li>
                                <li>Strong analytical and problem-solving skills</li>
                                <li>Knowledge of data visualization tools (Tableau, Power BI)</li>
                                <li>Understanding of machine learning and statistical modeling</li>
                            </ul>
                            <h1><strong>Salary Expectations:</strong></h1>
                            <ul>
                                <li>₱70,000 – ₱120,000/month</li>
                            </ul>
                            <h1><strong>Career Growth:</strong></h1>
                            <ul>
                                <li>Data Analyst</li>
                                <li>Business Intelligence Analyst</li>
                                <li>Chief Data Officer</li>
                            </ul>
                        </div>
                        <img src = {Career4} alt="Computer Icon" className="computer-icon-1" />
                    </div>
                </div>
            </div>
        </>
    ); 
}

export default Careers;
