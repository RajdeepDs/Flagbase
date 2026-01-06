# Flagbase

TypeScript-first feature flag management. Ship faster with type-safe, predictable, and developer-friendly feature flags-built entirely with TypeScript.

## Overview

Flagbase is a modern feature flag management system built for TypeScript developers.
It gives you:

- **Strong type-safety**: auto-generated flags.ts with full static typing.
- **Type-safety with CLIs**: manage feature flags with type-safe CLI tools.
- **Blazing-fast SDKs**: lightweight server/client SDK with zero-config local mode
- **Purpose-built for SaaS**: dashboard, billing, and authentication included.

> *Flagbase puts developers first. No vendor lock-in.*

## Technologies Used

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - Full-stack React framework
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Hono** - Lightweight, performant server framework
- **oRPC** - End-to-end type-safe APIs with OpenAPI integration
- **Bun** - Runtime environment
- **Prisma** - TypeScript-first ORM
- **PostgreSQL** - Database engine
- **Authentication** - Better-Auth
- **Biome** - Linting and formatting
- **Husky** - Git hooks for code quality
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Database Setup

This project uses PostgreSQL with Prisma.

1. Make sure you have a PostgreSQL database set up.
2. Update your `apps/server/.env` file with your PostgreSQL connection details.

3. Apply the schema to your database:

```bash
bun run db:push
```

Then, run the development server:

```bash
bun run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
The API is running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
flagbase/
├── apps/
│   ├── web/         # Frontend application (Next.js)
│   ├── docs/        # Documentation site (Fumadocs)
│   └── server/      # Backend API (Hono, ORPC)
├── packages/
│   ├── auth/        # Authentication configuration & logic
│   ├── cli/         # CLI tools for managing feature flags
│   ├── config/      # Shared configuration (TSConfig)
│   └── core/        # Core shared utilities and types
│   └── db/          # Database schema & queries
│   └── env/         # Environment variable management
│   └── orpc/        # oRPC shared contracts and utilities
│   └── react-sdk/   # Type-safe React SDK for feature flags
```

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun run dev:web`: Start only the web application
- `bun run dev:server`: Start only the server
- `bun run check-types`: Check TypeScript types across all apps
- `bun run db:push`: Push schema changes to database
- `bun run db:studio`: Open database studio UI
- `bun run check`: Run Biome formatting and linting


## Contributing

Contributions are welcome once the initial architecture is stable.
Feel free to open issues, suggest improvements.
