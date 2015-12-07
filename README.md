[![Build Status](https://semaphoreci.com/api/v1/projects/eaf206e7-e54e-4040-99b3-0d5c6d8471c2/613561/badge.svg)](https://semaphoreci.com/artsy-it/transient-error-page)

This application builds a single page which is deployed to an S3 bucket and used by Heroku by setting `ERROR_PAGE_URL` to [`https://s3.amazonaws.com/artsy-errors/index.html`](https://s3.amazonaws.com/artsy-errors/index.html)

### Meta

* __State:__ production
* __Production:__ [s3.amazonaws.com/artsy-errors/index.html](https://s3.amazonaws.com/artsy-errors/index.html)
* __CI:__ [Semaphore](https://semaphoreci.com/artsy-it/transient-error-page/)
* __Point People:__ [@dzucconi](https://github.com/dzucconi)

### Getting Setup

To start up a development server, clone this repo and run:

``` sh
npm install
npm run dev
```

### Deployment

PRs merged to master are deployed to production via Semaphore.
