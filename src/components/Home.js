import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100vw',
        height:'100vh',
        background: 'url("http://pic.58pic.com/58pic/11/10/80/70558PICvpu.jpg") no-repeat  center center/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        paddingTop:'15%',
        margin:'0',
        fontSize:150
      }
    }
    return(
      <div style={styles.root}>
             <h1 style={styles.title}>欢迎光临</h1>
      </div>
    )
  }
}

export default Home;
