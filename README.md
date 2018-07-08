# Movie App

## Getting started

Step 1. Create your config file

```
cp src/config/config.ts.example src/config/config.ts
```

Step 2. Insert your Api key from the movie db account

See: https://developers.themoviedb.org/3/getting-started/introduction

Step 3. Install dependencies

```
npm install
```

Step 4. Run Test or Dev server

```
npm run test
npm run start
```

## What's missing

- Http Error handling 
- e2e Tests with mocked api
- Routing (to show detail page)
- Pagination (for list infinite scrolling)
- Support multiple reducers/effects
- Styling
- Multiple filters (region, language)
