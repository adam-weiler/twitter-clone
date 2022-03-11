import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/api/v1/tweets",
    headers: {
        "Content-type": "application/json"
    }
});