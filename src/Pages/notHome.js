import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class notHome extends Component {
  render(){
    return(
      <div class = "text-center ">
        ini notHome
        <Link to = '/'>
        </Link>
      </div>
    )
  }
}
export default notHome