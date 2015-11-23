from bson import SON
from bson.objectid import ObjectId
from app import app, db
from flask import jsonify, request
import hashlib

@app.route('/api/sketches', methods=['POST'])
def add_sketch():
    url = request.form.get('url', '')
    filename = request.form.get('filename', '')
    description = request.form.get('description', '')
    code = request.form.get('code', None)

    if not code:
        return 'You forgot to paste your sketch!', 400

    hashUrl = hashlib.sha1((code + filename + description).encode("UTF-8")).hexdigest();
    hashUrl[:10]
    print(hashUrl[:10])

    db.sketches.insert({
        'url': hashUrl[:10],
        'filename': filename,
        'description': description,
        'code': code
    })
    return hashUrl[:10]
    #return 'OK', 200

@app.route('/api/sketches/<url_str>', methods=['GET'])
def get_sketch_by_url(url_str):
    sketch = db.sketches.find_one({
        'url': url_str
    })
    data = {'url': sketch['url'],
            'filename': sketch['filename'],
            'description': sketch['description'],
            'code': sketch['code']
    }
    #db.sketches.remove()
    return jsonify(**data)
   # return 'OK', 200
