import React from 'react'
import './Dashboard.css'
import DashProfileBox from '../Athlete/DashProfileBox'
import NewsBox from './NewsBox'
import lebron from '../images/lebron.jpg'
import harden from '../images/harden.jpg'
import kawhi from '../images/kawhi.jpg'
import durant from '../images/durant.jpg'
import NewPost from './NewPost'
import Posts from './Posts'

class Dashboard extends React.Component{
    state = {
        user: {
            image: lebron,
            name: "Lebron James"
        },
        users: this.props.info.users,
        posts: this.props.info.posts
      }

    createNewPost = (post) => {
        let currPosts = this.state.posts
        currPosts.unshift({user: {name: 'Lebron James', image: lebron}, text: post, likes: 0, comments: []})
        this.setState({posts: currPosts})
    }

    render(){
        return <div className="dashboard">
            <div className="dashboardLeftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
                <NewsBox/>                
                </div>
            <div className="dashboardRightColumn">
                <NewPost createNewPost={this.createNewPost}/>
                <Posts posts={this.state.posts}/>
            </div>

        </div>
    }
}

export default Dashboard