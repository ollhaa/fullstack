import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const erasePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
    
}

//const update = (id, newObject) => {
//  return axios.put(`${baseUrl}/${id}`, newObject)
//}

const personService = {getAll, create, erasePerson}

export default personService