import React, { Component } from 'react'

class tweet extends Component {
  constructor(props){
      super(props);

      this.state ={
          tweets:[]
      } 
  }
  
    componentWillMount(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res =>  res.json())
      .then(data => this.setState({tweets:data}));
  }
  
    render() {
        const tweetsItens = this.state.tweets.map(tweet=>(
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

export default tweet;
