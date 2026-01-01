# 🌙 Spacewatcher
Spacewatcher is a full-stack web application that displays current moon phases and lunar information using real-time data from WeatherAPI.

⛅ [Weather API](https://www.weatherapi.com/) is used to get the moon information.

# Installation 
Verify that you have Node and NPM installed on your command line.
```
node -v
```
```
npm -v
```

Get a API Key at [Weather API](https://www.weatherapi.com/).

Install the Node Modules in both ```backend``` and ```spacewatcher``` directories:
```
cd backend
npm install

cd ../spacewatcher
npm install
```

Set up environment variables:
Make a copy of the ```.env.example``` file and name it ```.env```. 
Place the API key inside ```WEATHER_API_KEY=```.

# Running the Project

### Start the backend server
From the ```backend``` directory:
```
npm run server
```

### Start the frontend
From the ```spacewatcher``` directory:
```
npm run dev
```
