import React, {Component} from 'react';
import { Avatar ,Row, Col} from 'antd';
import UserList from './userList';
import {connect} from "react-redux";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    let id = this.props.match.params.id;
    this.getData(id);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    let id = this.props.match.params.id;
    let nextId = nextProps.match.params.id;
    if (id !== nextId) {
      this.getData(nextId);
      return false;
    }
    return true;
  }

  getData (id) {
    this.props.dispatch( (dispatch) => {
      dispatch({
        type:'USER_UPDATA'
      });
      axios.get(`https://cnodejs.org/api/v1/user/${id}`)
      .then( (res) => {
        dispatch({
          type: 'USER_UPDATA_SUCC',
          data: res.data,
        });
      })
      .catch( (error) => {
        dispatch({
          type:'USER_UPDATA_ERROR',
        });
      })
    })
  }
  render() {
    let {data,loading} = this.props;
    let {avatar_url,create_at,score,loginname,recent_topics, recent_replies, } = data;
    return (<div className="wrap">
      <Avatar 
        src={avatar_url}
        className='userAvatar'
      />
      <Row className='userInfo'>
        <Col md={8}>
          用户名：<a href="#/">{loginname}</a>
        </Col>
        <Col md={8}>
          积分：<a href="#/">{score}</a>
        </Col>
        <Col md={8}>
          注册时间：<a href='#/'>{create_at.split('T')[0]}</a>
        </Col>
      </Row>
      <UserList
        loadding={loading}
        title= '最近创建的话题'
        data = {recent_topics}
      />
      <UserList
        loadding={loading}
        title= '最近回复的话题'
        data = {recent_replies}
      />
    </div>)
  }
}

export default connect(state => (state.user))(User);