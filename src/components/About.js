import React, { PropTypes } from 'react';
import Myxin from './Myxin';
import Footer from './Footer';
import GithubAccount from '../GithubAccount/GithubAccount';
class About extends React.Component {
  render () {
      return(
        <div>
        <Myxin/>
        <GithubAccount />
        <Footer />
      </div>
      )
  }
}

export default About;
