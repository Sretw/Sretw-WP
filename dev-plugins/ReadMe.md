# Introduction

---

This directory contain all source code for customized plugins
that can be installed in Wordpress website.

# Plugin development setup

---

- Download and install [Node.js](https://nodejs.org)
- Download and install [Docker](https://www.docker.com/)
- Run command `npm -g install @wordpress/env` in terminal
- Run command `npx @wordpress/create-block@latest [your-plugin-name] --variant=dynamic` within
  this directory in terminal. **[your-plugin-name]** is the plugin name you are going to create/develop.
  This will create a folder with your plugin name contain all necessary files for plugin development.
  **--variant=dynamic** means this plugin is dynamic block rendering but can also use static block rendering.
- While in this directory, use command in terminal and go to your plugin directory. (e.g `cd [your-plugin-name]`)
- Make sure docker is runing and then run command `wp-env start` which will setup an wordpress development environment
  where you can test your plugin
- After environment start up run command `npm run start` to start watching files changed
- Your ready to start your plugin development

Start your first block development [here](https://developer.wordpress.org/block-editor/getting-started/tutorial/#what-youre-going-to-build).

# Deploy plugin

---

- Go to the plugin directory
- Run command `npm run plugin-zip` this will generate a **.zip** compressed file of the plugin
- The compressed **.zip** file can now be installed under wordpress plugin section inside admin page

**Note**: [plugin-name].php file under a plugin folder is where your can change plguin metadata.

# Extra

---

- [Gutenberg](https://storybook.js.org/showcase/wordpress-gutenberg) is used to develop plugin and it contain
  many of components for building a plugin
