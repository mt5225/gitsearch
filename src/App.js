import React, { Component } from "react";
import { connect } from "react-redux";
import UserInfo from "./components/UserInfo";
import { fetchSaga } from "./actions/fetchActions";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsernanme.value;
    console.log(username);
    this.props.dispatch(fetchSaga(username));
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

export default connect(mapStateToProps)(App);
