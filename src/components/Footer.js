import React, { Component } from 'react';
import pgypic from './images/pgy.jpg'
class Footer extends Component {
  getStyles(){
    return{
      big:{
        width:'100%',
        height:300,
        backgroundColor:'#212121',

      },
      psty:{
        color:'#fff',
        fontSize:"20px",
        textAlign:'center'
      },
      pgy:{
        width:'40%',
        marginLeft:'40%',
        maxWidth:'200px'
      }
      }
  }
  render(){
      const styles=this.getStyles();
    return (
      <div style={styles.big}>
        <p style={styles.psty}>更多内容和评论,欢迎添加 happysong 的微信: s594475</p>
        <img style={styles.pgy} src={pgypic} />
      </div>
    );
  }
}

export default Footer;
