import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Home extends Component {
  render(){
    return(
     
        <div class ="text-center">
        ini Home
        <Link to = '/notHome'>
          
        </Link>
      </div>
      
      
    )
  }
}
export default Home