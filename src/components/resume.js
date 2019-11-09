import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}><div style={{ textAlign: 'center' }}>
                        <img className="myimg1"
                            src="1080.JPG"
                            alt="Seif"
                            style= {{height: '250px'}}
                        />

                    </div>
                        <h2 style={{ paddingTop: '2em' }}>Seif Alaa</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>El Rehab City, Cairo, Egypt</p>
                        <h5>Phone</h5>
                        <p>01007685933</p>
                        <h5>Email</h5>
                        <p>seifeldin.alaa@gmail.com</p>
                        <h5>Link</h5>
                        <p>https://github.com/SeifeldinAlaa</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="Canadian International College / Bachelor of Mass Communication
                            (PR & Advertising)"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <Education
                            startYear={"Jan19"}
                            endYear={"Aug19"}
                            schoolName="Senior Steps Training Institute / Web Development Diploma"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                        skill="HTML/CSS"
                        progress={100}
                        />
                        <Skills
                        skill="javascript"
                        progress={90}
                        />
                         <Skills
                        skill="React"
                        progress={80}
                        />
                         <Skills
                        skill="NodeJS"
                        progress={50}
                        />
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume;