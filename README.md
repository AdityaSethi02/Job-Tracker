# Job Application Tracker - Chrome Extension

This Chrome extension simplifies the process of tracking your job and internship applications. When applying to multiple companies across different platforms, it's easy to lose track of where you've applied and what positions you've applied for. This extension helps you organize and keep a record of your applications in one convenient place.

## Features

- **Track Company Name**: Easily record the name of the company you're applying to.
- **Position Details**: Specify the designation you're applying for, whether it's an internship, full-time position, or other roles.
- **Domain Information**: Keep track of the specific domain or field, such as frontend development, backend development, fullstack development, software engineering, machine learning, etc.
- **Application Platform**: Record the platform where you submitted your application (e.g., LinkedIn, company website, job board).
- **Application Status**: Track the current status of your application (e.g., Applied, Interview Scheduled, Rejected, Offer Received).
- **Data Storage**: All application data is stored securely in a MongoDB database.

## How It Works

1. **Install the Extension**: Add the Job Application Tracker extension to your Chrome browser.
2. **Fill in the Details**: When you apply for a job or internship, use the extension to fill in the details like company name, position, domain, platform. The status is default set as "Applied".
3. **Save to MongoDB**: The data you enter is saved directly to a MongoDB database.

## Prerequisites

To use this extension, you will need to set up your own MongoDB database.

1. **MongoDB Account**: If you don’t have a MongoDB account, create one at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. **Database Setup**: Set up a new cluster and create a database for your job applications.
3. **Connection String**: Obtain your MongoDB connection string (MongoDB URI).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AdityaSethi02/Job-Tracker.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Job-Tracker
    ```
3. Install the backend dependencies:
    ```bash
    cd backend
    npm install
    ```
4. Set up your environment variables:
    - Create a `.env` file in the `backend` directory with the following content:
      ```plaintext
      MONGODB_URI=your_mongodb_connection_string
      ```
    - Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

5. Start the backend server:
    ```bash
    npm start
    ```

6. Install the frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

7. Open the Chrome browser and go to `chrome://extensions/`.
8. Enable "Developer mode" in the top right corner.
9. Click on "Load unpacked" and select the `frontend` directory of the project.
10. The extension will be added to your Chrome browser.

## Usage

1. Click on the Job Application Tracker extension icon in the Chrome toolbar.
2. Fill in the input fields with the relevant details about the job/internship you are applying for.
3. Submit the form to save the data to your MongoDB database.

## Tech Stack

- **Frontend**: TypeScript, React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas

## Contact

If you have any questions or feedback, feel free to reach out to me at adityasethi2004@gmail.com.