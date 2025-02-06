Follicle Sprout - Local Setup Guide
Welcome to Follicle Sprout! This guide will help you set up both the frontend and backend of the application on your local environment. Follow the steps below to get started.

Prerequisites
Make sure you have the following installed:

1. Node.js (v16 or later): Download here
2. Yarn (v1.22.19 or later): Install Yarn
3. Vue CLI (v5 or later): Install Vue CLI
4. MongoDB (for backend database, if not using cloud services): Download MongoDB
5. Backend Setup (Node.js)
6. Clone the Repository: Clone the repository to your local machine:
1. 
git clone https://github.com/your-repo/follicle_sprout.git
cd follicle_sprout

Install Backend Dependencies:
Navigate to the backend folder:
2. 
cd backend
Run npm to install the necessary dependencies listed in package.json:
npm install
Set Up Environment Variables:


Start the Backend:
You can now start the backend server using nodemon:
** install nodemon **
- npm install nodemon
- npm start
This will start the backend server on the specified PORT (default: 8000).

Frontend Setup (Vue.js)
Navigate to Frontend Folder:
From the root project directory, navigate to the frontend folder:

cd frontend
Install Frontend Dependencies:

Run yarn to install all the required dependencies for the frontend:
yarn install
Configure TailwindCSS:

If this is your first time setting up TailwindCSS, ensure that tailwind.config.js is correctly configured in the frontend directory. If not, you can create it with the following commands:
yarn add tailwindcss postcss autoprefixer
npx tailwindcss init
Tailwind should be configured automatically if you use the preset in the project.

Start the Frontend:

Once the dependencies are installed, run the development server:
yarn serve
This will start the frontend on port 8000 by default.

Now, you should be able to access the app in your browser at:

http://localhost:8000


Common Troubleshooting
Issue: Dependencies not installing correctly

Make sure you're using the latest versions of Node.js and Yarn.
Try running yarn install --force to clear any cached dependencies and install fresh ones.
Issue: MongoDB connection error

If using local MongoDB, ensure that MongoDB is running on your system. You can start it by running mongod in your terminal.
Issue: Port conflict

If port 8000 (frontend) or port 8000 (backend) is in use, you can change the port number in the .env file or in the project configuration.
Contributing
Feel free to make changes and submit a pull request! Please ensure that the code follows the style guidelines and runs correctly before submitting. If you encounter any issues, open an issue, and we'll get back to you as soon as possible.

Notes
Frontend is built with Vue.js, Vuex, TailwindCSS, and PrimeVue for the UI.
Backend is powered by Node.js, Express, MongoDB, and JWT Authentication.
Good luck with your setup, and don't hesitate to reach out if you need any help!

Happy Coding! 🎉
