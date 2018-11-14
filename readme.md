## Requirements

#### Npm

Install Node https://nodejs.org/en/download/. Node ships with NPM so you should be able to use it right away after installation. To test this, open a terminal and type

```
$ npm
```

#### Git

Install Git https://git-scm.com/downloads. When installed, test this by opening a terminal and typing
```
$ git
```

If you get an undefined error something else is wrong.. let me know and we'll sort it :ok_hand:



---
## Setting up your dev environment

In the terminal, navigate to your work folder

```
$ cd work_folder
```

Clone this repo (This is simply the git way of saying download all the code in this repository into your machine). The `&& cd karma-app` means enter that directory after git cloning it
```
$ git clone https://github.com/evthedev/karma.git karma-app && cd karma-app
```

Install dependencies (this basically tells node to download modules like bootstrap, webpack, jquery etc). This may take a couple of minutes
```
$ npm i
```

Start the local server. This does all the work i.e. compiles all the css, adds prefixes for browser compatibility, assembles the partials, and starts a local server and opens a browser page.  Hot Module Reload (HMR) is also enabled so that when css is updated, the changes are automatically applied without needing you to reload the page. Innit awesome :clap:

```
$ npm start
```

---
## Your assignment

There are 5 pages that need styling in `/src/views`. The template designs are really quite simple, (as you'll see in the mocks) there's a nav, body and footer.

The body section is unique to each page, so you'll make body-related changes in the views files themselves.

The nav and footer are common and hence have been pulled out into the `partials` folder, so you change once - it'll take effect in the other pages. For this to be possible, I used Handlebars which is a templating engine, which is why the file extensions in the `views` folder are `.handlebars` instead of `.html`. Don't worry, just save them as such and the compiler will compile them into html files which the browser understands.

Basically the only files you'll need to touch are in the `partials`, `scss` and `views` folders.

---
## Committing your code

Git tracks your changes as soon as you save your first line of code. At the end of the day you'll want to upload your changes to this repo, and to do that you create a feature branch. This ensures your changes stay separate from the master code, and get merged only after I review them.
```
$ git checkout -b features/styling
```
Add your changes
```
$ git add .
```
Commit them
```
$ git commit -am "features/styling style changes"
```
Push them up to this repo
```
$ git push -u origin features/styling
```

I'll then pull your branch down to my local and review them then merge.

### Have fun! :neckbeard: