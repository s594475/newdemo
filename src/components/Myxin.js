import React, { Component } from 'react';

class Myxin extends Component {
  getStyles(){
    return{
      big:{
        width:'100%',
        height:200,
        backgroundColor:'#00bcd4'
      },
      h1:{
        margin:0,
        color:'#fff',
        fontSize:100,
      
        textAlign:'center'
      }

      }
}
  render(){
    const styles=this.getStyles();
    return (
      <div style={styles.big}>
        <h1 style={styles.h1}>My github</h1>
      </div>

    );
  }
}

export default Myxin;
