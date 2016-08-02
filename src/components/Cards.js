import React, {Component} from 'react';
import map from 'lodash/fp/map';
import CardsList from './CardsList.js';
import blogs from './blogs.js';
class Cards extends Component {
  render(){

    var blogCards = [];
    if (this.props.searchVal=='') {
      map((b) => {blogCards.push(<CardsList title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},blogs);
    }else {
      let query=new RegExp(this.props.searchVal,"i");
      for (var i = 0; i < blogs.length; i++) {
        if (query.test(blogs[i].title)) {
          blogCards.push(<CardsList title={blogs[i].title} date={blogs[i].date} index={blogs[i].index} key={Math.random()}/>)
        }
      }
    }

    return(
      <div>
        {blogCards}
    </div>
    )
  }
}

export default Cards;
