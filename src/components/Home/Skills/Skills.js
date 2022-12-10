import React from 'react';

const Skills = () => {
    return (
        <section className='bg-gray-800 py-8 md:py-48'>

            <div className='md:grid md:grid-cols-3 px-4'>
                <div></div>
                <div>
                    <h1 className='text-3xl text-white mb-8'>Skills</h1>
                    <div>
                        <p>HTML</p>
                        <progress className="progress progress-info w-86 h-3 mb-3" value="95" max="100"></progress>
                        <p>CSS</p>
                        <progress className="progress progress-accent w-86 h-3 mb-3" value="90" max="100"></progress>
                        <p>Bootstrap</p>
                        <progress className="progress progress-secondary w-86 h-3 mb-3" value="85" max="100"></progress>
                        <p>Tailwid Css</p>
                        <progress className="progress progress-primary w-86 h-3 mb-3" value="90" max="100"></progress>
                        <p>React Js</p>
                        <progress className="progress progress-success w-86 h-3 mb-3" value="80" max="100"></progress>
                        <p>JavaScript</p>
                        <progress className="progress progress-info w-86 h-3 mb-3" value="85" max="100"></progress>
                        <p>Node Js</p>
                        <progress className="progress progress-warning w-86 h-3 mb-3" value="60" max="100"></progress>
                        <p>Express Js</p>
                        <progress className="progress progress-error w-86 h-3 mb-3" value="80" max="100"></progress>
                        <p>MongoDB</p>
                        <progress className="progress progress-info w-86 h-3 mb-3" value="70" max="100"></progress>
                        <p>Firebase</p>
                        <progress className="progress progress-secondary w-86 h-3 mb-3" value="90" max="100"></progress>
                    </div>
                </div>
                <div></div>
            </div>

        </section>
    );
};

export default Skills;