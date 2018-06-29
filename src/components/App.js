import React, { Component } from 'react';
import { Data } from './Data';
import Skills from '../containers/Skills';
import Hobbies from '../containers/Hobbies';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : ''
    };
  }

  show(name) {
    this.setState({
      name: name
    });
  }

  render() {
    return (
      <div className = 'container'>
        <h1 className = 'text-center'>Портфолио</h1>
        <div className = 'row justify-content-center'>
          <div className = 'col col-md-4'>
            <h2>Данные</h2>
            <Data
                firstname = 'Сергей'
                lastname = 'Орлов'
                age = {24}
                education = 'НИ ТПУ'
            />
            <p>Навыки <span className = 'badge badge-success'
                            onClick = { () => this.show(Skills) }>Показать</span></p>

            <p>Увлечения <span className = 'badge badge-success'
                            onClick = { () => this.show(Hobbies) }>Показать</span></p>
          </div>
          <div className = 'col col-md-4'>
          {
            this.state.name === '' ? <div></div> : <this.state.name/>
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
