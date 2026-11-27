# Snowy

Snowy är en webbaserad applikation för rapportering av snö- och vägförhållanden med hjälp av geolokalisering, bildanalys och AI.

Projektet är under utveckling.

## Teknikstack

**Backend**
- Java 25
- Spring Boot 4.2.0
- Spring AI
- Spring Data JPA
- Maven
- Flyway

**Frontend**
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Leaflet
- Lucide React

**Databas och infrastruktur**
- PostgreSQL 17
- Docker
- Docker Compose

## Förutsättningar

- Git
- Docker Desktop
- Node.js och npm
- Java 21 (vid lokal backendutveckling utan Docker)

## Kom igång

### 1. Miljövariabler

Skapa lokala miljöfiler utifrån exempelfilerna.

Från projektets rot:

```bash
cp .env.example .env
cp frontend/.env.example frontend/.env
```

Ange ett lokalt databaslösenord i `.env` under `DB_PASSWORD`.

Gemini API-nyckel behövs inte i nuvarande projektversion.

### 2. Starta backend och databas

Starta Docker Desktop och kör från projektets rot:

```bash
docker compose up -d --build
```

Backend: http://localhost:8080

Health check: http://localhost:8080/actuator/health

### 3. Starta frontend

```bash
cd frontend
npm ci
npm run dev
```

Frontend: http://localhost:5173

### 4. Stoppa Docker

Från projektets rot:

```bash
docker compose down
```

Databasinnehållet bevaras i en Docker-volume.

## Lokal backendutveckling

Backend kan även köras direkt i IntelliJ med Java 21.

Starta endast databasen:

```bash
docker compose up -d database
```

Konfigurera SnowyApplication att läsa miljövariabler från projektets `.env` och starta applikationen.

Om backend redan körs i Docker, stoppa den först:

```bash
docker compose stop backend
```

## Tester

Backend (Git Bash, från backend-mappen, med PostgreSQL igång och Java 21):

```bash
set -a
source ../.env
set +a
./mvnw clean verify
```

Frontend:

```bash
npm run build
npm run lint
```

## Projektstruktur

```text
Snowy/
├── backend/
├── frontend/
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

## Säkerhet

Lokala `.env`-filer, lösenord och API-nycklar ska aldrig committas till GitHub.