import React from 'react';
import '../css/skills.css'

function Skills() {
  return (
    <>
      <section id="skills" className = "skills-section" data-aos="fade-up">
        <h2 className = "skillshead">Skills</h2>
        <p className='skillscontent'>As a proficient web developer, I possess a diverse skill set 
          encompassing various aspects of web development. My expertise lies 
          in leveraging technologies such as HTML , CSS , Bootstrap , JavaScript , 
          React , WordPress , and PHP to craft visually appealing, user-friendly, 
          and responsive websites. Additionally, I have basic knowledge of React. 
          With a keen eye for design and a passion for coding, I specialize in 
          creating dynamic and interactive web experiences tailored to meet the 
          unique needs of each project. Whether it's customizing WordPress themes, 
          implementing complex CSS animations, or optimizing website performance 
          using JavaScript, I am dedicated to delivering high-quality solutions 
          that exceed expectations.</p>
            <div class="row skills-content skills-animation">
              <div class = "col-lg-6">
                <div class="progress">
                  <span class="skill">
                    <span>HTML</span>
                    <i class="val">100%</i> 
                  </span>
                  <div class="progress-bar-wrap">
                  <div 
                    class="progress-bar" 
                    role="progressbar" 
                    aria-valuenow="100" 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style = {{width: "100%"}}>
                  </div>
                </div>
                </div>
              </div>
              <div class = "col-lg-6">
                <p>gg</p>
              </div>
            </div>
      </section>
    </>
  );
}

export default Skills;

