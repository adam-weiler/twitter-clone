import http from "../http-common.js";   // All URLs start with the base "http://localhost:5000/api/v1/tweets".

class TweetDataService {   // Functions that are going to make API calls and return the information.
    getAll(page = 0) {  // Default page of 0.
        return http.get(`?page=${page}`);
    }

    get(id) {
        return http.get(`/status/${id}`);
    }

    find(query, by = "name", page = 0) {   // query is userInput. by is either "name", "zipcode", or "cuisine".
        return http.get(`?${by}=${query}&page=${page}`);
    }

    createTweet(data) {
        return http.post("/tweet", data);
    }

    updateTweet(data) {
        return http.put("/tweet", data);
    }

    deleteTweet(id, userId) {
        return http.delete(`/tweet?id=${id}`, {data:{user_id: userId}});
    }

    getCuisines(id) {
        return http.get(`/cuisines`);
    }

}

export default new TweetDataService();