import express from "express";
import TweetsCtrl from "./tweets.controller.js";
// import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();    // The different routes ppl can go to.

// router.route("/").get((req, res) => res.send("Hello world!"));  // Our demo route. Going to root responds with HW.
router.route("/").get(TweetsCtrl.apiGetTweets);   // Going to root returns this method.
// router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById); // Get a specific restaurant by using a specific ID, and all the reviews.
// router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines);    // Get a list of all cuisines.

router
    .route("/tweet")
    .post(TweetsCtrl.apiPostTweet)    // If POST, use apiPostTweet method.
    // .put(ReviewsCtrl.apiUpdateReview)   // If PUT, use apiUpdateReview method.
    // .delete(ReviewsCtrl.apiDeleteReview)    // If DELETE, use apiDeleteReview method.

export default router;