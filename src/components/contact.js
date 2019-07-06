import React, {Component} from 'react';

import { Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl'

class Contact extends Component {
    render(){
      return(
          <div className="contact-body">
              <Grid className="contact-grid">
                  <Cell col={6}>
                      <h2>Contact Info</h2>
                      <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLjmqZLG0fkxQSo9pnKT-F5vL_vzQIa_x44cGnJJxdXqMqE9-fg"
                      alt="avatar"
                      style={{height:'250px'}}
                      />
                      <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>


                  </Cell>
                  <Cell col={6}>

                      <h2>Contact Me</h2>
                      <hr/>
<div
 className="contact-list">
                      <List>
  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
        <i className="fa fa-phone-square" aria-hidden="true"/>
        01620105436
    </ListItemContent>
  </ListItem>

  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
        <i className="fa fa-fax" aria-hidden="true"/>
        01620105436
    </ListItemContent>
  </ListItem>


  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
        <i className="fa fa-envelope" aria-hidden="true"/>
        saddam312514@gmail.com
    </ListItemContent>
  </ListItem>
 
</List>
</div>
                  </Cell>
              </Grid>
            
          </div>
      )
           
    }
}
export default Contact;