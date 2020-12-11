import './App.css';
import { Component } from 'react';
import Reset from './components/Reset';
import Color from './components/Color';
import Size from './components/Size';
import Result from './components/Result';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        color: 'red',
        fontSize: 10
    }
  }
  onReceiveColor = (param) => {
    this.setState({
        color: param
    })
  }
  onChangeSize = (value) => {
      if (this.state.fontSize + value >=8 && this.state.fontSize + value <=16) {
        this.setState({
          fontSize: this.state.fontSize + value
        })
           
      }
  }
  onReset = () => {
      this.setState({
          color: 'red',
          fontSize: 8
      })
  }
  render() {
  return (
    
    <div className="container mt">
      
      <div className="row">
            <Color color={this.state.color} onReceiveColor={this.onReceiveColor}/>
              <Size onChangeSize={this.onChangeSize} fontSize={this.state.fontSize}/>
              <Reset onReset={this.onReset}/>
          <Result color={this.state.color} fontSize={this.state.fontSize}/>
      </div>
    </div>
  );
}
}
export default App;
