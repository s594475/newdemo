import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      search:''
    }
  }
  cardSearch(x){

    this.setState({search:x})
  }
  render () {
      return(
        <div>
            <Header change={this.cardSearch.bind(this)} />
            <List searchone={this.state.search} />
            <Footer />
        </div>
      )
  }
}

export default Blog;
