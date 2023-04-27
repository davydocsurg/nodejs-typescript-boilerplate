# Nodejs Typescript Boilerplate

This repo provides a starting point for developing Node.js applications using TypeScript. It includes a basic project structure with pre-configured tools and settings to facilitate rapid application development. The boilerplate includes common features such as express server setup, routing, environment configuration, logging, testing, and debugging. It is a useful resource for developers who want to get started quickly with building Node.js applications using TypeScript.

## Features

-   Uses TypeScript for type-checking and better code quality
-   Comes with a basic project structure and file organization
-   Includes pre-configured linting and formatting tools (ESLint and Prettier)
-   Includes a Dockerfile for containerization
-   Easily extendable for your specific project needs

## Prerequisites

-   [Node.js](https://nodejs.org) v18 or higher
-   [Docker](https://docker.com) (if you want to containerize your application)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/davydocsurg/nodejs-typescript-boilerplate
```

2. Install dependencies:

```bash
cd nodejs-typescript-boilerplate
npm i
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and go to http://localhost:8080. You should see a "You have reached Nodejs Typescript Boilerplate home page" message.

## Building for production

To build a production-ready version of your application, run:

```bash
npm run build
```

This will create a `dist` directory with your compiled TypeScript code.

## Containerization

To containerize your application, you can use the provided Dockerfile.

1. Build the Docker image:

```bash
docker compose up --build
```

2. Run the Docker container:

```bash
docker compose up
```

This will start your application in a Docker container, which you can then access by going to http://localhost:8080 in your browser.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on GitHub. If you would like to contribute code, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.
