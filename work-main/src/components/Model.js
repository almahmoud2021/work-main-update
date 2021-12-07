import React, { Component } from "react";


export default class Model extends Component {
   render() {
      let modelStyle = {
         display: "block",
         backgroundColor: "rgba(0,0,0,0.8)",
      };

      return (
         <div class="modal show " style={modelStyle} >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title">{this.props.title}</h5>
                     <button
                        type="button"
                        className="btn-close"
                        onClick={this.props.hide}
                     ></button>
                  </div>
                  <div className="modal-body">
                     <img src={this.props.img} className="img-fluid" alt="" />
                     {/* <p>{this.props.desc}</p> */}
                     <ul>
                        <li>{this.props.desc1}</li>
                        <li>{this.props.desc2}</li>
                        <li>{this.props.desc3}</li>
                     </ul>
                    
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
