import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const api_key = '?api_key=f907a609167ac048596925a71f8fd4c4';

export function postData(endpoint, data) {
    const api = url + endpoint.dataOf + api_key + endpoint.lang + endpoint.query;
    console.log(url + endpoint.dataOf + api_key + endpoint.lang + endpoint.query);
    return axios.post(api, data);
}

export function putData(endpoint, data) {
    // console.log(endpoint, data);
    const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(url + endpoint, requestOptions).then(response => response.json());
    // return axios.put(url + endpoint, data);
}

export function getData(endpoint) {
    const api = url + endpoint.dataOf + '/' + endpoint.type + api_key + '&' + endpoint.lang;
    console.log(url + endpoint.dataOf + '/' + endpoint.type + api_key + '&' + endpoint.lang);
    return axios.get(api);
    // return axios.get(url + endpoint);
}

export function deleteData(endpoint) {
    return fetch(url + endpoint, { method: 'DELETE' }).then(response => response.json());
    // return axios.delete(url + endpoint);
}