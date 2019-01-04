import React, {Component} from 'react';
import {subscribeToVideo} from '../api/socketconn';

class RecieveVideo extends Component{
    constructor(props){
        super(props);
        subscribeToVideo((err, image)=>{
            this.refs.play.src = image;
        })
    }
    render(){
        return(
            <div>
                <img src="" alt="recvimage" ref="play"></img>
            </div>
        );
    }
}

export default RecieveVideo;