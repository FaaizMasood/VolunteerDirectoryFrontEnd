import axios from 'axios'

const VOLUNTEER_API_BASE_URL = 'http://localhost:8080/api/v1/volunteers'

class VolunteerService {
  // Get Volunteers
  getVolunteers() {
    return axios.get(VOLUNTEER_API_BASE_URL)
  }
}

export default new VolunteerService()
