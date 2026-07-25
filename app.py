from flask import Flask, render_template

app = Flask(__name__, template_folder="views")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/shop")
def shop():
    return render_template("shop.html")


@app.route("/gallery")
def gallery():
    return render_template("dashboard.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/book")
def book():
    return render_template("book.html", active_page="book")


if __name__ == "__main__":
    app.run(debug=True)