# Atlas 3 Frontend

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Setup Guide

This project was set up with NodeJS v20.11.0 LTS with yarn.
1. Install packages
    ```shell
    yarn
    ```
2. Create a file `.env.development.local` in root folder with the following information
   ```text
   VITE_IGNORE_MSW=false
   ```
   If you would like to ignore mock service worker, set it to `true`.
3. Create another file `.env.test.local` in root folder with same content as above
4. Run the development server
    ```shell
    yarn dev
    ```

## Dependencies

We shall be using these packages

1. [React Query](https://query.gg/?s=tanstack) for data fetching.
2. [Mock Service Worker](https://mswjs.io/) to isolate develop on the frontend. You don't have to worry about backend code.
3. [date-fns](https://date-fns.org/) for any date related data processing.

Please look up the documentation on their websites for intended uses and best practices.

## Vite + Typescript + React

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
