import React,{ Component }from 'react';
import Drawer from './Drawer.js'
import IconButton from 'material-ui/IconButton';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
class Hamburger extends Component{
  handelOpen(){
    this.refs.navbar.handleToggle();
  }
  render(){
    let styles={
      root:{
        backgroundColor:'#00BCD4',
      },
      icon:{
        marginTop:'10px',
        marginLeft:'10px',
        width: '52px',
        height: '52px',
      },
      svg: {
        width: '32px',
        height: '32px',
      },
      div:{
        position:'absolute',

      }
    }
    return(
    <div style={styles.div}>
      <IconButton tooltip="点我~~~" style={styles.icon} iconStyle={styles.svg} onClick={this.handelOpen.bind(this)}>
        <MenuButton  color='#fff' hoverColor='#004D40'/>
      </IconButton>
      <Drawer ref='navbar'/>
    </div>
  );
  }
}


export default Hamburger;
