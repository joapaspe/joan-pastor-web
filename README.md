# My personal webpage
I use this webpage for trying and get fun with new technologies. I build this webpage from the scratch using mainly
        AngularJs, bootstrap and other libraries. The code of the webpage is also available
        
## Installation

For running the web page in browser, it is required first to download the library dependecies via bower.

For this purpose *NodeJS*, npm and bower are required. Installing it in Ubuntu or other Debian based systems should be something like:

```
sudo aptitude install nodejs npm
npm -g install bower
npm install -g grunt-cli
bower install
```

Bower uses ``node`` executable, in some versions of ubuntu NodeJS is installed as `nodejs`, a quick fix could be a simbolink link:
`sudo ln -s /usr/bin/nodejs /usr/bin/node` or an alias.

## Serving the page
There are diferent ways of serving the web page:

### With Grunt.
  ```grunt serve ```

### A local server
You can put the app folder under a webserver (Apache, nodejs webserver...), or even open the index.html with a web browser.

## Building the page and publishing the page
Grunt provides a building tool for generating a light and optimized webpage to put it in a server. Also it is possible to copy
the app folder in to a server (not recommended).

For building with grunt run the command `grunt build`, this generate the dist folder with the compiled web :)

## Forking, cloning and copying
> Wow this webpage it is cool! I want to copy it and do my own webpage, maybe I change the color...

No problem bro, just clone or fork the projects and fill the gaps with your CV. Take what you want and I hope you could get new ideas.

> This webpage it's ugly. Colors are blinding, the layout it's awful.
I know :( Comments where are welcome to improve it.


