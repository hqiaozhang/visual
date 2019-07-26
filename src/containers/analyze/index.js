import React, {Component} from 'react';
import {connect} from 'react-redux';
import Charts from './charts';
import {
  Header,
  LeftSide,
  Footer,
  SideRightMenu
} from './panel';
import './index.scss';

const mapStateToProps = ({allSeting}) => ({
  wrapperBg: allSeting.wrapperBg
});


class Analyze extends Component {
  state = {
  }
  componentWillMount() {

  }

  componentDidMount() {
    const data = [];
    // this.showChart(data);
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <LeftSide />
        <SideRightMenu />
        <div className={`vis-network ${this.props.wrapperBg}`}>
          <Charts />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Analyze);
