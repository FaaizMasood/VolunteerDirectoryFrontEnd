import React, { Component } from "react";
import { useNavigate, Link } from "react-router-dom";
import { withRouter } from "../othersFolder/withRouter";
import VolunteerService from "../services/VolunteerService";

class CreateVolunteerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveVolunteer = this.saveVolunteer.bind(this);
    this.cancelThis = this.cancelThis.bind(this);
  }

  changeFirstNameHandler = (e) => {
    this.setState({ firstName: e.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  // Save volunteer method that uses a special file to import withRouter for React V6
  saveVolunteer = (e) => {
    e.preventDefault();
    // get the data
    let volunteer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    //console.log("volunteer => " + JSON.stringify(volunteer));
    VolunteerService.createVolunteer(volunteer).then((res) => {
      this.props.navigate("/volunteers");
    });
  };
  cancelThis = (e) => {
    //console.log("Wowwww");
    this.props.navigate("/volunteers");
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center"> Add Volunteer</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveVolunteer}
                  >
                    Save
                  </button>

                  <Link
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    to="/volunteers"
                  >
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateVolunteerComponent);
