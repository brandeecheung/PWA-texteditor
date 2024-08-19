# Text Editor Progressive Web Application (PWA)

## Table of Contents
1. [Description](#description)
2. [User Story](#user-story)
3. [Accessing and Running the Application](#accessing-and-running-the-application)
    - [Prerequisites](#prerequisites)
    - [Cloning the Repository](#cloning-the-repository)
    - [Terminal Commands](#terminal-commands)
4. [Application Demo](#application-demo)
5. [Functionality](#functionality)
6. [Manifest File](#manifest-file)
7. [Service Worker](#service-worker)
8. [IndexedDB Storage](#indexeddb-storage)
9. [Repository and License](#repository-and-license)
    - [GitHub Repository](#github-repository)
    - [License](#license)
10. [Contributors](#contributors)

## Description
This project involved building a text editor that runs directly in the browser, meeting Progressive Web Application (PWA) criteria. The application is a single-page application (SPA) that utilizes various data persistence techniques to ensure functionality even when offline. It uses IndexedDB to store and retrieve data, employing the `idb` package as a lightweight wrapper around the IndexedDB API. 

The project was deployed to Render, ensuring it is accessible via a live URL.

## User Story
AS A developer  
I WANT to create notes or code snippets with or without an internet connection  
SO THAT I can reliably retrieve them for later use

## Accessing and Running the Application

### Prerequisites
Before you start, make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)

### Cloning the Repository
1. Open your terminal.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:
   ```bash
   git clone [your-github-repo-url]

## Terminal Commands
After cloning the repository, navigate to the project directory and run the following commands:

## Install the required dependencies:

```bash
npm install
Start the application:
bash
Copy code
npm start
```

## Application Demo 
[Watch the video](https://www.example.com/video.mp4)

## Functionality
The text editor allows users to create, edit, and save notes or code snippets. It works offline by storing data using IndexedDB.

## Manifest File
The manifest.json file is configured to allow the application to be added to the home screen of a mobile device and to provide a proper splash screen and icons.

## Service Worker
A service worker is implemented to handle caching and offline functionality, ensuring that the app remains functional even without an internet connection.

## IndexedDB Storage
IndexedDB is used to store user data, allowing the application to retrieve and persist notes or code snippets offline. The idb package simplifies interactions with IndexedDB.

## Repository and License
GitHub Repository
You can find the repository for this project on GitHub.

### License
This project is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for details.

## Contributors
[Visit my github repo for this project here](https://github.com/brandeecheung/PWA-texteditor) 