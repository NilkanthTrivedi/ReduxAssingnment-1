import axios from "axios";

export async function AxioRequest(url, method, headers, params) {
    return params
        ? axios({
              url: url,
              method: method,
              headers: headers,
              data: params,
              timeout: 1000,
          })
        : axios({
              url: url,
              method: method,
              headers: headers,
              data: {},
              timeout: 1000,
          });
}

const GetApiDetails = () => {
    const headers = {
        "content-type": "application/json",
    };
    return AxioRequest("http://localhost:3000/details", "GET", headers, {});
};

// For POST API

const PostApiDetails = (data) => {
    return axios.post("http://localhost:3000/details", data);
};

const DeleteApiDetails = (id) => {
    const headers = {
        "content-type": "application/json",
    };
    return AxioRequest(
        "http://localhost:3000/details/" + id,
        "DELETE",
        headers,
        {}
    );
};

export { GetApiDetails, PostApiDetails, DeleteApiDetails };
