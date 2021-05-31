import React, { Component } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Input from './Input';
class PopupDeneme extends Component {

    getTodos = () => {
        axios.get('/api/todos')
          .then(res => {
            if(res.data){
              this.setState({
                todos: res.data
              })
            }
          })
          .catch(err => console.log(err))
      }

  render() {
    
    return (
      <Popup trigger={<button> Trigger</button>} position="right center">
      <Input getTodos={this.getTodos}/>
      </Popup>
      
    )
  }
}

export default PopupDeneme
