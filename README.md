# nodejs-mongo
NodeJS project that using MongoDB

## Getting Started

1. First of all, clone the project

```bash
git clone https://github.com/peacecwz/nodejs-mongo
```

2. Configure database configuration. You need to run MongoDB and add connection string into src/configs/config-keys.ts file

```ts
  const DEV: IConfigSet = {
    DEBUG_LOGGING_ENABLED: false,
    MONGODB_CONNECTION_STRING: "connection-string"
  };
```

If the app is running on heroku, aws or kubernetes, you should set mongodb connection string as MONGODB_CONNECTION_STRING key on environment

3. Run the application

Running on local debugging

```bash
yarn start:dev
```

Running on server

```bash
yarn build; yarn start
```

## Document

### Swaggar

[https://nodejs-mongo-demo.herokuapp.com/](https://nodejs-mongo-demo.herokuapp.com/)

You can send request on swagger

#### [GET] /v1/collections

```ùrl
?startDate=2016-09-06T13:19:42.679Z
&endDate=2016-11-16T15:43:53.579Z
&minCount=0
&maxCount=100
```

#### [POST] /v1/collections/filter

```json
{ 
	"startDate": "2016-09-06T13:19:42.679Z", 
	"endDate": "2016-11-16T15:43:53.579Z",
	"minCount": 0,
	"maxCount": 100
}
```

### Example Request 

#### [GET] /v1/collections

```bash
curl --location --request GET 'http://nodejs-mongo-demo.herokuapp.com/v1/collections/?startDate=2016-09-06T13:19:42.679Z&endDate=2016-11-16T15:43:53.579Z&minCount=0&maxCount=100'
```

#### [POST] /v1/collections/filter

```bash
curl --location --request POST 'http://nodejs-mongo-demo.herokuapp.com/v1/collections/filter' \
--header 'accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Content-Type: text/plain' \
--data-raw '{ 
	"startDate": "2016-09-06T13:19:42.679Z", 
	"endDate": "2016-11-16T15:43:53.579Z",
	"minCount": 0,
	"maxCount": 100
}'
```

### Tests

Run unit tests

```bash
yarn unit-tests
```

Run integration tests

```bash
yarn integration-tests
```
## Deployments

Deploying to Heroku platform, installed Heroku CI & CD. You can see deployments on [Github environment](https://github.com/peacecwz/nodejs-mongo/deployments)
