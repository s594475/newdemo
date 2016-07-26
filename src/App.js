import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
        <Header />
        <List />
        <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
