# Gistbender

Gistbender is a web based application allowing for effortless testing and sharing of Arduino sketches directly from the browser (similar to Github's [Gist](https://gist.github.com/)). 

It is built on the [Flask](http://flask.pocoo.org/) framework, using [MongoDB](https://www.mongodb.org/) for the database.

## Features
* Utilizes the codebender compilerflasher to provide:
  * Compilation of Arduino sketches
  * Upload to Arduino devices
  * Console output
* Unique URL generation for sharing
* Workspace for editing sketches
* _Work in progress:_ Chrome extension for identifying and capturing Arduino code in the current browser window


## General

Gistbender is currently configured to run on a local machine.

#### To run locally:

Set up and run MongoDB
```
  sudo mkdir -p /data/db
  sudo chown -R `id -u` /data/db
  mongod --dbpath /data/db
```
Run the server
```
  pip install -r requirements.txt
  python /app/main.py
```
Open a browser and navigate to
```
  localhost:8080
```
