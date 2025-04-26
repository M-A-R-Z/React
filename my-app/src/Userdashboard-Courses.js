import React from 'react';
import Userdashboard from "./Userdashboard";
import './Userdashboard-Courses.css';
import ComputerIcon from './images/pc.png';
import ComputerIcon2 from './images/pc2.png';
import QuestionMarkIcon from './images/questionmark.png';

function Courses() {
    return (
        <>
            <Userdashboard />
            <div className="faq-container">
                <div className="faq-content">
                    <h1><strong>Your Recommended Course:</strong></h1>
                    
                    {/* First Course Introduction with Image */}
                    <div className="course-intro">
                        <div className="course-text">
                            <h1><strong>Bachelor of Science in Computer Science</strong></h1>
                            <p>The Bachelor of Science in Computer Science (BSCS) is a degree
                            program designed to equip students with the technical knowledge 
                            and problem-solving skills necessary for careers in software development, 
                            artificial intelligence, cybersecurity, and data science.</p>
                        </div>
                        <img src={ComputerIcon} alt="Computer Icon" className="computer-icon-1" />
                    </div>
                    
                    {/* Key Learning Areas with image on the right */}
                    <div className="course-intro">
                        <div className="course-text">
                            <h1><strong>Key Learning Areas in BSCS:</strong></h1>
                            <ul>
                                <li>
                                    <strong>Programming & Software Development</strong> - 
                                    Learn to write and optimize code for applications, websites, and software systems.
                                </li>
                                <li>
                                    <strong>Data Structures & Algorithms</strong> - 
                                    Develop efficient solutions for computing problems.
                                </li>
                                <li>
                                    <strong>Artificial Intelligence & Machine Learning</strong> - 
                                    Understand AI principles and how to build intelligent systems.
                                </li>
                                <li>
                                    <strong>Cybersecurity</strong> - 
                                    Learn how to protect digital assets from threats.
                                </li>
                                <li>
                                    <strong>Database Management</strong> - 
                                    Organize and retrieve large sets of data efficiently.
                                </li>
                                <li>
                                    <strong>Operating Systems & Networking</strong> - 
                                    Understand how computer systems communicate and operate.
                                </li>
                            </ul>
                        </div>
                        <img src={ComputerIcon2} alt="Computer Icon" className="computer-icon-2" />
                    </div>

                    {/* Rest of your content remains unchanged */}
                    <div className="course-intro">
                        <div className="course-text">
                            <h1><strong>Why Choose Computer Science?</strong></h1>
                            <ul>
                                <li>
                                    <strong>High Demand - </strong>
                                    The IT industry is one of fastest-growing sectors worldwide.
                                </li>
                                <li>
                                    <strong>Flexibility - </strong>
                                    Work in various industries such as finance, healthcare, gaming, and more.
                                </li>
                                <li>
                                    <strong>Innovation - </strong> 
                                    Be at the forefront of technological advancements.
                                </li>
                                <li>
                                    <strong>Job Security - </strong>
                                    Skilled computer scientists are always in demand.
                                </li>
                            </ul>
                        </div>
                        <img src={QuestionMarkIcon} alt="Computer Icon" className="computer-icon-3" />
                    </div>
                    <div className="course-intro">
                        <div className ="course-text">
                            <h1><strong>Other Related Courses</strong></h1>
                            <p>If you are interested in technology but want to explore other options, consider these alternatives:</p>
                            <ul>
                                <li>
                                    <strong>Information Technology (BSIT) – </strong>
                                    Focuses on practical IT solutions, networking, and systems administration.
                                </li>
                                <li>
                                    <strong>Computer Engineering (BSCpE) –</strong>
                                    Combines hardware and software development.
                                </li>
                                <li>
                                    <strong>Data Science & Analytics (BSDSA) – </strong>
                                    Specializes in big data analysis and machine learning applications.
                                </li>
                            </ul>

                            <h1><strong>Conclusion</strong></h1>
                            <p>PathFinder provides tailored course recommendations based on your strengths, 
                            interests, and career goals. Whether you choose to pursue Computer Science, AI, 
                            or Data Science, the tech industry offers numerous opportunities for growth and 
                            success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ); 
}

export default Courses;