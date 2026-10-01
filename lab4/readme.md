# NPM Project

1. goto project folder (by cd)
2. type `npm init -y`
3. open package.json
4. update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

script
{
"start": "node app.js",
"dev": "nodemon prg7.js"
}

7. add node_modules to .gitignore
8. to run use `npm run dev`

## REST API

- majorly backend server
  return only data not html file
- REST API uses (get, post,
  put, patch, delete) method to
  communicate with client
- any browser can check only
  get method
- for other method type we use
  third party API Tester like
  postman, thunder client, echo
  api etc

## request type

1. GET → Read / Fetch
  - Get All → GET /users → Need all/multiple records
  - Get By ID → GET /users/10 → Need a particular record
2. POST → Create
  - POST /users → Create a new record
  - Data is usually sent in the request body
3. PUT → Complete Update
  - PUT /users/10 → Update/replace the complete record
4. PATCH → Partial Update
  - PATCH /users/10 → Update only specific fields
5. DELETE → Delete
  - DELETE /users/10 → Delete a particular record
