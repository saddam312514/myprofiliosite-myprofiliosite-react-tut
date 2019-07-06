import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './exersice';
import Skills from './skills';

class Resume extends Component {
    render(){
      return(
          <div>
              <Grid>
                  <Cell col={4}>
                      <div style={{textAlign:'center'}}>
                          <img
                          src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                          alt="avatar"
                          style={{height:'250px'}}
                          />

                      </div>
                      <h2 style={{paddingTop:'2em'}}>Saddam Hossain</h2>
                      <h2 style={{color:'grey'}}>Programar</h2>
                      <hr style={{borderTop:'3px solid # 833fb2',width:'50%'}}/>
                      <p>Software developers usually have a bachelor's degree, typically in computer science, software engineering, or a related field. ... Throughout their career, developers must keep up to date on new tools and computer languages. Software developers also need skills related to the industry in which they work.</p>
                      <hr style={{borderTop:'3px solid # 833fb2',width:'50%'}}/>
                      <h5>Address</h5>
                      <p>Shahid Shelina Parbin Sarak Malibag Dhaka</p>
                      <h5>Phone</h5>
                      <p>+8801620105436</p>
                      <h5>Email</h5>
                      <p>saddam312514@gmail.com</p>
                      <h5>Github</h5>
                      <p>https://github.com/saddam312514</p>
                      <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

                  </Cell>
                  <Cell className="resume-right-col" col={8}>
                      <h2>Education</h2>
                      <Education
                      startYear={2005}
                      endYear={2009}
                      schoolName="Bhorhanuddin Co-oparative Hish School"
                      schoolDescriptiion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"

                      />

                      <Education 
                      startYear={2009}
                      endYear={2013}
                      schoolName="Bhola Polytechnic Institute"
                      schoolDescriptiion="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                      
                      />
                      <hr style={{borderTop:'3px solid #e22947'}}/>
                      <Experience

                startYear={2017}
                endYear={2019}
                Organization="Desh Televition"
                Degisnation="Junior Executive"
                Department="Boe and It"
                Responsibility="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"


                      />
                      <hr style={{borderTop:'3px solid #e22947'} }/>
                      <h2>Skills</h2>
                      <Skills 
                      skill="javascript"
                      progress={100}
                      />
                        <Skills 
                      skill="HTML/CSS"
                      progress={80}
                      />
                      <Skills 
                      skill="NodeJs"
                      progress={50}
                      />
                      <Skills 
                      skill="React"
                      progress={25}
                      />
                  </Cell>
              </Grid>
          </div>
      )
           
    }
}
export default Resume;