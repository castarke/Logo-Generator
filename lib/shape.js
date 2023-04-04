// creating parent class of shape
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }
}
// creating circle class with circle dimensions
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    // rendering circle dimensions
    renderShapes() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
    // rendering text on shape
    renderText() {
        if (this.text.length > 3) {
            throw new Error("Please use no more than 3 characters");
        }
        return `<text x="150" y="123" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    // rendering shape to SVG
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShapes()}${this.renderText()}</svg>`;
    }
}
// creating a triangle class with triangle dimensions
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    // rendering triangle dimensions
    renderShapes() {
        return `<polygon points="150, 18 250, 180 56, 182" fill="${this.shapeColor}" />`;
    }
    // rendering text
    renderText() {
        if (this.text.length > 3) {
            throw new Error("Please use no more than 3 characters");
        }
        return `<text x="150" y="150" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    // rendering shape to SVG
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShapes()}${this.renderText()}</svg>`;
    }
}
// creating square class with square dimensions
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    // rendering square dimensions
    renderShapes() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
    // rendering text into shape
    renderText() {
        if (this.text.length > 3) {
            throw new Error("Please use no more than 3 characters");
        }
        return `<text x="150" y="123" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    // rendering specific shape SVG
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShapes()}${this.renderText()}</svg>`;
    }
}
// exporting all the classes
module.exports = { Shape, Circle, Triangle, Square };