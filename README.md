# 🍎 Portfolio 2024 🥟

This repository contains the code for my personal portfolio website. The website is built using React and is hosted on Vercel. It supports translations for English and French.

You can view it at [https://jiaxuan-li.com](https://jiaxuan-li.com).

## Details

-   **Interface**: The interface was developed using React and styled using [Tailwind CSS](https://tailwindcss.com/).
-   **Experience**: The 3D Experience was developed using [react-three-fiber](https://github.com/pmndrs/react-three-fiber), a React renderer for [Three.js](https://threejs.org/).
-   **Model**: The model was made using Blender and exported as a GLTF.
-   **Textures**: The textures were rendered using Cycles and exported as JPGs. The lighting and shadows were baked into the textures to reduce real-time calculations in the browser.


## Installation

1. Clone the repository

```bash
git clone https://github.com/Jxl-s/portfolio-2024
```

### Running with Docker

Run the container to start the application
```bash
docker compose up
```

### Running with Node.JS
Install the dependencies and start the development server

```bash
cd portfolio-2024
yarn
yarn dev
```

## License

Copyright © 2024 Jia Xuan Li. All rights reserved.