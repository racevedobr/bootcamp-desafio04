import React, { Component } from 'react';
import './styles.css'

import Comment from '../Comment/index';


class Post extends Component {
  render() {
    const {data} = this.props;
    return(

      <>
        <section className="post">
          <div className="question">
            <div className="question-box">
              <img class="avatar-mask" src ={data.author.avatar} alt={data.author.name} />
              <div class="question-info">
                <h1>{data.author.name}</h1>
                <span>{data.date}</span>
              </div>
            </div>
            <article>
              <p>{data.content}</p>
            </article>
            <div className="division" />
          </div>

          { data.comments.map(comment => <Comment key={comment.id} data={comment} />)}

        </section>
      </>
    )
  }
}

export default Post;