# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Important!

When we want to use ``` BrowserRouter ``` or ``` createBrowserRouter ``` we have to do one extra configuration

## For Apache servers

- We have to modify the ``` .htaccess ``` file and write this:

  ```sh
  Options -MultiViews
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^ index.html [QSA,L]
  ```

- If the code above didn´t work try to use this:

  ```sh
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  RewriteBase /
  RewriteRule ^index.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```

## For Vercel

- We have to create the ``` vercel.json ``` file at the root of our project and write this:

```sh
{
  "rewrites": [
    { 
      "source": "/(.*)", 
      "destination": "/index.html" 
    }
  ]
}
```
