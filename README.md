

---

```markdown
#ReplyWise

**ReplyWise** is a full-stack application that generates AI-powered email replies based on tone and context.  
Built with **Spring Boot** (Backend) and **React + Vite** (Frontend).

---

##Project Structure

```

ReplyWise/
├── backend/        # Java Spring Boot backend with Gemini API integration
├── frontend/       # React + Vite frontend
└── README.md

````

---

##Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Backend   | Java, Spring Boot, Gemini AI API    |
| Frontend  | React, Vite, Tailwind CSS           |
| Deployment | GitHub, (Vercel/Netlify optional)  |

---

##Features

- AI-based reply email generation using Gemini
- Tone-based customization (formal, friendly, concise, etc.)
- Gmail integration (optional)
- Full-stack architecture with clean separation

---

## Frontend (React + Vite)

### Path: `frontend/`

### Setup

```bash
cd frontend
npm install
npm run dev
````

> Make sure ports don’t clash with the backend. Default Vite port is `5173`.

---

## Backend (Spring Boot)

### Path: `backend/`

### Setup

1. Open in IntelliJ or VS Code (with Java support).
2. Configure `application.properties`:

```properties
gemini.api.key=YOUR_API_KEY_HERE
spring.datasource.url=jdbc:mysql://localhost:3306/your_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

3. Run the application:

```bash
./mvnw spring-boot:run
```

> Default backend port: `8080`

---

## Environment Variables (Recommended)

Create a `.env` file in both frontend and backend (or use `.env.local` in React). Example:

### `frontend/.env`

```
VITE_BACKEND_URL=http://localhost:8080
```

---

## Live Demo

> Coming soon...


---

## Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you'd like to change.



## Acknowledgements

* [Gemini AI API](https://ai.google.dev)
* [Spring Boot](https://spring.io)
* [React + Vite](https://vitejs.dev)

```


