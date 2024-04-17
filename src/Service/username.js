import axios from 'axios'

const URL = "https://api.github.com/users/"

export const getprofile = (userName) => {
    return axios.get(URL + userName)
}