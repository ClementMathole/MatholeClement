import { useNavigate } from 'react-router-dom';
import About from "./About";
import Projects from './Projects';
import Technologies from "./Technologies";

const Home = () => {
    const navigateTo = useNavigate();

    return (
        <>
            <section id="home">
                <div id="home-content">
                    <div id="me">
                        <p><span id="my-name">CLEMENT MATHOLE</span> - <span id="welcome-txt">'Welcome & have fun.'</span></p>
                    </div>
                    <h1>Let's Turn Your Ideas Into <br /> <span id="gradient-txt">Reality</span></h1>
                    <p style={{color: 'gray', marginTop: -10, fontSize: 14}}>I'm a Software Developer with a passion for building robust, scalable software, and <br /> a keen eye for detail and quality code.</p>
                    <div className="btns">
                        <button id="getintouch-btn" onClick={() => navigateTo('/Contact')}>Get in touch</button>
                        <button id="resume-btn">Download Resume</button>
                    </div>
                </div>
            </section>
            <hr/>
            <Technologies/>
            <hr />
            <About btnText='Learn More' title='Quick Info About Me'/>
            <hr />
            <Projects/>
        </>
    );
}

export default Home;