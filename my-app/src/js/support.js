// Support.jsx
import React, { useState } from 'react';
import Header from '../js/Header';
import '../css/support.css';
import '../css/Home.css';

const faqs = [
  { label: 'What is PathFinder?', answer: 'PathFinder is a career recommendation system designed to help students explore potential courses and careers based on their skills, interests, and personality.' },
  { label: 'How does PathFinder determine career recommendations?', answer: 'PathFinder uses a combination of personality assessments, academic performance, and algorithm-driven analysis to suggest career paths best suited for you.' },
  { label: 'Who can use PathFinder?', answer: 'Any student who is unsure about their career path, whether they are in high school, senior high school, or even college students considering a shift.' },
  { label: 'How do I take the assessment?', answer: 'You can access the assessment through the Assessment tab. Answer the multiple-choice questions honestly, and the system will generate career suggestions based on your responses.' },
  { label: 'Can I retake the assessment?', answer: 'Yes, you can retake the assessment anytime to explore different career possibilities.' },
  { label: 'What happens after I complete the assessment?', answer: 'Once you finish the assessment, you will receive a personalized report with suggested career paths, suitable courses, and insights based on your strengths and interests.' },
  { label: 'How do I find more details about a suggested career?', answer: 'Click on any recommended career in the Careers tab to view job descriptions, required skills, salary expectations, and career growth opportunities.' },
  { label: 'Does PathFinder show available schools or programs for my recommended career?', answer: 'Yes! The Courses section provides a list of schools or institutions offering programs related to your recommended careers.' },
  { label: 'Can I explore careers outside of my current track?', answer: 'Absolutely! PathFinder is designed to help you discover careers that match your interests, even if they differ from your current academic track.' },
  { label: 'I forgot my password. How can I reset it?', answer: 'Click on Forgot Password on the login page and follow the instructions to reset your password.' },
  { label: 'What should I do if my results don’t match my interests?', answer: 'PathFinder provides recommendations, but they are not absolute. Use the system as a guide and combine it with self-reflection and further research before making a decision.' },
  { label: 'Who do I contact if I encounter issues with the system?', answer: 'You can reach out to our support team through the Support tab, where you’ll find live chat, a ticketing system, or contact information for technical support.' }
];

function Support() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    let response = '';

    // Check if query matches any FAQ label exactly
    const faqMatch = faqs.find(faq => faq.label.toLowerCase() === trimmed.toLowerCase());
    if (faqMatch) {
      response = faqMatch.answer;
    } else if (!trimmed) {
      response = 'Please enter a question.';
    } else if (trimmed.toLowerCase().includes('hello') || trimmed.toLowerCase().includes('hi')) {
      response = 'Hello there! How can I help you today?';
    } else if (trimmed.toLowerCase().includes('time')) {
      response = `The current time is ${new Date().toLocaleTimeString()}.`;
    } else if (trimmed.toLowerCase().includes('date')) {
      response = `Today is ${new Date().toLocaleDateString()}.`;
    } else {
      response = `Sorry, I don't have an answer for "${trimmed}" right now.`;
    }

    setAnswer(response);
    setQuery('');
  };

  return (
    <>
      <Header />
      <div className="support-overlay fade-in delay-1">
        <div className="search-container fade-in delay-2">
          <p className="support-title fade-in delay-3">
            Welcome to PathFinder Support
          </p>
          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              list="faq-list"
              type="text"
              placeholder="Select a question or type here..."
              className="search-bar fade-in delay-4"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <datalist id="faq-list">
              {faqs.map((faq, i) => (
                <option key={i} value={faq.label} />
              ))}
            </datalist>
          </form>
          {answer && (
            <p className="support-answer fade-in delay-5">
              {answer}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Support;