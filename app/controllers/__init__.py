from bson import SON
from bson.objectid import ObjectId
import os
import glob

from app import app, db
from flask import render_template, request

__all__ = [os.path.basename(f)[:-3]
           for f in glob.glob(os.path.dirname(__file__) + "/*.py")]

@app.route('/')
def main():
  return render_template('index.html')

@app.route('/<sketch_url>', methods=['GET'])
def view_sketch(sketch_url):
    sketch = db.sketches.find_one({
        'url': sketch_url
    })  
    data = {'url': sketch['url'],
            'filename': sketch['filename'],
            'description': sketch['description'],
            'code': sketch['code']
    }   
    return render_template('index.html', name=data['url'], code=data['code'])
