from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    name = "John"  # Example data to pass to the template
    return render_template('index.html')

@app.route('/camera')
def camera():
  # Example data to pass to the template
    return render_template('camera.html')

if __name__ == '__main__':
    app.run(debug=True,port=8000)
