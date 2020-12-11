import { Component } from 'react';

class Size extends Component {
  onChangeSize(value) {
      this.props.onChangeSize(value)
  }
  render() {
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              
              <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize} px</h3>
                  </div>
                      <button type="button" className="btn btn-success" onClick={()=>this.onChangeSize(2)}>Tăng</button>
                      <button type="button" className="btn btn-success" onClick={()=>this.onChangeSize(-2)}>Giảm</button>
                  <div className="panel-body">
                    
                  </div>
              </div>
          </div>
  );
}
}
export default Size;
