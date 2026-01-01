# 🌙 Spacewatcher
A website to track the moon phases

⛅ [Weather API](https://www.weatherapi.com/) is used to get the moon information.

# Installation 
Install the Node Modules in both ```backend``` and ```spacewatcher``` directories:
```
cd backend
npm install

cd ../spacewatcher
npm install
```

Get a API Key at [Weather API](https://www.weatherapi.com/).

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
