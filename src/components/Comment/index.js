import React, { Component } from 'react';
import './styles.css';

class Comment extends Component {
  render(){
    const {data} = this.props;

    return(
      <>
        <div className="comment" key={data.id}>
          <img className="avatar-mask" src={data.author.avatar} alt={data.author.name} />
          <article>
            <p><strong>{data.author.name}: </strong> {data.content}</p>
          </article>
        </div>
      </>
    )
  }
}
export default Comment;