import React, {useRef, useEffect} from "react";
import Csharp from '../assets/c-sharp.png';
import ReactJS from '../assets/atom.png';
import AspNet from '../assets/asp.png';
import NET from '../assets/net.png';
import Dart from '../assets/dart.png';
import Flutter from '../assets/flutter.png';
import Figma from '../assets/figma.png';
import Git from '../assets/icons8-git-48.png';
import GitHub from '../assets/icons8-github-64.png';
import JavaS from '../assets/java-script.png';
import Joomla from '../assets/icons8-joomla-48.png';
import SQL from '../assets/database.png';

const Technologies = () => {
    const technologies = [
        {
            id: 1,
            logo: Csharp,
            name: 'C#'
        },
        {
            id: 2,
            logo: AspNet,
            name: 'ASP.NET'
        },
        {
            id: 3,
            logo: NET,
            name: '.NET'
        },
        {
            id: 4,
            logo: Dart,
            name: 'Dart'
        },
        {
            id: 5,
            logo: Flutter,
            name: 'Flutter'
        },
        {
            id: 6,
            logo: JavaS,
            name: 'JavaScript'
        },
        {
            id: 7,
            logo: SQL,
            name: 'SQL'
        },
        {
            id: 8,
            logo: Git,
            name: 'GIT'
        },
        {
            id: 9,
            logo: Figma,
            name: 'Figma'
        },
        {
            id: 10,
            logo: Joomla,
            name: 'Joomla'
        },
        {
            id: 11,
            logo: ReactJS,
            name: 'React.js'
        },
        {
            id: 12,
            logo: GitHub,
            name: ' GitHub'
        }
    ];
    const gridRef = useRef(null);

    useEffect(() => {
        const grid =gridRef.current;
        const scrollWidth = grid.scrollWidth / 2;
        const animate = () => {
            grid.scrollLeft += 1;
            if(grid.scrollLeft >= scrollWidth) {
                grid.scrollLeft = 0;
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <section id="technologies">
            <div className="technologies-content">
                <div ref={gridRef} id="technologies-grid">
                    {technologies.map((tech) => (
                        <ul key={tech.id}>
                            <li>
                                <img src={tech.logo} alt={tech.name} />
                            </li>
                        </ul>
                    ))}
                    {technologies.map((tech) => (
                        <ul key={`clone-${tech.id}`}>
                              <li>
                                <img src={tech.logo} alt={tech.name} />
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;