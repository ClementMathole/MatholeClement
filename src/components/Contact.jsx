import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(
            //http logic
        )
        .then((response) => response.text())
        .then((data) => alert(data))
        .then((error) => console.error(error));
    };

    return (
        <section id="contact" style={{marginTop: 70}}>
            <div id="contact-info-container">
                <h1>Get in touch</h1>
                <div id="contact-details">
                    <div className="contact-details-container">
                        <div className="contact-icon"></div>
                        <div className="contact-details">
                            <h4>MAIL ME</h4>
                            <p>clementmathole003@gmail.com <br /> 221023664@stud.cut.ac.za</p>
                        </div>
                    </div>
                    <div className="contact-details-container">
                        <div className="contact-icon"></div>
                        <div className="contact-details">
                            <h4>CONTACT ME</h4>
                            <p>+2771-320-8063 <br /> +2761-419-4993</p>
                        </div>
                    </div>
                    <div className="contact-details-container">
                        <div className="contact-icon"></div>
                        <div className="contact-details">
                            <h4>LOCATION</h4>
                            <p>Central University of Technology<br />Welkom, Free State</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact-form-container">
                <h1>Let's work <span id="gradient-txt">together</span></h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name *' required/> <br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email *' required/> <br />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message *' required/> <br />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;