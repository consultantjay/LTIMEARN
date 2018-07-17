
import React from 'react';


export class Button extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
  
    updateCount() {
      this.setState((prevState, props) => {
        return { count: prevState.count + 1 }
      });
    }
  
    render() {
      return (<button
                onClick={() => this.updateCount()}
              >
                Clicked {this.state.count} times
              </button>);
    }
  }
  
   