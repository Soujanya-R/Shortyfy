# Shortyfy
### A URL Shortner

This project is a URL Shortener web application built using **Next.js**. It allows users to paste a long URL, provide a custom short URL, and generate a shortened link that redirects to the original URL. The application features a clean, responsive design and includes success notifications using `react-toastify`.

## Screenshots
![Screenshot 1](https://raw.githubusercontent.com/Soujanya-R/Shortyfy/main/Screenshot%202025-02-01%20125558.png)

![Screenshot 2](https://raw.githubusercontent.com/Soujanya-R/Shortyfy/main/Screenshot%202025-02-01%20133649.png)

![Screenshot 3](https://raw.githubusercontent.com/Soujanya-R/Shortyfy/main/Screenshot%202025-02-01%20133711.png)


## Features
- **User Input**: Paste a long URL and provide a custom name for the shortened URL.
- **Generate Short URLs**: Shortened URLs are created and displayed to the user.
- **Notifications**: Success messages appear via toast notifications.
- **Clear Input Fields**: Input fields are cleared automatically after successful URL generation.
- **Modern UI**: A responsive, user-friendly interface styled using Tailwind CSS.
## Usage
1. Enter the long URL in the "Paste your URL here" input field.
2. Provide a custom short name in the "Enter the name of new URL" field.
3. Click the **Generate** button.
4. A success toast notification will appear, and the shortened URL will be displayed.
5. Click the shortened URL to navigate to the original URL.

## Technologies Used
- **Frontend**: Next.js, React.js, Tailwind CSS
- **Backend**: MongoDB (via `mongodb` package) for database storage
- **Notifications**: `react-toastify`
## Prerequisites
Make sure you have the following installed:
1. **Node.js** (v16 or later)
2. **npm** or **yarn**
3. A MongoDB database instance (local or cloud)## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
## Environment Variables
Create a `.env.local` file in the root directory and configure the following variables:
```env
NEXT_PUBLIC_HOST=http://localhost:3000 # Or your deployed URL
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/Shortyfy?retryWrites=true&w=majority
```
## Running the Application
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Folder Structure
```
.
├── app
│   ├── api
│   │   └── generate
│   │       └── route.js    # Backend route for generating short URLs
│   ├── shortner
│   │   └── page.js        # Frontend for the URL shortener
├── lib
│   └── mongodb.js         # MongoDB connection utility
├── public
│   └── favicon.ico        # Favicon
├── styles
│   └── globals.css        # Global CSS for Tailwind
├── .env.local             # Environment variables
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```
## API Endpoint
### `POST /api/generate`
#### Request
Body:
```json
{
  "url": "https://example.com",
  "shorturl": "custom-name"
}
```
#### Response
Success:
```json
{
  "success": true,
  "error": false,
  "message": "Successfully generated"
}
```
Failure:
```json
{
  "success": false,
  "error": true,
  "message": "Invalid input"
}
```
## Deployment
To deploy this application:
1. Push your code to a GitHub repository.
2. Deploy the project using platforms like **Vercel** or **Netlify**.
3. Ensure the environment variables are configured on the hosting platform.
## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.