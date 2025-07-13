# voila.dev - Simple microservices. Built for devs.

Welcome to **voila.dev** !

---

## 🔥 Why Voila?

Voila.dev is our vision for a unified developer platform: a fully open source monorepo of microservices that are fast, privacy-first, and production-ready. We're just getting started — but the foundation is here.

Voila.dev gives you everything you need out-of-the-box:

- ✅ Developer-first APIs
- ✅ Fully typed, from frontend to backend (TypeScript + Effect TS)
- ✅ Open source with cloud-hosted options
- ✅ Built for performance, privacy, and production

This is only the beginning — and you're invited to build it.

---

## 🧩 Available Microservices

Each service is its own module under the monorepo, but all share a common design system, authentication layer, and developer experience.

| Service                                              | Description                                       | Status          |
| ---------------------------------------------------- | ------------------------------------------------- | --------------- |
| [`vat.voila.dev`](https://vat.voila.dev)             | Validate VAT numbers across Europe                | 🧭 Roadmap      |
| [`url.voila.dev`](https://url.voila.dev)             | Get Open Graph and metadata previews from any URL | 🧭 Roadmap      |
| [`analytics.voila.dev`](https://analytics.voila.dev) | Privacy-first, cookieless web analytics           | 🧭 Roadmap      |
| [`content.voila.dev`](https://content.voila.dev)     | Lightweight, headless CMS with versioning         | 🧭 Roadmap      |
| [`ip.voila.dev`](https://ip.voila.dev)               | Fast and accurate IP geolocation                  | 🧭 Roadmap      |
| [`pdf.voila.dev`](https://pdf.voila.dev)             | Convert HTML/CSS to beautiful PDFs                | 🧭 Roadmap      |
| [`status.voila.dev`](https://status.voila.dev)       | Uptime and health monitoring tracker              | 🧭 Roadmap      |
| [`domains.voila.dev`](https://domains.voila.dev)     | Programmatically register and manage domain names | 🧭 Roadmap      |
| [`ui.voila.dev`](https://ui.voila.dev)               | Shared UI components across all services          | 🧭 Roadmap      |

---

## 🛠️ Tech Stack

| Layer        | Technology                                      |
|--------------|--------------------------------------------------|
| Frontend     | React + React Router + TypeScript + Tailwindcss |
| Backend      | Effect TS + TypeScript + Bun                    |
| Database     | PostgreSQL                                      |
| Object Store | Any S3-compatible system (e.g., MinIO, R2)      |
| Cache        | Redis-compatible KV store                       |
| Time Series  | Clickhouse                                      |
