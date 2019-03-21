import React from "react";

const withAuthenticate = PostsPage => Login =>
    class extends React.Component {
        constructor(props) {
              super(props);
              this.state = {
                loggedIn: false
              }
        }
        componentDidMount() {
            const isLogin = localStorage.getItem("username");
            if (isLogin === 'true') {
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        }

        render() {
            if (this.state.loggedIn) return <PostsPage />;
            return <Login />;
      
        }
    }
  
  export default withAuthenticate;