const frameworks = [
    { name: 'ASP.NET', proficiency: 89 },
    { name: 'React.JS', proficiency: 85 },
    { name: 'Flutter', proficiency: 85 },
    { name: '.NET', proficiency: 89 },
];

const FrameworksGraph = () => {
    const graphHeight = 300;
    return (
        <div className="graph">
            <div className="skills-graph">
                {frameworks.map((framework, index) => (
                    <div className="skill-bar-container" key={index}>
                        <div className="bar" style={{height:`${(framework.proficiency/ 100) * graphHeight}px`}}>
                            {/* {skill.proficiency} */}
                        </div>
                        <span className="skill-name">{framework.name}</span>
                    </div>
                ))}
            </div>
            <h2>Frameworks</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laborum eius<br /> expedita, nesciunt maxime quo corrupti tempora</p>
        </div>
    )
};

export default FrameworksGraph