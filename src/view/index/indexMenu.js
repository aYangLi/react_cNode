import React, {Component} from 'react';
import {Menu,} from 'antd';
import {Link, withRouter} from 'react-router-dom';

import tab from '../tab';


class IndexMenu extends Component {
  constructor(props) {
    super(props);
    let now = this.getNow(this.props.location);
    this.state = {
      now,
    }
  }
  getNow (location) {
    // debugger;
    const now = location.pathname.split('/');
    return now[2];
  };
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    let now = this.getNow(nextProps.location);
    if (now !== this.state.now) {
      this.setState({
        now,
      });
      return false;
    }
    return  true;
  }

  render () {
    let {mode, id} = this.props; 
    return (<Menu id={id} mode={mode} selectedKeys={[this.state.now]}>
      {tab.map( item => {
        if (!item.isIndex)  {
          return false;
        }
        return (<Menu.Item key={item.tab}>
          <Link to={'/index/'+item.tab}>{item.txt}</Link>
        </Menu.Item>)
      })}
    </Menu>)
  }
}

export default withRouter( (props) => {
  let {mode, id, location} = props;
  return <IndexMenu id={id} mode={mode} location={location}/>
})