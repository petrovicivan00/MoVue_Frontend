# My Movie App
# Netflix Vue.js Web Application

## Overview

This Vue.js web application is designed to provide an interactive and feature-rich movie theater/Netflix-style experience. It integrates with a backend service developed in a previous project, offering a seamless user experience for both guests and registered users.

The application meets the following requirements:
- Supports two user types:
  - **Guests**: Can only read publicly available content, no login required.
  - **Registered Users**: Can add and edit their content based on the application's concept.

## Features

- Vue.js frontend application that leverages the REST service from the previous project for data access.
- The Vue.js application is hosted at the home ("/") route of the application service.
- Utilizes Vue Router for navigation.
- Employs Vuex store for state management.
- Integrates Bootstrap Vue library for UI components.
- Implements input validation for user inputs.
- Real-time web functionality using websockets, applied based on the application's concept.

## Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
