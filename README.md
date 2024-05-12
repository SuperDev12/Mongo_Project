# PostIt
PostIt is a fully-featured social media web application, built with the MERN stack.  

## Features
- Create, read, update and delete posts
- Like and unlike posts
- Create, reply to, read, update and delete nested comments
- Markdown for posts and comments
- Sign up and login using JWT for authentication
- Private message users in real-time using socket.io
- View profiles of users and browse through their posts, liked posts and comments
- Infinite scrolling 
- Sort posts by attributes such as like count, comment count and date created
- Profanity filtering and posting/commenting cooldowns
- Update bio which can be viewed by other users
- Search for posts by their title
- View the users who liked a particular post
- Fully responsive layout

## Installation and usage
1) Clone this repository  
```
git clone https://github.com/ihtasham42/social-media-app.git
```
2) Install dependencies  
```
cd social-media-app  
npm install
cd client
npm install
```
3) Create .env in root directory
```
cd ..
touch .env
```
4) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.
```
MONGO_URI=<YOUR_MONGO_URI> 
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=4000
```
5) Run the server
```
npm run server
```
6) Start a new terminal and run react's development server
```
cd social-media-app
cd client
npm start
```

## Screenshots
### Explore view
<img width="1285" alt="Screenshot 2024-05-12 at 14 18 36" src="https://github.com/SuperDev12/Mongo_Project/assets/94687428/546c49ed-3491-4de1-a63a-2d9d9508d45d">

### Post view
![image](https://github.com/SuperDev12/Mongo_Project/assets/94687428/bc54f086-69aa-4680-b2f1-61e0c8097efd)

### Profile view
![image](https://github.com/SuperDev12/Mongo_Project/assets/94687428/16430619-2a2b-460d-ab66-3a09c6c7c3f1)

### Real-time private messenger
![image](https://github.com/SuperDev12/Mongo_Project/assets/94687428/3e6bf9c4-8ca3-46f9-ac13-b5df16f2bfa7)

