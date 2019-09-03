import React, {Fragment, Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange(e) {}

  render() {

    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <Fragment>
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox
            type="search"
            placeholder='search monsters'
            handleChange={e => {
            this.setState({searchField: e.target.value});
          }}/>
          <CardList monsters={filteredMonsters}/>
        </div>
      </Fragment>
    )
  }
}

export default App;
