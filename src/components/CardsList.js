 import React,{Component} from 'react';
class CardsList extends Component{
  getStyles(){
    return{
      right:{
        backgroundColor: '#777',
        fontSize: '15px',
        width:'60%',
        height:'100px',
        float:'left',
        border:"1px solid #dabd55",
        borderRadius:'10px'
      },
      left:{
        width:'15%',
        height:'100px',
        backgroundColor:'teal',
        float:'left',
        border:"1px solid #dabd55",
        fontSize:'5rem',
        textAlign:'center',
        lineHeight:'6rem',
        borderRadius:'20px',
        color:'pink',
        marginRight:'10px',
        boxShadow:'5px 5px 5px #000',


      },
      root:{
        width:'80%',
        height:'110px',
        marginLeft:'20%',
          minWidth:'20%'
      },
      p:{
        fontSize:'20px',
        color:'#345433',
        fontWeight:'bold'
      }
    }
  }
  render(){
    const styles=this.getStyles();
    return(
      <div style={styles.root}>
        <div style={styles.left}>{this.props.index}</div>
        <div style={styles.right}>
          <p style={styles.p}>{this.props.title}</p>
          <h5>{this.props.data}</h5>
        </div>
      </div>
    )
  }
}
CardsList.propTypes = {
  title:React.PropTypes.string.isRequired,
  data:React.PropTypes.string.isRequired,

};
CardsList.defaultProps = {
  title:"请输入标题",
  index:1,
  data:"2016.8.1"
};
export default CardsList;
