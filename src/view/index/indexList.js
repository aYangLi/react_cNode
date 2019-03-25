import React, {Component} from 'react';
import {List,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import TxtTag from '../txtTag';
class IndexList extends Component {
  constructor (arg) {
    super(arg);
    let {tab} = this.props
    this.state = {
      page:1,
    }
    this.getData(this.props.tab);
  }
  shouldComponentUpdate (nextProps) {
    if (this.props.tab !== nextProps.tab) {
      this.getData(nextProps.tab);
      return false;
    }
    return true;
  }
  getData (tab) {
    this.props.dispatch((dispatch) => {
      dispatch({
        type:'LIST_UPDATA',
      })
      axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`)
      .then( (res) => {
        console.log(res);
        dispatch({
          type:'LIST_UPDATA_SUCC',
          data:res.data,
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type:'LIST_UPDATA_REEOR',
          data:error,
        })
      })
    })
  }
  render () {
    console.log(this.props);
    let {loading,data} = this.props;
    return <List
      loading = {loading}
      dataSource = {data}
      renderItem = { item => (<List.Item
        actions={['回复：' + item.reply_count,'访问' + item.visit_count]}
        key={item.id}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.author.avatar_url}/>}
          title = {<div>
            <TxtTag data={item}/>
            <Link to={'/details/'+item.id}>{item.title}</Link>
          </div>}
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

export default connect(state => state.list)(IndexList)