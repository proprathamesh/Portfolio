import React from 'react'

export default function Edu_back() {
    return (
        <div>
            <div className="plan-container">
                <div className="d-flex py-1 fs-1 justify-content-center" style={{fontFamily: 'Black Ops One, cursive', background: 'linear-gradient(45deg, rgb(255, 155, 1, 0.4), rgb(166, 255 ,0, 0.4) )'}}>
                    <div className="my-auto text-center">Web-Development<br/>Journey</div>
                </div>
                <div className='px-5 py-4'>
                    <div className="w-100 h-100 edu-box d-flex flex-column">
                        <div className='ms-3'>
                            <div className="position-relative w-auto" style={{left:'-28px', fontSize:'30px'}}>&diams; Before - 2022</div>
                            <p>With experience of over 2yrs I have specialization in HTML, CSS, and JavaScript to create captivating web interfaces. Leveraging React and Bootstrap, I design responsive and dynamic user experiences. My proficiency in PHP allows me to build robust back-end logic, while integrating APIs adds versatility to my projects. My comprehensive skill set enables me to deliver end-to-end web solutions that blend aesthetics with functionality.</p>
                        </div>
                        <div className='mt-4 ms-3'>
                            <div className="position-relative w-auto" style={{left:'-28px', fontSize:'30px'}}>&diams; Present</div>
                            <p>I'm currently focused on getting over MERN stack. I'm building strong backend APIs with Node.js and Express, while honing my React skills for dynamic user interfaces. This comprehensive learning is preparing me to develop seamless end-to-end web applications.</p>
                        </div>
                        <div className='mt-4 ms-3'>
                            <div className="position-relative w-auto" style={{left:'-28px', fontSize:'30px'}}>&diams; Free Time</div>
                            <p>In my free time, I learn design techniques and optimize past projects with the latest knowledge. I strive to create engaging interfaces and enhance existing projects to ensure top performance standards. This reflects my commitment to delivering polished web solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
