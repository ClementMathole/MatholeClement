const Projects = () => {
    return (
        <>
            <section id="projects" style={{marginTop: 100}}>
                <h1>Portfolio of Work</h1>
                <p style={{ marginTop: -10, padding: '0 30px' }}>A collection of projects highlighting my professional capabilities, high quality and precision of care.</p>
                <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
                    <div id="used-tech">
                        <ul>
                            <li>C#</li>
                            <li>SQL</li>
                            <li>Dart</li>
                            <li>JS</li>
                        </ul>
                    </div>
                </div>
                <div className="projects-container">
                    <div className="project">
                        <div className="project-content">
                            <div className="used-tech-on-project"></div>
                            <h2>Cross-Platform Expense Insights App</h2>
                            <p>A personal finance management tool designed to help users gain a deeper understanding of their spending habits.</p>
                            <ul>
                                <li><span>&#10004; </span>Automated Expense Tracking</li>
                                <li><span>&#10004; </span>Budgeting</li>
                                <li><span>&#10004; </span>Expense Insights</li>
                                <li><span>&#10004; </span>Alert and Nortifications</li>
                                <li><span>&#10004; </span>Data Visualization</li>
                            </ul>
                            <p>The application was built using the Flutter framework, allowing for a seamless and intuitive user experience across multiple platforms. The application utilizes machine learning algorithms to categorize expenses and provide personalized insights to users.</p>
                        </div>
                        <div className="project-img"></div>
                    </div>
                </div>
                {/* <div className="projects-container">
                    <div className="project">
                        <div className="project-content">
                            <div className="used-tech-on-project"></div>
                            <h2>Business Intelligence and Analytical Platform</h2>
                            <p>A software solution that helps organizations make data driven decisions by providing insights and patterns in their data.</p>
                            <ul>
                                <li><span>&#10004; </span>Data Connectivity</li>
                                <li><span>&#10004; </span>Data Modeling</li>
                                <li><span>&#10004; </span>Reporting and Dashboard</li>
                                <li><span>&#10004; </span>Data Analysis</li>
                                <li><span>&#10004; </span>Predictive Analysis</li>
                            </ul>
                            <p>The project uses React for the frontend and ASP.NET for the backend, with features like data virtualization, reporting, and predictive analytics</p>
                        </div>
                        <div className="project-img"></div>
                    </div>
                </div> */}
            </section>
        </>
    );
}

export default Projects;