import React, { Component } from 'react';
import Auto from './Auto';


class Header extends Component {
  getStyles(){
    return{
      big:{
        width:'100%',
        height:300,
        backgroundColor:'#00bcd4'
      },
      h1:{
        margin:0,
        color:'#fff',
        fontSize:100,
        position:'absolute',
    
        left:'45%'
      }

      }
}
  render(){
    const styles=this.getStyles();
    return (
      <div style={styles.big}>
        <h1 style={styles.h1}>ALL</h1>
        <Auto handelSearch={this.props.change}/>
      </div>

    );
  }
}

export default Header;
