# gistbender

To run Mongo:
  mkdir -p /data/db
  chmod 0777 /data
  chmod 0777 /data/db
  mongod --dbpath /data/db

To run the server:
  pip install -r requirements.txt
  python /app/main.py
