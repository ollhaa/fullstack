import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const erasePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
    
}

//const update = (id, newObject) => {
//  return axios.put(`${baseUrl}/${id}`, newObject)
//}

const personService = {getAll, create, erasePerson}

export default personService