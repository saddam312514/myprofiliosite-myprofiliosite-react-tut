import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'

class Landing extends Component {
    render(){
      return(
          <div style={{width:'100%',margin:'auto'}}>
              <Grid className="landing-grid">
                  <Cell col={12}>

                      <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                      alt="avater"
                      className="avatar-img"
                
                      />
                      <div className="banner-text">
                          <h1>Full Stact Web Developer</h1>
                          <hr/>

                          <p>Html/Css | BootStrap | JavaScirpt | React | Express | MongoDB</p>
                          <div className="social-links">
                              <a href="http://google.com" target="_blank">
                                  <i className="fa fa-linkedin-square" rel="" aria-hidden="true"/>
                              </a>

                              <a href="http://youtube.com" target="_blank">
                                  <i className="fa fa-free-code-camp" rel="" aria-hidden="true"/>
                              </a>

                              <a href="http://facebook.com" target="_blank">
                                  <i className="fa fa-youtube-square" rel="" aria-hidden="true"/>
                              </a>
                          </div>
                      </div>
                  </Cell>
              </Grid>
              
              
          </div>
      )
           
    }
}
export default Landing;