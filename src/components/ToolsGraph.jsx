const tools = [
    { name: 'Figma', proficiency: 90 },
    { name: 'Git', proficiency: 90 },
    { name: 'Joomla', proficiency: 70 },
    { name: 'GitHub', proficiency: 89 },
];

const ToolsGraph = () => {
    const graphHeight = 300;
    return (
        <div className="graph">
            <div className="skills-graph">
                {tools.map((tool, index) => (
                    <div className="skill-bar-container" key={index}>
                        <div className="bar" style={{height:`${(tool.proficiency/ 100) * graphHeight}px`}}>
                            {/* {skill.proficiency} */}
                        </div>
                        <span className="skill-name">{tool.name}</span>
                    </div>
                ))}
            </div>
            <h2>Tools</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laborum eius<br /> expedita, nesciunt maxime quo corrupti tempora</p>
        </div>
    )
};

export default ToolsGraph