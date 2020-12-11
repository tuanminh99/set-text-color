import { Component } from 'react';

class Reset extends Component {
  onReset = () => {
      this.props.onReset()
  }
  render() {
  return (
    <button type="button" className="btn btn-primary reset" onClick={this.onReset}>Reset</button>
  );
}
}
export default Reset;
