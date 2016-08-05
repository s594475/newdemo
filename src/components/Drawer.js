import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
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
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
                <Link to="/" style={styles.link} activeStyle={{color:'red'}} onlyActiveOnIndex={true}>首页</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
                <Link to="blog" style={styles.link} activeStyle={{color:'red'}}>博客</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
                <Link to="about" style={styles.link} activeStyle={{color:'red'}}>关于</Link>
            </MenuItem>
            </div>
        </Drawer>
      </div>
    );
  }
}
