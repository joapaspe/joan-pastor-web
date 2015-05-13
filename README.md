# Installation

For running the web page in browser, it is required first to download the library dependecies via bower.

For this purpose *NodeJS*, npm and bower are required. Installing it in Ubuntu or other Debian based systems should be something like:

```
sudo aptitude install nodejs npm
npm -g install bower
bower install
```

Bower uses ``node`` executable, in some versions of ubuntu NodeJS is installed as `nodejs`, a quick fix could be a simbolink link:
`sudo ln -s /usr/bin/nodejs /usr/bin/node` or an alias.

# Serving the page
There are diferent ways of serving the web page:
- With Grunt.
- Local folder