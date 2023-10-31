# Project Readme

This is a comprehensive guide to understand and set up the project, including API endpoints, local development setup instructions, and key decisions or assumptions made during the development process.

## API Endpoints and Usage

### 1. Adding a Book
- **Endpoint:** `/add-book`
- **Method:** POST
- **Usage:** Use this endpoint to add a new book. You can submit book details, including its title, author, description, and an optional image. The image can be uploaded dynamically using Cloudinary.

### 2. Retrieving All Books
- **Endpoint:** `/get-books`
- **Method:** GET
- **Usage:** Fetch all available books in the database. This endpoint provides a list of all books.

### 3. Retrieving a Single Book
- **Endpoint:** `/book/:id`
- **Method:** GET
- **Usage:** Retrieve a specific book by providing its unique identifier (ID).

### 4. Editing a Book
- **Endpoint:** `/edit-book/:id`
- **Method:** PUT
- **Usage:** Update the details of an existing book by providing its ID. You can modify the book's title, author, description, and image.

### 5. Deleting a Book
- **Endpoint:** `/delete-book/:id`
- **Method:** DELETE
- **Usage:** Delete a book from the database by specifying its unique ID.

## Local Development Setup

To run this application locally, follow these steps:

1. **Server Setup:**
   - Navigate to the 'server' directory.
   - Install the required dependencies by running `npm install`.
   - Create an `.env` file and set the following environment variables:
     ```
     PORT=8000
     DB_URL="mongodb://0.0.0.0:27017/crud-book"
     CLOUD_NAME=""
     CLOUD_API_KEY=""
     CLOUD_SECRET_KEY=""
     ```
   - Start the server by running `npm start`.

2. **Client Setup:**
   - Navigate to the 'client' directory.
   - Install the required dependencies by running `npm install`.
   - Start the client application using `npm run dev`.

3. **Database Setup:**
   - Make sure you have MongoDB running on `0.0.0.0:27017` as specified in the `.env` file. You can modify the `DB_URL` to match your MongoDB configuration.

## Key Decisions and Assumptions

During the development process, the following decisions and assumptions were made:

- **Client-Server Architecture:** The project includes both a client and server-side. To run the project, follow the instructions provided above for both components.

- **Image Uploading:** Cloudinary is used for image uploading. The system allows for dynamic image uploads for each book.

- **Error Handling:** Error handling middleware and async error handling have been implemented to catch and manage errors effectively during both synchronous and asynchronous operations.
