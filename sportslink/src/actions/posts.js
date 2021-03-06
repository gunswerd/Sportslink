//postList is the "this" object, which is the "this" in a React component
export const getPosts = (dashboard) => {
    const url = '/api/posts';
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                window.location.reload();
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            dashboard.setState({ posts: json});
        })
        .catch(error => {
            console.log(error);
        });

}
//creates a new post
export const newPost = (post, dashboard) => {
    const url = '/api/posts';
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(post),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                window.location.reload();
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            dashboard.setState({hideLoading: true})
            getPosts(dashboard)
        })
        .catch(error => {
            console.log(error);
        });
}

//creates a new comment
export const newComment = (postCard, postID, dashboard) => {
    const url = '/api/posts/' + postID;
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(postCard),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                window.location.reload();
            }
        })
        .then(json => {
            getPosts(dashboard)
        })
        .catch(error => {
            console.log(error);
        });
}

export const upvotePost = (attributes, postID, dashboard) => {
    const url = '/api/likes/' + postID;
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify(attributes),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                window.location.reload();
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            getPosts(dashboard)
        })
        .catch(error => {
            console.log(error);
        });
}

export const downvotePost = (attributes, postID, dashboard) => {
    const url = '/api/likes/' + postID;
    const request = new Request(url, {
        method: "DELETE",
        body: JSON.stringify(attributes),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                window.location.reload();
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            getPosts(dashboard)
        })
        .catch(error => {
            console.log(error);
        });

}
//adds a like???
export const editPostInfo = (attributes, postID, dashboard) => {
    const url = '/api/posts/' + postID;
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(attributes),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                window.location.reload();
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            getPosts(dashboard)
        })
        .catch(error => {
            console.log(error);
        });

}
//deletes a post by post id
export const deletePost = (postID, dashboard) => {
    const url = "/api/posts/" + postID
    const request = new Request(url, {
        method: "DELETE",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            window.location.reload();
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        getPosts(dashboard)
        dashboard.setState({hideLoading: true})
    })
}


//Deletes all posts by the username
export const deletePostUsername = (user, dashboard) => {
    const url = "/api/deletePosts/" + user.username
    const request = new Request(url, {
        method: "DELETE",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json();
        } else {
            window.location.reload();
        }
    })
    .then(json => {
        // the resolved promise with the JSON body
        getPosts(dashboard)
    })
}
//adds a comment