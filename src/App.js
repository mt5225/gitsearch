import React, { Component } from "react";
import { connect } from "react-redux";
import UserInfo from "./components/UserInfo";
import { getUser } from "./actions";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsernanme.value;
    console.log(username);
    this.props.getUser(username); //dispatch the get user event to saga
    this.getUsernanme.value = "";
    this.getUsernanme.focus();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">Enter the github username</h2>
          <input
            type="text"
            placeholder="Enter Username Here"
            ref={input => (this.getUsernanme = input)}
          />
          <button className="button"> Submit</button>
        </form>
        {this.props.storeData.ifFetching ? <h3> loading ... </h3> : null}
        {this.props.storeData.ifError ? <h3> no such user ... </h3> : null}
        {Object.keys(this.props.storeData.userData).length > 0 ? (
          <UserInfo user={this.props.storeData.userData} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storeData: state
  };
};

const mapDispatchToProps = {
  getUser: getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
