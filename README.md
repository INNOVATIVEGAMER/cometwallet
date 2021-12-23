# Commetwallet

## About

**Caution : If you reload the page the context will loose its state, so the app will force you to relogin. We can solve this issue easily but, to show the working of Context API I have chosen not to change this.**

This app include all the features mentioned in the assessment.

1. Basic Dashboard UI
2. Graph rendered using Chart.js
3. Table with pagination
4. CRUD operations
5. Usage of Context API to store User Info at global app level

- For the graph and table data I have used a publicaly available API. This API gives details about the cryptocurrencies and their values. [Crpto API](https://rapidapi.com/apidojo/api/investing-cryptocurrency-markets/)

- I have used the my on created node API for CRUD operations [Node API Link](https://ig-task-app-backend.herokuapp.com)
- This API also has POSTMAN collection which I have implemented back. [Postman Collection](https://go.postman.co/workspace/My-Workspace~68a518dc-c0a1-466d-80d1-d5ce7ebb3878/collection/15688902-dfca0e00-4319-4449-8408-27f5be65742b)

# Instructions

You need to follow these instructions to get through all features of this app.

1. You need to first create an acount with the app going on to the register page/ If you already have an account just sign In. (Create Operation)
2. After your sign in/ sign up you will see the dashboard displaying your name (Read Operation)
3. Dashboard contains graph of the current BTC trends and the table contains some of the crypto pairs information (Read Operation)
4. You can go to settings app to update your profile info / delete your account (Update/Delete Operation)
5. After successfully updating your profile you will be redirected to dashboard / Or if you chose to delete your account the app will redirect you to the register page

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Referances

Refereances used while developing the application

- [Dribble | Design](https://dribbble.com/shots/16364085-Wallet-Dashboard-Design) - Design base.
- [Theme](https://material-ui.com/store/items/minimal-dashboard-free/) - Material-UI theme used for base UI architecture

## Deployed Link

Deployed Link of the app - [Commetwallet](https://cometwallet.vercel.app/)
