import React, {Component} from 'react';
import { Avatar ,Row, Col} from 'antd';
import data from './data';
import UserList from './userList';

class User extends Component {
  render(h) {
    let {avatar_url,create_at,score,loginname,recent_topics, recent_replies} = data.data
    return (<div className="wrap">
      <Avatar 
        src={avatar_url}
        className='userAvatar'
      />
      <Row className='userInfo'>
        <Col md={8}>
          用户名：<a>{loginname}</a>
        </Col>
        <Col md={8}>
          积分：<a>{score}</a>
        </Col>
        <Col md={8}>
          注册时间：<a>{create_at.split('T')[0]}</a>
        </Col>
      </Row>
      <UserList
        loadding={false}
        title= '最近创建的话题'
        data = {recent_topics}
      />
      <UserList
        loadding={false}
        title= '最近回复的话题'
        data = {recent_replies}
      />
    </div>)
  }
}

export default User; 