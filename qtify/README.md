
# QTify

QTify is a song-browsing application built from scratch using ReactJS, paired with Material UI and Swiper, to deliver a seamless and aesthetic user interface. It offers songs from different albums and genres for music lovers.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Interface:**
  - Built using ReactJS and Material UI for a responsive and visually appealing design.
  - Integrated Swiper for a smooth carousel experience.

- **Song Browsing:**
  - Browse songs by different albums and genres.
  - Genre-based song filtering system using modified Material UI tabs.

- **REST API Integration:**
  - Fetch and display data served by the backend server.

## Technologies Used

- **Frontend:**
  - ReactJS
  - Material UI
  - Swiper

- **Tools:**
  - REST APIs

## Setup and Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/QTify.git
   cd QTify
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the application:**
   ```sh
   npm start
   ```

## Usage

1. **Home Page:**
   - Displays a carousel of popular songs and albums.
   - Provides a search bar to look for songs by title or artist.

2. **Genre Filtering:**
   - Users can filter songs by selecting their preferred genre from the tabs.
   - The song list updates dynamically based on the selected genre.

## Project Structure

```
QTify/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Card.js
│   │   ├── Carousel.js
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.js
│   │   └── ...
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Learnings

While building this Micro-Experience, the developer:

- Conducted a thorough analysis of the provided Figma design, successfully identifying and documenting required front-end components.
- Created modular UI components including Cards, Carousels, and Buttons, optimizing for reusability across various sections of the application.
- Implemented an intuitive genre-based song filtering system using a tab component by modifying the one provided by Material UI, allowing users to browse songs by their preferred genre effortlessly.
- Utilized REST APIs to fetch data served by the backend server.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, enhancements, or features you would like to add.

1. **Fork the repository:**
   ```sh
   git fork https://github.com/yourusername/QTify.git
   ```

2. **Create a new branch:**
   ```sh
   git checkout -b feature-branch
   ```

3. **Make your changes and commit them:**
   ```sh
   git commit -m "Description of changes"
   ```

4. **Push to the branch:**
   ```sh
   git push origin feature-branch
   ```

5. **Open a pull request:**
   - Go to the repository on GitHub and open a pull request.
