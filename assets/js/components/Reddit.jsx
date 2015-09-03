import React, { Component, PropTypes } from 'react';

export default class Reddit extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.selectedReddit}</h3>
        <ul>
          {this.props.posts.map((post)=> <li><img src={post.thumbnail}/>{post.title}</li>   )}
        </ul>
      </div>
    );
  }
}

Reddit.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  // didInvalidate: false
  // isFetching: false
  // items: Array[25]
  // lastUpdated: 1441302646176
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
