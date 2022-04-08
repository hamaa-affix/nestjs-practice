## 環境構築

### step 1
```bash
#git clone 後
$ docker compose up -d --build
```

### step 2
```bash
$ npm install
```

### step 3
```bash
$ cp .example.env .env

#.env your product database user, password. etc....
DATABASE_URL="mysql://root:root@mysql:3306/develop"

```

### step 4
create migration

```bash
$ npx prisma migrate dev --name post
```
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Running the app
ここはバックグランドで動くようにしている。
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
