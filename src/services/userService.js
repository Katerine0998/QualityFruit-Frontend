import axios from 'axios'

const api = 'http://localhost:3000/getUsers'

const getAllUsers = async () => {
    const resp = await axios.get(api)
    return resp.data

}

export {getAllUsers}