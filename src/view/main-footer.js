import React, { Component } from 'react';
import {Layout} from 'antd';
export default class MainFooter extends Component {
  render() {
    return <Layout.Footer style={{
      textAlign:'center'
    }}>
       这里写点什么备案啥的。本身就是学习的东西，瞎写点东西，版权归我所有！
    </Layout.Footer>;
  }
}