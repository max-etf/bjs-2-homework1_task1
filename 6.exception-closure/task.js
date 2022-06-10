/* task1 */

function parseCount(param) {
    if (isNaN(Number.parseInt(param))) {
        let parseError = new Error ("Невалидное значение");
        throw parseError
    }

    else {
        return Number.parseInt(param);
    }
}

function validateCount(param) {
    let parseResult;
    try {
        parseResult = parseCount(param);
        return parseResult;
    }
    catch (error){
        return error;
    }
}

/* task2 */
class Triangle {
    constructor(a,b,c){
/*         this.a = a;
        this.b = b;
        this.c = c; */
        if (((a + b) < c)||((b + c) < a)||((a + c) < b)) {
            let error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
        else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter();
        p = p / 2;
        return Number.parseFloat((Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c))).toFixed(3));
    }
}

function getTriangle(a,b,c) {
    try { let triangle = new Triangle(a,b,c);
        return triangle;
    } catch (error) {
        let failureTriangle = new Object;
        failureTriangle.getPerimeter = function getPerimeter() {
            return "Ошибка! Треугольник не существует";
        }

        failureTriangle.getArea = function getArea() {
            return "Ошибка! Треугольник не существует";
        }
        return failureTriangle;
    }
  
}

let triangle = getTriangle(12,5,5);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());