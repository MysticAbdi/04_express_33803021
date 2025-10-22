# Express Mini Server

A tiny learning project built with [Express](https://expressjs.com/) to practice:
- Basic routing
- Parameterised routes
- Chained route handlers (`next()`)
- Sending an HTML file with `res.sendFile`

## Features
- `GET /` — Hello World
- `GET /about` — simple heading
- `GET /contact` — contact info
- `GET /date` — small HTML page that shows the current date/time (auto-updates every second)
- `GET /welcome/:name` — greets a user by name (e.g. `/welcome/Jemima`)
- `GET /chain` — two chained handlers demonstrating `next()`
- `GET /file` — serves a local HTML file (`a.html`)

## Tech Stack
- **Node.js**
- **Express** 
- **JavaScript**
- **HTML**

## Getting Started

### 1) Prerequisites
- Install [Node.js](https://nodejs.org)

### 2) Install dependencies
```bash
npm install
```
### 3) How to Run project
```bash
node index.js
# visit http://localhost:8000
```