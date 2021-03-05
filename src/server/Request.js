import axios from 'axios';
class Request {
    constructor(method, uri, data, callback){
        this.callback = callback;
        this.params = {
            method: method,
            url: uri,
            data: data,
        }
    }
        start(){
            // GET request for remote image in node.js
            axios(this.params)
                .then((response) => {
                    this.callback(response);
                })
                .catch((error) => {
                    this.callback(error);
              });
        }
}
export default Request;