import './App.css';
import {Component} from 'react';

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    time: 0,
    botao: "Iniciar"
  }

  this.iniciar = this.iniciar.bind(this);
  this.zerar = this.zerar.bind(this);
  this.time = null;
}

iniciar() {
  

  if(this.time !== null) {
    clearInterval(this.time);
    this.time = null;
    this.setState({botao: "Iniciar"})
  } else {
    this.setState({botao: "Parar"})
    this.time = setInterval(() => {
      let state = this.state;
      state.time += 0.1;
      this.setState(state)
    }, 100)
  }

}

zerar() {
  let state = this.state;
  state.time = 0;
  this.setState(state);
}

  render() {
  return (
    <div className="container">
      <img src={require("./assets/cronometro.png")} className="img" />
      <a className='timer'>{this.state.time.toFixed(1)}</a>
      <div className='areaBtn'>
        <a className='botao' onClick={this.iniciar}>{this.state.botao}</a>
        <a className='botao' onClick={this.zerar}>Zerar</a>
      </div>
    </div>
  );
}
}

export default App;
