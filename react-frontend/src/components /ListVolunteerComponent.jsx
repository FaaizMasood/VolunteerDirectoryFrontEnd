import { Component } from "react";
import VolunteerService from "../services/VolunteerService";
import { useNavigatem, Link } from "react-router-dom";
/**
 * Class: ListComponent
 * Date: 10 May 2022
 * Author: Faaiz Masood
 */
// export const withNavigation = (Component: Component) => {
//   return (props) => <Component {...props} navigate={useNavigate()} />
// }

class ListVolunteerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volunteers: [],
    };
    //this.addVolunteer = this.addVolunteer.bind(this)
  }

  // Best place to call the Rest API
  componentDidMount() {
    VolunteerService.getVolunteers().then((res) => {
      this.setState({ volunteers: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center"> Volunteer List</h2>
        <div className="row">
          <Link to="/add-volunteers">Add Volunteer</Link>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.volunteers.map((volunteer) => (
                <tr key={volunteer.id}>
                  <td> {volunteer.firstName}</td>
                  <td> {volunteer.lastName}</td>
                  <td> {volunteer.emailId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListVolunteerComponent;
