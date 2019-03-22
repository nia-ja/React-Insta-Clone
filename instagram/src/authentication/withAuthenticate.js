import React from "react";

const withAuthenticate = PostsPage => Login =>
    class extends React.Component {
        constructor(props) {
              super(props);
              this.state = {
                loggedIn: false,
                username: '',
                password: ''
              }
        }
        componentDidMount() {
            const loginUser = localStorage.getItem("user");
            const loginPassword = localStorage.getItem("password");
            if (!localStorage.getItem('user')) {
                this.setState({ loggedIn: false, username: '', password: '' });
              } else {
                this.setState({ loggedIn: true, username: loginUser, password: loginPassword});
            }
        }
        onClick = (e) => {
          localStorage.removeItem("user");
          localStorage.removeItem("password");
          window.location.reload();
        }

        render() {
            if (this.state.loggedIn) return <PostsPage user={this.state.username} onClick={this.onClick} />;
            return <Login />;
        }
    }
  
  export default withAuthenticate;