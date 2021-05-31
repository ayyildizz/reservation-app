import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Table from './Table' ;
import Popper from '@material-ui/core/Popper';

class Todo extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    this.getTodos();
  }

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

  deleteTodo = (id) => {

    axios.put(`/api/todos/${id}`)
      .then(res => {
        if(res.data){
          this.getTodos()
        }
      })
      .catch(err => console.log(err))
  }


 

  render() {
    let { todos } = this.state;

    return(
      <div>
        <h1>My Todo(s)</h1>
        <Popper trigger={<button> Trigger</button>} position="right center" contentStyle={{width:"500px"},{height:"200px"}}>
        <Input getTodos={this.getTodos}/>
        
        </Popper>
        <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
        <Table/>
      </div>
    )
  }
}

export default Todo;