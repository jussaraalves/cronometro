import './App.css'
import cronometro from './assets/cronometro.png'
import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      segundos: 0,
      minutos: 0,
      horas: 0,
      numero: 0,
      botao: 'Start', 
      

    }
    this.timer = null
    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
  }

  start(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'Start'
    }else{
      this.timer = setInterval(()=>{
          let state = this.state
          state.numero += 0.1
          this.setState(state) 
      },100)
      state.botao = 'Pause'
    }
    this.setState(state)
  }

  reset(){
    this.setState({numero: 0})
  }
  render(){
    return(
      <div className="App">
        <div className='container'>
          <img src={cronometro}/>
          <a className='timer'>{this.state.numero.toFixed(1)}</a> 
        </div>
        
        <div className="card">
          <button onClick={this.start}>{this.state.botao}</button>
          <button onClick={this.reset}>Reset</button>
  
          <p className='text'>
            you can click on the buttons to test
          </p>
        </div>
      </div>
    )
  }
}

export default App
