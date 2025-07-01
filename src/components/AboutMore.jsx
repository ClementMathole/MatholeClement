import About from './About';
import SkillsGraph from './SkillsGraph';
import FrameworksGraph from './FrameworksGraph';
import ToolsGraph from './ToolsGraph';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutMore = () => {

    const [activeGraph, setActiveGraph] = useState('languages');
    const [animationClass, setAnimationClass] = useState('fade-in');
    const [touchStartX, setTouchStartX] = useState(0);

    const navigateTo = useNavigate();

    const handleClick = (btnName) => {
        setAnimationClass('fade-out');
        setTimeout(() => {
            setActiveGraph(btnName);
            setAnimationClass('fade-in');
        }, 500);
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    }

    const handleTouchMove = (e) => {
        const touchMoveX= e.touches[0].clientX;
        const diff = touchStartX - touchMoveX;

        if ( diff > 3 ) {
            if ( activeGraph === 'languages' ) {
                setActiveGraph('frameworks');
            }
            else if ( activeGraph === 'frameworks' ){
                setActiveGraph('tools');
            }
        }
        else if ( diff < -3 ) {
            if ( activeGraph === 'frameworks' ) {
                setActiveGraph('languages')
            }
            else if ( activeGraph === 'tools' ) {
                setActiveGraph('frameworks');
            }
        }
    }

    return (
        <>
            <br />
            <br />
            <About btnText='Know Less' title='More Info About Me' />
            <hr />
            <section id="about-more">
                <div className="about-more-content">
                    <div className="switch-btns" style={{textAlign: 'center', overflowX: 'hidden', scrollbarWidth: 'none'}} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                        {activeGraph == 'languages' && <div className={`content ${animationClass}`}><SkillsGraph/></div>}
                        {activeGraph == 'frameworks' && <div className={`content ${animationClass}`}><FrameworksGraph/></div>}
                        {activeGraph == 'tools' && <div className={`content ${animationClass}`}><ToolsGraph/></div>}

                        <button className={activeGraph === 'languages' ? 'active-btn' : 'inactive-btn'} onClick={() => handleClick('languages')}></button>
                        <button className={activeGraph === 'frameworks' ? 'active-btn' : 'inactive-btn'} onClick={() => handleClick('frameworks')}></button>
                        <button className={activeGraph === 'tools' ? 'active-btn' : 'inactive-btn'} onClick={() => handleClick('tools')}></button>
                    </div>
                    <hr id='about-hr-line'/>
                    <div className="about-me-container graph">
                       <div>
                        <h2>About Me</h2>
                        <p>I'm a passionate and detail orientated developer with expertise in building unique solutions using a range of technologies. I also leverage design tools to create visually appealing interfaces. I'm excited to collaborate on projects that challange me and push the boundaries of what's possible. </p>
                        {/* <h3>Soft Skills</h3>
                        <hr/>
                        <ul className='soft-skills' style={{listStyle: 'none', padding: 0, textAlign: 'start'}}>
                            <li>
                                <strong>Communication:</strong> <p>Excellent communication skills, with the ability to work effectively with clients and team members.</p>
                            </li>
                            <li>
                                <strong>Problem Solving:</strong> <p>Strong problem solving skills, with the ability to analyze complex issues and deliver effective solutions.</p>
                            </li>
                            <li>
                                <strong>Teamwork:</strong> <p>Experience working in teams, with the ability to collaborate effectively with others to deliver high quality.</p>
                            </li>
                            <li>
                                <strong>Time Management:</strong> <p>The ability to work on a fixed time to complete and deliver projects on time.</p>
                            </li>
                        </ul> */}
                       
                        <h3>Education</h3>
                        <p style={{marginTop: -15}}><i><strong>Diploma in Information Technology</strong>: Central University of Technology, Free State</i></p>
                        <h3>Certification</h3>
                        <ul className='soft-skills' style={{listStyle: 'none', padding: 0, textAlign: 'start'}}>
                            <li>
                                <strong>IBM Data Fundamentals</strong>
                                <p>Working on completing the Profassional Data Analysis Certificate.</p>
                            </li>
                            <li>
                                <strong>2024 Academic Performace</strong>
                            </li>
                        </ul>
                        <button id='download-resume'>Download Resume</button>
                       </div>
                    </div>
                </div>
            </section>
            <div className="contact-card" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    <h3>Connect with me</h3>
                    <p>Contact me with any query or any idea</p>
                </div>
                <button onClick={() => navigateTo('/Contact')}>Get in Touch</button>
            </div>
        </>
    );
}

export default AboutMore