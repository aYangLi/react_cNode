import React, {Component} from 'react';
import {Card} from 'antd';

class PublicCard extends Component {
  render(h) {
    let {data} =this.props;
    return (<div className="wrap">
      {data.map( (item,index) => (
         <Card
         title={item.title}
         loading={false}
         type='inner'
         key={index}
       >
         <div
           dangerouslySetInnerHTML={{
             __html: data[0].content
           }}
         >
         </div>
       </Card>
      ))}
    </div>)
  }
}

export default PublicCard; 