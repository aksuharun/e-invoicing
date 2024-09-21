This e-invoicing project is a web application built with Node.js, Express, PostgreSQL, and React. It allows users to manage and process electronic invoices efficiently. The backend handles data storage and processing, while the frontend provides a user-friendly interface for interacting with the system.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [License](#license)

<a id="installation"></a>

## Installation
1. Clone the repository:

```sh
git clone https://github.com/aksuharun/e-invoicing.git
```

2. Install backend dependencies:

```sh
cd backend
npm install
```

3. Install frontend dependencies:

```sh
cd ../frontend
npm install
```

<a id="usage"></a>

## Usage
1. Start the backend server:

```sh
cd backend
npm start
```

2. Start the frontend development server:

```sh
cd ../frontend
npm start
```


<a id="environment-variables"></a>

## Environment Variables
The following environment variables are used in the project:

- `SERVER_PORT`: The port on which the backend server runs.
- `SERVER_DOMAIN`: The domain of the backend server.
- `DB_USERNAME`: The username for the database.
- `DB_PASSWORD`: The password for the database.
- `DB_HOST`: The host of the database.
- `DB_NAME`: The name of the database.
- `DB_PORT`: The port of the database.
- `API_URL_DATA`: The URL for data API.
- `API_URL_TOKEN`: The URL for token API.
- `API_USERNAME`: The username for the API.
- `API_PASSWORD`: The password for the API.

<a id="scripts"></a>

## Scripts

### Backend

- `npm start`: Start the backend server.
- `npm test`: Run backend tests.

### Frontend

- `npm start`: Start the frontend development server.
- `npm build`: Build the frontend for production.
- `npm test`: Run frontend tests.

<a id="license"></a>

## License
MIT License

Copyright (c) 2024 Harun Aksu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
