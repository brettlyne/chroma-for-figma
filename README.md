# chroma-for-figma

Multi-hued multi-stop color scales tool adapted for Figma from gka.github.io/palettes/ by [Gregor Aisch](https://www.vis4.net/).

---

### Scripts Documentation

#### build:code

- Runs the TypeScript compiler (`tsc`) to build the main plugin code.ts
- Usage: `npm run build:code`

#### build:ui

- Description: This script uses Vite to build the UI.
- Usage: `npm run build:ui`

#### build:code:watch

- Description: This script runs the TypeScript compiler (`tsc`) in watch mode to continuously build the code as changes are made.
- Usage: `npm run build:code:watch`

#### build:ui:watch

- Description: This script uses Vite in watch mode to continuously build the UI as changes are made.
- Usage: `npm run build:ui:watch`

#### build:ui:dev:watch

- Description: This script uses Vite in watch mode with the **development mode enabled** to continuously build the UI as changes are made.
- Usage: `npm run build:ui:dev:watch`

#### build:watch

- Description: This script runs both `build:ui:watch` and `build:code:watch` concurrently to continuously build both the UI and the code as changes are made.
- Usage: `npm run build:watch`

#### build

- Description: This script runs both `build:ui` and `build:code` sequentially to build both the UI and the code.
- Usage: `npm run build`

#### dev:ui

- Description: This script uses Vite to start a development server to test the UI in the browser outside of Figma.
