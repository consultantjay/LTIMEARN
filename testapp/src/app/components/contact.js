import React from 'react';

export class Contact extends React.Component{
    
    onGoClick(){
        this.props.history.push("/");
    }
    render(){
        return(
            <div className="row">
                <div className="col-xs-12 col-xs-offset-0">
                    <h2>Contact page</h2>
                    <button onClick={()=>this.onGoClick()}> Go To Home </button>
                </div>
            </div>
        );
    }
}