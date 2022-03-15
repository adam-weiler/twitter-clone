import axios from "axios";

//For testing:
// export default axios.create({
//     baseURL: "http://localhost:5000/api/v1/tweets",
//     headers: {
//         "Content-type": "application/json"
//     }
// });

//For production:
export default axios.create({
    baseURL: "https://dry-citadel-53300.herokuapp.com/api/v1/tweets",
    headers: {
        "Content-type": "application/json"
    }
});