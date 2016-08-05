import React, { Component } from 'react';
import Cards from './Cards.js';

class List extends Component {
  getStyles(){
    return{
      big:{
        width:'100%',
        backgroundColor:'#fff',
        marginTop:'50px',
      }
      }
  }
  render(){
      const styles=this.getStyles();
    return (

      <div style={styles.big}>

        <Cards style={styles.card} searchVal={this.props.searchone} />
      </div>
    );
  }
}

export default List;
