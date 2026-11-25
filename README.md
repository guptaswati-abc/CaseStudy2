# Campus Store Product Manager

A simple web app for a college store. The manager can log in, then add, view, edit and delete products.

## Technologies
- Front end: AngularJS 1.x
- Back end: Node.js and Express
- Database: MongoDB (using Mongoose)

## Folder Structure
```
campus-store/
├── client/
│   ├── index.html      (login page + product page)
│   └── app.js          (module, service, directive, controller)
├── server/
│   ├── package.json
│   ├── server.js       (Express server + 4 API routes)
│   └── Product.js      (Mongoose model)
├── screenshots/        (images used in this README)
├── .gitignore
└── README.md
```

## What You Need
1. Node.js (LTS version)
2. MongoDB Community Server (running on the default port 27017)
3. VS Code with the Live Server extension
4. Postman (only for testing the API)
5. Internet connection (AngularJS is loaded from a CDN link)

## How to Run
1. Clone the project and open the folder in VS Code:
   ```
   git clone <GITHUB-LINK-HERE>
   ```
2. Make sure MongoDB is running.
3. Open a terminal and start the back end:
   ```
   cd server
   npm install
   npm start
   ```
   You should see `Server running at http://localhost:3000` and `MongoDB connected`.
4. Right-click `client/index.html` and choose **Open with Live Server**.
5. Log in with:
   - Username: `admin`
   - Password: `admin123`

## API Routes
| Method | Route | What it does |
|--------|-------|--------------|
| GET | /api/products | Get all products |
| POST | /api/products | Add a new product |
| PUT | /api/products/:id | Update a product |
| DELETE | /api/products/:id | Delete a product |

Example body for POST and PUT:
```
{ "name": "Notebook", "price": 50, "quantity": 20 }
```

## If You See an Error
- "Database not connected": start MongoDB, then stop the server (Ctrl + C) and run `npm start` again.
- "Server not reachable": the server is not running. Run `npm start` inside the `server` folder.
- Check that `http://localhost:3000/api/products` opens in the browser and shows `[]`.

## Features
- Login page (product page opens only after login)
- Products shown in a table (`ng-repeat`)
- Form to add and edit a product (empty and negative values not allowed)
- Delete button with success and failure messages
- Red "Low Stock" label when quantity is less than 5 (custom directive)

## Screenshots
| Screen | Image |
|--------|-------|
| Login page | <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/25993a31-67db-4f39-9a1a-96fd98823bd9" />
| Product page | <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3672fd14-40c1-4787-81ed-c40e16295590" />
| Add product | <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9cce921a-3917-4546-965d-67d0b9064b74" />
| Edit product | <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/770c97f6-6262-4aef-bae8-eacc0e6f34ca" />
| Delete message | <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9ad145a5-7e70-4125-b950-eef6690eae49" />
| Low Stock label | <img width="905" height="642" alt="image" src="https://github.com/user-attachments/assets/2a9c0ffc-9dff-44e3-9486-a38d458438e0" />

![Uploading image.png…]()


