import React, { Component } from 'react';

class Diagram extends Component {
  render() {
    return (
      <div  id="umldiagram">
        <div id="ud_container_div">
          <div id="ud_selector_div">
              <ul id="ud_selector_ul"></ul>
          </div>
          <div id="ud_diagram_div" className="ud_diagram_div">
            <canvas id="canvascanvas" className="ud_diagram_canvas" style={{backgroundColor:'#66BB6A'}}>

            </canvas>
            <canvas id="canvascanvas2" className="ud_diagram_canvas">

            </canvas>
            <div id="ud_update_div" title="apply changes in profile to diagrams">
  
            </div>
            <div id="ud_delete_div">

            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default Diagram;
