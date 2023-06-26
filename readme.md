# Testing webdriver against Selenium service

### Set the environment

```
npm install
```

### Running docker

```
docker run -d -p 4445:4444 -p 7900:7900 --shm-size="2g" selenium/standalone-chrome:latest
docker run -d -p 4446:4444 -p 7901:7900 --shm-size="2g" selenium/standalone-firefox:latest
```

### Running the test

```
npm run wdio
```