import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){this.setState({open: !this.state.open})};

  handleClose(){this.setState({open: false})};

  render() {
    let styles={
      title:{
        color:'#fff',
        fontSize:'32px',
        lineHeight:'64px',
        textAlign:'center',
        backgroundColor:'#00BCD4',
        marginBottom:'20px',
        margin:'0'
      },
      menu:{
        textAlign:'center'
      }
    }
    return (
      <div>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <p style={styles.title}>好多视频网</p>
        <div style={styles.menu}>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>首页</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>日志</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>信息</MenuItem>  
          </div>
        </Drawer>
      </div>
    );
  }
}
