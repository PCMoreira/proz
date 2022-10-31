# student-manager-proz

## Requirements
- node 16
- docker-compose
- npm or yarn
- insomnia 

## Request Collection
- download collection from path collection
- upload to insomnia app

## Running in Local
``` bash
# change the file .env.example to .env
# populate the .env file

# envs values
APP_PORT=3000

AMQP_QUEUE=process_student_registration
AMQP_URL=amqp://localhost:5673

DB_HOST=localhost
DB_USER=user
DB_PASSWORD=password
DB_NAME=prozdb

# install dependencies
npm install

# starting rabbit and database with docker
docker-compose up

# running project
npm run start

# Running basic tests with coverage
npm run test


