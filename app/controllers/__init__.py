import os
import glob

from app import app
from flask import render_template

__all__ = [os.path.basename(f)[:-3]
           for f in glob.glob(os.path.dirname(__file__) + "/*.py")]

@app.route('/')
def main():
  return render_template('index.html')
