import { Component } from 'react'
import VolunteerService from '../services/VolunteerService'
require('react-dom')
window.React2 = require('react')
console.log(window.React1 === window.React2)
class ListVolunteerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      volunteers: [],
    }
  }
  // Best place to call the Rest API
  componentDidMount() {
    VolunteerService.getVolunteers().then((res) => {
      this.setState({ volunteers: res.data })
    })
  }
  render() {
    return (
      <div>
        <h2 className="text-center"> Volunteer List</h2>
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
    )
  }
}

export default ListVolunteerComponent
