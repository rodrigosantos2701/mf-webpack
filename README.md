# Webpack Module Federation Example

A basic Module Federation setup with two React applications demonstrating micro-frontend architecture using Webpack 5.

## Technology Stack

- **Framework**: React 18
- **Architecture**: Module Federation
- **Bundler**: Webpack 5
- **Language**: JavaScript
- **Deployment**: Zephyr Cloud


## Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development servers**
   ```bash
   pnpm start
   ```
   
   This starts both applications concurrently:
   - **app1** (Host): http://localhost:3001
   - **app2** (Remote): http://localhost:3002
   
   Or start them individually:
   ```bash
   cd app1 && pnpm start  # Host on port 3001
   cd app2 && pnpm start  # Remote on port 3002

   ```

3. **Build for production**
   ```bash
   pnpm build
   ```

## Project Structure

This example consists of three federated applications:

- **`app1/`** - Host application that consumes remotes
- **`app2/`** - Remote application that exposes components

- **`mf-remote-app3/`** - External repository with remote application that exposes components