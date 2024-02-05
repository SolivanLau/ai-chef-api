# AI CHEF 👨‍🍳😙👌

## Description

This is AI Chef! Using Open AI API and Digital Ocean Spaces, this project generates recipes steps and images from **any** user inputted ingredients!

## Table of Contents

- [Project Overview](#overview)
- [Structure](#structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Project Overview <a name="overview"></a>

This server uses the following:

### Tech Stack 🤖

- **Node.js**: JavaSript runtime for server side projects.
- **Express.js**: Framework to simplify server side actions.

### Packages 📦

- **nodemon**:
- **cors**:

### API & External Services 🛜

- **Digital Oceans Spaces**: Cloud storage without surprises. Spaces is a simple and scalable data storage service.
- **Open AI API: gpt-3.5-turbo**: AI model for generating natural language and code.
- **Open AI API: DALLE**: AI model for generating images from natural language.

## Structure <a name="structure"></a>

### Files 📄

All files use the `.mjs` format to benefit from ES6 import syntax. This works in tandem with `"type": "module"` configuration located in `package.json` to ensure import syntax works to minimize the amount of imports in the entry file.

### Folder 📂

This projects main entry file is located at `index.mjs`, importing files from 3 key areas:

1. **middleware**
2. **route**
3. **controller**

These directories have their own localized `index.mjs` files to centralize and forward respective imports.

## Installation ⚒️ <a name="installation"></a>

1. Clone the repository:

```bash
git clone <git-repository>

```

2. Run Development Script `npm run start-dev`

This script will allow you to run a development server set to **http://localhost:3000/** with a default port of **3000**. Feel free to change the port at the main entry point **index.mjs** of the application.
