import React, { Component } from 'react'

export default class tweetForm extends Component {
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

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
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
