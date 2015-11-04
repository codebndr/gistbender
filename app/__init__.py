from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)
app.debug = True

# connect to local database on default host and port
client = MongoClient('localhost',27017)
db = client['gistbender']

from app.controllers import *
