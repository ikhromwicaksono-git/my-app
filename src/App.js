import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './Pages/Home'
import notHome from './Pages/notHome'
//import navbar from './components/navbar';
import Navbar from './components/navbar'
class App extends Component{

  //   state = {
  //   nama : 'Andi',
  //   sekolah : 'purwadhika',
  //   number : 0
  // }

  // gantiNama = () => {
  //   let arrNama = ['Joko','budi','lintang']
  //   let output = ''
  //   for(let i = 0; i < arrNama.length; i++){
  //     output += arrNama[i]
  //     this.setState({nama : output})
  //     output = ''
  //   }
  // }
  // tambahNomor = () => {
  //   this.setState({number : this.state.number + 1})
  // }
  // kurangNomor = () => {
  //   this.setState({number : this.state.number - 1})
  // }

  render(){
    return (
      // <div>
      //   <div> {this.state.nama} bersekolah di {this.state.sekolah} </div>
      //   <div> {this.state.number}</div>
      //   <button onClick = {this.gantiNama}>Click Me</button>
      //   <button onClick = {this.tambahNomor}> + </button>
      //   <button onClick = {this.kurangNomor}> - </button>
      // </div>
      <div>
        <Navbar/>
        <Route path = '/' component = {Home} exact/>
        <Route path = '/notHome' component = {notHome} exact/>

      </div>

    )
  }
}

export default App;
