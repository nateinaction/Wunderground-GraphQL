# Wunderground GraphQL API
### Providing a GraphQL interface for the Wunderground API

### Features
- Request current weather data for a location
- Request 10-day hourly forecast for a location
- Dockerized

### Example Query
```
{
  forecast(lat: "40.785091", lon: "-73.968285") {
    time {
      pretty
    }
  	weather
    icon
    temp{
      fahrenheit
    }
    chancePrecip
  }
}
```

## Installation
1. `clone https://github.com/nateinaction/Wunderground-GraphQL`
2. `cd ./Wunderground-GraphQL`
3. `npm install` (or [use Yarn!](https://yarnpkg.com/))
4. `mkdir ./secrets`
5. `echo "YOUR_WUNDERGROUND_API_KEY" > ./secrets/api-key`
6. `npm start`

## Local test
- `heroku local web`

## Deploy to Heroku
- Just push a new version to Master

### Learn more about GraphQL
[What is this GraphQL thing anyways?](http://graphql.org/learn/)

[Quick video examples in Python, Ruby, and JS](https://www.youtube.com/watch?v=UBGzsb2UkeY)

## License
GNU GPLv3
