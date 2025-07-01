const skills = [
    { name: 'C#', proficiency: 90 },
    { name: 'Javascript', proficiency: 70 },
    { name: 'Dart', proficiency: 90 },
    { name: 'SQL', proficiency: 90 },
];

const SkillsGraph = () => {
    const graphHeight = 300;
    return (
        <div className="graph">
            <div className="skills-graph">
                {skills.map((skill, index) => (
                    <div className="skill-bar-container" key={index}>
                        <div className="bar" style={{height:`${(skill.proficiency/ 100) * graphHeight}px`}}>
                            {/* {skill.proficiency} */}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
            <h2>Languages</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laborum eius<br /> expedita, nesciunt maxime quo corrupti tempora</p>
        </div>
    )
};

export default SkillsGraph