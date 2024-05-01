# Sundays Are For Sandys

This project is a full-stack JavaScript application that uses the MERN stack (MongoDB, Express.js, React, and Node.js) to display a dynamic map of selected locations, labeled with custom markers using the Google Maps API. The application allows users to view detailed information about various establishments directly on the map.

## Prototype Notice

This application is currently a prototype. It makes calls to the Google Maps API from both the backend and the frontend, which will be refactored in the future to centralize API calls to the backend only. This change will enhance security and performance by minimizing frontend exposure and redundancy in API calls.

## Technologies Used

- **React**: Front-end library used for building the user interface.
- **Node.js**: JavaScript runtime environment that executes JavaScript code server-side.
- **Express.js**: Back-end web application framework running on top of Node.js.
- **Google Maps JavaScript API**: Used to display the map and markers.
- **MongoDB**: NoSQL database to store location data for markers.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **Bootstrap**: Front-end framework used for styling and responsive design.
- **Nodemon**: Utility that monitors for any changes in your source and automatically restarts your server.
- **Dotenv**: Module to load environment variables from a `.env` file.

## Features

- Display markers on a map for predefined locations.
- Fetch location details dynamically via the Google Maps Geocoding API.
- Allow users to view detailed information about each marker.

## Setup

To run this project, install it locally using npm:

```bash
git clone https://github.com/E-Dimech/sunday-sandy-finder.git
cd sundays-are-for-sandys
npm install
