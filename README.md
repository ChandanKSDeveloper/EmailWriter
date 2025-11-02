<p align="center"><h1 align="center">Smart Email Writer</h1></p>
<p align="center">
    <em>Write polished and professional emails effortlessly with AI.</em>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=Spring&logoColor=white" alt="SpringBoot">
    <img src="https://img.shields.io/badge/React-61DAFB.svg?style=default&logo=React&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=flat" alt="ExpressJS">
    <img src="https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white" alt="GeminiAI">
    <img src="https://img.shields.io/badge/AI_Generation-Powered.svg?style=default&logo=Artificial-Intelligence&logoColor=white" alt="AI">
    <img src="https://img.shields.io/badge/-nodejs-13aa52?style=for-the-badge&logo=nodejs&logoColor=white" alt="NodeJS">
</p>


## 🎨 Overview

- A Chrome Extension that helps users **generate professional email replies** using AI.  
- The extension injects a **"AI Reply"** button inside Gmail / Outlook UI.  
- When clicked, it sends the selected email text to a **Spring Boot backend**, which uses **Google Gemini API** to generate a polished response.

---

## 🚀 Features

- Chrome extension UI injected inside the email interface
- One-click **AI-powered reply generation**
- Backend built with **Spring Boot**
- Uses **Gemini API** (`gemini-pro` or newer model)
- Configurable response tone (formal / friendly / concise, etc.)
- Secure request handling with API key stored on backend

---

## 🧱 Project Structure

project-root/
│
├── emailWriterExtension/ # Chrome Extension
│ ├── manifest.json
│ ├── contentScript.js
│ └── popup/
│
├── email-writer-sb/ # Spring Boot Backend
│ ├── src/main/java/com/email/writer
│ ├── src/main/resources/application.properties.example
│ └── pom.xml
│
└── Frontend/ # (Optional UI to test APIs)
├── src/
├── public/
└── package.json


---

## 🔧 Setup Instructions

### 1️⃣ **Backend Setup (Spring Boot)**

#### Navigate to backend folder
```
cd email-writer-sb
```
#### Open src/main/resources/application.properties and it should look like this:
```
gemini.api.url=${GEMINI_API_URL}
gemini.api.key=${GEMINI_API_KEY}
server.port=8080
```
#### Set Environment Variables
**use IntelliJ IDEA**
1. Run → Edit Configurations
2. Select your Spring Boot Application
3. Find "Environment Variables"
4. Add:
  ``` GEMINI_API_URL=https://generativelanguage.googleapis.com;GEMINI_API_KEY=YOUR_API_KEY```
5. Click Apply ✅

#### Run the backend by running **EmailWriterSbApplication** application
#### Backend runs at:
```
http://localhost:8080
  ```


### 2️⃣ **Load Chrome Extension**
1. Open Chrome → go to:
```
chrome://extensions
```
2. Enable Developer Mode
3. Click Load unpacked
4. Select:
```
emailWriterExtension/
```
---

### 🌐 **API Used: Gemini**

The backend securely calls Gemini’s text generation endpoint using your environment variables.
No API key is ever exposed to the client.

--- 

### 🧠 How It Works
| Step | Description                                    |
| ---- | ---------------------------------------------- |
| 1    | Email text selected in Gmail                   |
| 2    | User clicks **AI Reply** button                |
| 3    | Extension sends text → Backend                 |
| 4    | Backend calls Gemini API                       |
| 5    | AI-generated reply is returned + auto-inserted |

---


⭐ **Support**
Give the project a star if it helped you! ☕🙂
