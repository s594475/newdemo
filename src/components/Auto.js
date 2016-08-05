import React from 'react';
import TextField from 'material-ui/TextField';
import Searchico from 'material-ui/svg-icons/action/search';

 class Auto extends React.Component {
   handelOpen(){
    this.refs.navbar.handleToggle();
  }
  handelInput(e){
    let x = e.target.value;
    this.props.handelSearch(x);
  }
  render() {
    let styles={
      searchBtn:{
        color:'#fff',
      },
      searcha:{

        textAlign:'center',

      },
      text:{
        width:'60%',
        marginTop:'15%',
        maxWidth:'600px',

      },
      underlineStyle:{
        borderColor:'#fff'
      },
      hintStyle:{
        color:'rgba(255,255,255,0.8)',
        fontSize:'20px'
      },
      inputStyle:{
        color:'#fff',
        fontSize:'20px'
      }

    }
    return (
      <div style={styles.searcha} >
       <Searchico style={styles.searchBtn}/>
         <TextField
           hintText="搜索"
           underlineFocusStyle={styles.underlineStyle}
           hintStyle={styles.hintStyle}
           inputStyle={styles.inputStyle}
           style={styles.text}
           onChange={this.handelInput.bind(this)}/>

      </div>
    );
  }
}

export default Auto;
