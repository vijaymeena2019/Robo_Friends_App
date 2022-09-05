import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';    // for rest Api
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

// const state = {
//   robots: robots,
//   searchfeild: ''
// }
class App extends Component {
  // const App = () => {
  constructor() {
    super()   // otherwise get error: 'this' is  not allowed before super()
    this.state = {   // state which discribe our app, these are the thing which can change and usually lives in parent component, parent that passed the state to different component ,but props never change
      robots: [],      // now App owns state that  now owns rebots , it allow us to change it.
      searchfield: ''
    }
  }

  componentDidMount() {     // rest Api learn latar
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users })
      });
  }

  onSearchChange = (event) => {  // always arrow fn and it is thumb rule in react
    this.setState({ searchfield: event.target.value })  // predefine fn  in react and thumb rule to use like that
    console.log(event.target.value);
    // const filteredRobots = this.state.robots.filter(robot => {
    //   return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // let txlen = event.target.value.length;
    // return event.target.value === robot.name.slice(0,txlen)
  }

  render() {
    // const { robots, searchField } = this.state    // we can use this destructuring for this.state, we need to change all this.state to variables after this
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Robo Friends</h1>
          < SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              < CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }
  }
}

export default App;





// import React, { Component } from 'react';

// class App extends React.Component {//function App() {  // convert it into class component from a functional component
//   render() {   // added    // this React.Component automatically detects this render method.
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }