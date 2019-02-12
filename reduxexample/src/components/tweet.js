import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';


class Tweet extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

componentWillReceiveProps(nextProps){
  if(nextProps.newPost){
    this.props.posts.unshift(nextProps.newPost);
  }
}

  render() {
    const tweetsItens = this.props.posts.map(tweet => (
      <div key={tweet.id}>
        <h3>{tweet.title}</h3>
        <p>{tweet.body}</p>
      </div>

    ));
    return (
      <div>
        <h1>Tweet</h1>
        {tweetsItens}
      </div>
    )
  }
};

Tweet.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost:PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost:state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Tweet);
