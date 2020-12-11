import { Component } from 'react';

class Color extends Component {
  constructor(props) {
      super(props);
      this.state = {
          color: ['red','blue','green','orange']
      }
  }
  showColor(color) {
    return {
      backgroundColor: color
    }
  }
  onSetActiveColor(color) {
    this.props.onReceiveColor(color)
  }
  render() {
  var eleColors = this.state.color.map((color,index)=> {
      return <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? 'active' : ''}
          onClick={()=> this.onSetActiveColor(color)}
      ></span>
  })
  return (
    
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
            <div className="panel-heading">
                <h3 className="panel-title">Color picker</h3>
            </div>
            <div className="panel-body">
                {eleColors}
            </div>
        </div>
    </div>
  );
}
}
export default Color;
