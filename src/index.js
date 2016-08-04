import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import List from './components/List.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import GithubAccount from './GithubAccount/GithubAccount';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {

  constructor(){
    super();
    this.state={
      search:''
    }
  }
  cardSearch(x){

    this.setState({search:x})
  }
  getChildContext(){
    return{muiTheme:getMuiTheme()}
  }
  render(){
    return(
      <div>
        <Header change={this.cardSearch.bind(this)} />
        <GithubAccount />
        <List searchone={this.state.search} />
        <Footer />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme:React.PropTypes.object.isRequired,
};
ReactDOM.render(<App/>,document.getElementById('root'));
