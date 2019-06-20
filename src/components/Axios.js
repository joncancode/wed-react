import React, { Component } from 'react'
import axios from 'axios'

export default class Axios extends Component {
    state = {
        posts: []
    }

    componentWillMount(){
        axios.get('https://swapi.co/api/people/')
            .then(res => {
                this.setState({
                    posts: res.data.results
                })
            })
    }

    render() {
        const { posts } = this.state
        return posts.map((item) => (
            <p key={item.name}>{item.name}</p>
        ))
    }
}
