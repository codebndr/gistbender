# gistbender

To set up and run MongoDB:
```
  sudo mkdir -p /data/db
  sudo chown -R `id -u` /data/db
  mongod --dbpath /data/db
```
To run the server:
```
  pip install -r requirements.txt
  python /app/main.py
```
