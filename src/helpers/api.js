class API {
    constructor(token = null) {
        this.token = token;
    }

    header(token) {
        let headers = {
            "Content-Type": "application/json"
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
        return headers
    }

    async post(URI, data) {
        try {
            console.log("API POST", URI, { body: JSON.stringify(data) });
            let headers = this.header(this.token);
            let result = await fetch(URI, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: headers,
                body: JSON.stringify(data),
            })
            // console.log(result);
            if (!result.ok) {
                throw {
                    "ok": result.ok,
                    "status": result.status,
                    "statusText": result.statusText,
                    "type": result.type,
                    "url": result.url
                };
            }
            return result.json();
        } catch (error) {
            // console.log("errapi",error)
            throw error
        }
    }

    async get(URI, data = null) {
        try {
            let query = "";
            if (data) {
                query = Object.keys(data)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
                    .join('&');
            }

            console.log("API GET", URI + "?" + query);

            let headers = this.header(this.token);
            let result = await fetch(URI + "?" + query, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: headers,
            })
            console.log("GET RESULT", result)
            if (!result.ok) {
                throw {
                    "ok": result.ok,
                    "status": result.status,
                    "statusText": result.statusText,
                    "type": result.type,
                    "url": result.url
                };
            }
            return result.json();
        } catch (error) {
            throw error
        }
    }

    async put(URI, data) {
        try {
            let headers = this.header(this.token);
            console.log("API PUT", URI, { body: JSON.stringify(data) });
            let result = await fetch(URI, {
                method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: headers,
                body: JSON.stringify(data),
            })
            if (!result.ok) {
                throw {
                    "ok": result.ok,
                    "status": result.status,
                    "statusText": result.statusText,
                    "type": result.type,
                    "url": result.url
                };
            }
            return result.json();
        } catch (error) {
            throw error
        }
    }
    async delete(URI, data) {
        try {
            let headers = this.header(this.token);
            console.log("API DELETE", URI, { body: JSON.stringify(data) });
            let result = await fetch(URI, {
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                headers: headers,
                body: JSON.stringify(data),
            })
            // console.log("result result", result);
            if (!result.ok) {
                throw {
                    "ok": result.ok,
                    "status": result.status,
                    "statusText": result.statusText,
                    "type": result.type,
                    "url": result.url
                };
            }
            return result.json();
        } catch (error) {
            throw error
        }
    }
}
export default API;