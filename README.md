\# MongoDB CRUD App



A full-stack user management app. A REST API built with Node.js, Express and Mongoose stores data in MongoDB Atlas, and a simple HTML/JS frontend lets you add, edit, search and delete users.



\## Live Demo

\- Frontend: https://cheery-zabaione-565ee4.netlify.app

\- API: https://mongodb-crud-app-pktj.onrender.com



> The API runs on a free Render plan, so the first load after a period of inactivity can take up to a minute.



\## Features

\- Create, read, update and delete users

\- Search users by name or email

\- Data stored in MongoDB Atlas

\- Responsive frontend with light and dark themes



\## Tech Stack

\- \*\*Backend:\*\* Node.js, Express, Mongoose

\- \*\*Database:\*\* MongoDB Atlas

\- \*\*Frontend:\*\* HTML, CSS, JavaScript

\- \*\*Hosting:\*\* Render (API), Netlify (frontend)



\## API Endpoints

| Action | Method | Endpoint |

|---|---|---|

| Add user | POST | `/user/add-user` |

| List users | GET | `/user/get` |

| Get one user | GET | `/user/get-user/:id` |

| Update user | PUT | `/user/update/:id` |

| Delete user | DELETE | `/user/del/:id` |



Example request body for adding a user:

```json

{ "fullName": "Asha Verma", "emailAddress": "asha@example.com", "mobileNo": "9876543210" }

```



\## Run Locally

```bash

git clone https://github.com/sravanthi8247/mongodb-crud-app.git

cd mongodb-crud-app

npm install

```

Create a `.env` file or set an environment variable:

Then start the server:

```bash

npm start

```

The API runs on `http://localhost:5050`. Open `frontend/index.html` in your browser and set the API address to `http://localhost:5050`.



\## Author

Sravanthi

