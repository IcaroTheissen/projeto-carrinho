import axios from 'axios'

//$ npx json-server db.json para iniciar a API
export const api = axios.create({
    baseURL: "http://localhost:3000/"
})