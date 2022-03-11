# Start the project

### Start backend on Port 5000:

```
cd backend
nodemon server
```

### Start frontend on Port 3000:
```
cd frontend
npm start
```

# Sample API Requests

### Example 1:
GET request - Return all tweets in database:
http://localhost:5000/api/v1/tweets

### Example 2:
POST request - Create a new tweet for user John Smith:
http://localhost:5000/api/v1/tweets/tweet

JSON:
```
{
	"user_id": "622a81b2fd0ca9ae354b32f4",
	"text": "Tweet Tweet Tweet",
	"date": "1646952449"	            -< Is this necessary to supply?
}
```
** It is not good practice to have the user_id in the body of the text instead of proper authentication.*

### Example 3:
PUT request - Update an existing review based on previous objectID if the user is the owner of the original:
http://localhost:5000/api/v1/tweets/tweet

JSON:
```
{
	"tweet_id": "622a7b63d82b89a379a0f84e",
	"user_id": "622a81b2fd0ca9ae354b32f4",
    "text": "This is the new tweet!"
}
```
** It is not good practice to have the user_id in the body of the text instead of proper authentication.*
