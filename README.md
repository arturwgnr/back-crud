🧠 Profiles API (Mini Social)

A simple backend project built with Node.js, Express, and Prisma (using SQLite).

🚀 Features
- Full CRUD for profiles (GET, POST, PUT, DELETE)
- Organized and clean project structure
- SQLite database (no external setup required)
- Ready to be expanded with authentication and relations

🧩 Tech Stack
- Node.js  
- Express  
- Prisma ORM  
- SQLite  

📂 Project Structure
profiles-api/
 ┣ src/
 ┃ ┣ routes/
 ┃ ┃ ┗ profilesRoutes.ts
 ┃ ┣ controllers/
 ┃ ┃ ┗ profilesController.ts
 ┃ ┣ prisma/
 ┃ ┃ ┗ schema.prisma
 ┃ ┗ index.ts
 ┣ package.json
 ┗ README.txt

▶️ How to Run
1. Install dependencies:
   npm install

2. Run Prisma migrations:
   npx prisma migrate dev --name init

3. Start the server:
   node server.js

🌐 Server runs on:
   http://localhost:3000

✅ Available Routes
GET    /profiles         → list all profiles  
POST   /profiles         → create a new profile  
PUT    /profiles/:id     → update an existing profile  
DELETE /profiles/:id     → delete a profile  

💡 About
Created for learning purposes to strengthen backend fundamentals, routing, and database integration using Prisma ORM.
