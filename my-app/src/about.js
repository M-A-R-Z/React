import React, { useState } from 'react';
import Header from './Header';
//import FindOutButton from './images/FindOutNow button.jpg';
//import FindOutHover from './images/FindOutNow hover.jpg';
import pathfinderLogo from './images/pathfinder_logo_1.png';
import strandlogo from './images/strand.png';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import './about.css';

function Section({ children, className }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'fade-in' : 'hidden-section'}`}
    >
      {children}
    </div>
  );
}

export { Section };

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const options = [
    {
      title: "We don’t stop at just giving options.",
      message: "PathFinder bridges the gap between what you love doing and what the world needs. We believe your future should be exciting and sustainable. That means offering guidance that balances passion with practicality, and yes, aligning with real-world industry demands."
    },
    {
      title: "We’re not here to tell you what to do.",
      message: "we’re here to help you discover what’s already in you. You won’t find cookie-cutter advice or generic answers here. Instead, you’ll be met with thoughtful suggestions tailored to your goals, your personality, and your potential.You make the call — we just give you the tools to do it."
    },
    {
      title: "So many choices, at your disposal.",
      message: "Whether you’re thinking about STEM, HUMSS, ABM, or anything specific, we’ve got your back. We break down overwhelming choices into bite-sized decisions, backed by data, presented with clarity."
    },
    {
      title: "The right path is paved by you.",
      message: "PathFinder also encourages you to explore, not just decide. We believe that the journey to finding the right path should be as rewarding as the destination. That’s why we’ve built a platform that’s intuitive, supportive, and even fun to use."
    }
  ];

  return (
    <>
      <Header />
      <div className="aboutintro-container">
      </div>

      <div className="about-container">
        <div className="about-content">
          <img src={pathfinderLogo} alt="Pathfinder" className="pathfinder1" />
          <p className="first-paragraph">
            is more than just a recommendation system—it’s your personal guide in discovering the right path when things feel uncertain.
            Designed for senior high school students who feel stuck, unsure, or just plain overwhelmed about what comes next, PathFinder helps make that next step a little clearer.
          </p>
        </div>

        <p className="second-paragraph">
          We know how confusing it is to choose a course or career when you’re unsure of what fits you best. That’s why we combine personality theories, smart algorithms, and your own unique input to better understand what drives you—your interests, strengths, and preferences—and match them to college courses, career options, and technical fields that actually make sense for you.
        </p>

        <div className="strand-box">
          <img src={strandlogo} alt="strand" className="strandlogo1" />
        </div>
        <div className="mission-vision">
          <div className="overlay-mission">
          <div className="about-mission">
            <h1 className='mission-title'>🔍︎ Mission</h1>
              <p className='mission-p'>To empower incoming senior high school students by providing a personalized, data-driven guidance system that
                helps them discover college coursesnd career paths aligned with their passions, strengths, and real-world 
                opportunities—turning uncertainty into clarity and potential into purpose.
              </p>
            </div>
          </div>

          <div className='about-vision'>
          <h1 className='vision-title'>👁 Vision</h1>
            <p className='vision-p'>To become the leading digital companion for Filipino youth in their academic and career journey—bridging the 
              gap between ambition and direction, and shaping a future where every student moves forward with confidence, self-awareness, 
              and meaningful choice.
            </p>
          </div>
        </div>

        {/* Dropdown Section */}
        <div className="dropdown-section">
          {options.map((item, index) => (
            <div key={index} className="dropdown-item">
              <div 
                onClick={() => toggleIndex(index)} 
                className="dropdown-header"
              >
                <span>{item.title}</span>
                {openIndex === index ? <ChevronUp color="white" /> : <ChevronDown color="white" />}
              </div>
              {openIndex === index && (
                <p className="dropdown-content">{item.message}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default About;
    
