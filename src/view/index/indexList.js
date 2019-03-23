import React, {Component} from 'react';
import {List,Avatar} from 'antd';
import data from './data'
import {Link} from 'react-router-dom';

export default class IndexList extends Component {
  render () {
    return <List
      loading = {false}
      dataSource = {data.data}
      renderItem = { item => (<List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.author.avatar_url}/>}
          title = {<Link to={'/details/'+item.id}>{item.title}</Link>}
          description = {<p><Link to={`/user/${item.author.loginname}`}>
              {item.author.loginname}
              发表于：{item.create_at.split('T')[0]}
            </Link>
          </p>}
        />
      </List.Item>)}
    >
    </List>; 
  }
}