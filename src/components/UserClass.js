import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: {
                name: '',
                location: '',
                bio: '',
                avatar_url: ''
            }
        }

    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/arman-ali-wtc');
        const json = await data.json();
        this.setState({ userData: json })
    }
    render() {

        const { name, location, bio, avatar_url } = this.state.userData;
        return (
            <div className='profile-container'>
                <img src={avatar_url} alt='my profile' className='profile_img'/>
                <div className='profile-details'>
                <h2>Hi, I am {name}</h2>
                <h3>I am a {bio}</h3>
                <h4>I am From {location}</h4>
                </div>
            </div>
        )
    }
}
