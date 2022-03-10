import TweetsDAO from "../dao/tweetsDAO.js";

export default class TweetsController {
    static async apiGetTweets (req, res, next) {   // User may or may not be passing variables in with the URL.
        const tweetsPerPage = req.query.resturantsPerPage ? parseInt(req.query.tweetsPerPage, 10) : 20  // Checks if tweetsPerPage is being passed in and then converts to an int. Otherwise default is 20 tweets per page.
        const page = req.query.page ? parseInt(req.query.page, 10) : 0  // Checks if page is being passed in and then converts to an int. Otherwise default is page 0.

        let filters = {};   // Filters is set to default.
        if (req.query.cuisine) {    // If user entered cuisine as query, filters is set to cuisine.
            filters.cuisine = req.query.cuisine
        // } else if (req.query.zipcode) {    // If user entered zipcode as query, filters is set to zipcode.
        //     filters.zipcode = req.query.zipcode
        // } else if (req.query.name) {    // If user entered name as query, filters is set to name.
        //     filters.name = req.query.name
        }

        const { tweetsList, totalNumTweets } = await TweetsDAO.getTweets({  // Pass in filters, page, & tweetsPerPage. Returns the tweetsList & totalNumTweets.
            filters,
            page,
            tweetsPerPage,
        });

        let response = {    // Return the json response with all this data.
            tweets: tweetsList,
            page: page,
            filters: filters,
            entries_per_page: tweetsPerPage,
            total_results: totalNumTweets,
        }
        res.json(response);
    }

    static async apiPostTweet(req, res, next) {
        try {   // Getting information from the body of the POST request.

            // const userInfo = {
            //     name: req.body.name,
            //     _id: req.body.user_id
            // }

            const tweet = req.body.text;
            const userInfo = {
                _id: req.body.user_id
            }

            const date = new Date()

            const TweetResponse = await TweetsDAO.addTweet(
                userInfo,
                tweet,
                date,
            )
            res.json({ status: "success" }); // Tweet entered into database.
        } catch (e) {
            res.status(500).json({ error: e.message }); // Or returns an error.
        }
    }


//user_id, date, text


    // static async apiGetRestaurantById(req, res, next) {
    //     try {
    //         let id = req.params.id || {}    // Checks for the ID parameter in the URL.
    //         let restaurant = await TweetsDAO.getRestaurantByID(id);
    //         if (!restaurant) {  // If no restaurant is found, return an error.
    //             res.status(404).json({ error: "Not found" });
    //             return;
    //         }
    //         res.json(restaurant);   // Or else return the restaurant.
    //     } catch (e) {
    //         console.log(`api, ${e}`);
    //         res.status(500).json({ error: e });
    //     }
    // }

    // static async apiGetRestaurantCuisines(req, res, next) {
    //     try {
    //         let cuisines = await TweetsDAO.getCuisines();  // Doesn't require any parameters.
    //         res.json(cuisines);
    //     } catch (e) {   // Either gets all cuisines or returns an error.
    //         console.log(`api, ${e}`);
    //         res.status(500).json({ error: e });
    //     }
    // }

}