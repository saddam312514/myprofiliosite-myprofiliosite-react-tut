import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl'

class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>

                    <p>{this.props.startYear}-{this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                <h4 style={{marginTop:'0px'}}>{this.props.Organization}</h4>

                    <h4 style={{marginTop:'0px'}}>{this.props.Degisnation}</h4>
                    <p>{this.props.Department}</p>
                    <p>{this.props.Responsibility}</p>

                

                
                </Cell>
            </Grid>
            
        )
    }
}
export default Experience;