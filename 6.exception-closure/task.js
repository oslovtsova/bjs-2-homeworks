/*            Задача 1            */

function parseCount(number) {
	let result = Number.parseFloat(number);
	if (Number.isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}

/*            Задача 2            */

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b <= c) || (a + c <= b) || (c + b <= a)) {
			throw new Error("Треугольник c такими сторонами не существует");
		}
	}

	get perimeter(a, b, c) {
		let perimeter = a + b + c;
		return perimeter;
	}

	get area(a, b, c) {
		let p = this.perimeter / 2;
		return +(Math.sqrt(p * (p - a) * (p - b) * (p - c))).toFixed(3);
	}
}

function getTriangl(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			area() {
				return "Ошибка! Треугольник не существует"
			},
			perimeter() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}