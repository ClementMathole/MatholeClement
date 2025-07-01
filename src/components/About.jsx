import { useNavigate } from 'react-router-dom';

const About = ({ btnText, title }) => {
    const navigateTo = useNavigate();
    return (
        <>
            <section id="about">
                <div className="me-image"></div>
                <h1>{title}</h1>
                <p id='tagline'>'As a detail orientated and analytical developer, I bring ideas to life through well written code, <br /> innovative solutions, and a commitment to excellence'</p>
                <button id='more-about-me' onClick={() => navigateTo('/AboutMore')}>{btnText}</button>
            </section>
         
        </>
    );
};

export default About;