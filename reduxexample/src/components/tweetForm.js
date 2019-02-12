import React, { Component } from 'react'
import PropTypes from 'prop-types';
import{connect} from 'react-redux';
import { cretaePosts } from '../actions/postActions';

class TweetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };

        this.onchange = this.onchange.bind(this);
        this.onsubmite = this.onsubmite.bind(this);
    }

    onchange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onsubmite(e){
        e.preventDefault();

        const post = {
            title:this.state.title,
            body:this.state.body
        };

        this.props.cretaePosts(post);
    }


    render() {
        return (

            <div>
                <h1>Novo Post</h1>
                <form onSubmit={this.onsubmite}>
                    <div>
                        <input name="title"
                            onChange={this.onchange}
                            type="text"
                            value={this.state.author}
                            placeholder="Title" />
                    </div>
                    <br />
                    <div>
                        <textarea name="body"
                            onChange={this.onchange}
                            value={this.state.content}
                            placeholder="Diga algo" />
                    </div>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

TweetForm.propTypes={
    cretaePosts:PropTypes.func.isRequired
}

export default connect(null,{cretaePosts})(TweetForm);