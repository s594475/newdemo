import React from 'react';
import Hamburger from './components/Hamburger.js'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class App extends React.Component {
  getChildContext(){
    return{muiTheme:getMuiTheme()}
  }
  render () {
    return(
      <div>
          <Hamburger />
          {this.props.children}
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme:React.PropTypes.object.isRequired,
};
export default App;
