import React from "react";
import {connect} from "react-redux";
import {signIn, signOut, userLogin,userLogout} from "../actions";     //import 并在最下方

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "470335105512-20s79ta58s8nr2c6ideqfbnncg9neaql.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          //3.该部分初始化，切获取信息
          const profile = this.auth.currentUser.get().getBasicProfile()
          if (profile) {
            this.googeUserInfo(profile);
          }

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => {   //2.登录时，调用此方法获取用户数据
    this.auth.signIn().then((data) => {
      this.googeUserInfo(data.getBasicProfile());
    });


  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.userLogout();//调用logout方法
      this.props.signOut();
    }
  };

  authButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={() => {
            this.onSignOutClick();
          }}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.onSignInClick();
          }}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
// 获取用户数据
  googeUserInfo(profile) {
    if (!profile) {
      return;
    }
    const userInfo = {
      userId: profile.getId(),
      name: profile.getName(),
      image: profile.getImageUrl(),
      email: profile.getEmail(),
    }
    this.props.userLogin(userInfo);
  }


  render() {
    return <h1>{this.authButton()}</h1>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut,userLogin,userLogout })(GoogleAuth);
