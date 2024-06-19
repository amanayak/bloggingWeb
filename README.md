# Blogging Website

Welcome to the Blogging Website repository! This project is a fully functional blogging platform built using Node.js, Express.js, and EJS templating. It allows users to create, edit, delete, and view blog posts. Below, you'll find detailed instructions on how to set up and run the project locally.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Features

- Create, edit, delete, and view blog posts
- Responsive design
- EJS templating for dynamic content rendering
- Express.js for server-side logic
- MongoDB for data storage

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- MongoDB installed and running
- A code editor like VSCode

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/amanayak/bloggingWeb.git
    ```
2. Navigate to the project directory:
    ```sh
    cd majorproject
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```


## Usage

To run the project, use the following command:

```sh
npm start
```

Open your browser and go to `http://localhost:8080/listings` to view the application.

## Folder Structure
majorproject/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   └── listing.js
│
├── node_modules/
│   
│
├── public/
│   ├── css/
│       ├── style.css
│            
│
├── views/
│    ├── include/
│        ├── footer.ejs
│        └── navbar.ejs  
│    ├── layouts/
│        └── boilerplate.ejs  
│    ├── include/
│        ├── edit.ejs
│        ├── index.ejs
│        ├── new.ejs
│        └── show.ejs     
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

- `public/`: Contains static files like CSS, JavaScript, and images.
- `include/`: Contains route files for different parts of the application.
- `views/`: Contains EJS templates for rendering dynamic content.
- `app.js`: Main application file.


## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

