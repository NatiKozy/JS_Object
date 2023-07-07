// Задание 1
// Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker. Выведите в консоль созданный объект.
// Подсказка: имена классов пишем с большой буквы
class Worker {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	fullName(){
		return `${this.surname}, ${this.name}`
	}
}

//Создаём объекта на основе класса Worker
const worker = new Worker('Петя', 'Иванов');
//Выводим созданный объект в консоль
console.log('1', worker);

//Задание 2
//Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя". Создайте объект worker2 на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName

//Создаём объект worker2 на основе класса Worker
const worker2 = new Worker('Вася', 'Пупкин');
//Выводим полное имя объекта worker2 в консоль с помощью метода fullName
console.log('2', worker2.fullName());

//Задание 3
//Создайте класс Car. Класс должен содержать свойства brand, model и year. Создайте на его основе объект car и выведите его свойства в консоль.

class Car {
	constructor(brand, model,year) {
		this.brand = brand;
		this.model = model;
		this.year = year
	}
	getAge() {
		const year = new Date().getFullYear();
		const result = year - this.year;
		return result;
	}
}

const car1 = new Car('Skoda', 'Rapid', 2014);
console.log('3', car1);

//Задание 4
//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска). Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge.

//Создаём объект car2 на основе класса Car
const car2 = new Car('Skoda', 'Octavia', 2010);
//Выводим возраст объекта car2 в консоль с помощью метода getAge
console.log('4', car2.getAge());

//Задание 5
//Создайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе объект rectangle и выведите его свойства в консоль.
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	getArea() {
		const area = this.width * this.height
		return area;
	}
}

const rectangle1 = new Rectangle(20, 50);
console.log('5', rectangle1);

//Задание 6
//Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника (произведение ширины и высоты). Создайте объект rectangle2 на основе класса Rectangle и выведите его площадь в консоль с помощью метода getArea.

const rectangle2 = new Rectangle(60, 30);
console.log('6', rectangle2.getArea());

//Задание 7
//Создайте класс Circle. Класс должен содержать свойство radius. Создайте на его основе объект circle и выведите его свойство в консоль.

class Circle {
	constructor (radius) {
		this.radius = radius;
	}
	calculateArea() {
		const circleArea = this.radius * this.radius * 3.14;
		return circleArea;
	}
}
const circle1 = new Circle(5);
console.log('7', circle1);

//Задание 8
//Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать площадь круга. Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса Circle с радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.

const circle2 = new Circle(3);
console.log('8', circle2.calculateArea());

//Задание 9
//Создайте класс Student. Класс должен содержать свойства name, age и grade. Создайте на его основе объект student и выведите его свойства в консоль.

class Student {
	constructor (name, age, grade) {
		this.name = name;
		this.age = age;
		this.grade = grade;
	}
	increaseGrade() {
		const upGrade = this.grade + 1;
		return upGrade;
	}
}

const student1 = new Student('Полина', 22, 5);
console.log('9', student1);

//Задание 10
//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade и выведите новую оценку в консоль.

const student2 = new Student('Карина', 19, 3);
console.log('10', student2.increaseGrade());

//Задание 11
//Создайте класс Book. Класс должен содержать свойства title, author и year. Создайте на его основе объект book и выведите его свойства в консоль.

class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	getTitleAndAuthor() {
		return `${this.title} - ${this.author}`;
	}
}
const book1 = new Book("Туарег", "Альберто Васкес-Фигероа", 1980);
console.log('11', book1);

//Задание 12
//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку в формате "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его название и автора в консоль с помощью метода getTitleAndAuthor.

const book2 = new Book("Джельсомино в стране лжецов", "Джанни Родари", 1959);
console.log('12', book2.getTitleAndAuthor());

//Задание 13
//Создайте класс BankAccount. Класс должен содержать свойства accountNumber и balance. Создайте на его основе объект account и выведите его свойства в консоль.

class BankAccount {
	constructor(accountNumber, balance) {
		this.accountNumber = accountNumber;
		this.balance = balance;
	}

	deposit() {
		return this.balance + 10000;
	}

	withdraw(amount) {
		if (amount <= this.balance) {
			const amount = 5000;
			return this.balance - amount;
		} else {
			return  'Недостаточно средств';
		}
	}
}
const account1 = new BankAccount(123, 45000);
console.log('13', account1);

//Задание 14
//Добавьте в класс BankAccount метод deposit, который будет увеличивать баланс на заданную сумму. Создайте объект account2 на основе класса BankAccount, пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.

const account2 = new BankAccount(124, 20000);
console.log('14', account2.deposit());

//Задание 15
//В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную сумму. Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". Создайте объект account3 на основе класса BankAccount, попробуйте снять с него сумму, превышающую баланс, и выведите соответствующее сообщение в консоль.

const account3 = new BankAccount(125, 4000);
console.log('15', account3.withdraw());
//Создайте объект account3 на основе класса BankAccount
//Попытайтесь снять сумму, превышающую баланс

//Задание 16
//Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal и выведите его свойства в консоль.

class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}
	makeSound() {
		console.log('17', this.sound);
	}
}
const animal1 = new Animal('лягушка', 'ква-ква');
console.log('16', animal1);
//Задание 17
//Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. Создайте объект animal2 на основе класса Animal и вызовите метод makeSound.

const animal2 = new Animal('комар','ззззз');
animal2.makeSound();

//Задание 18
//Создайте класс Point. Класс должен содержать свойства x и y. Создайте на его основе объект point и выведите его свойства в консоль.
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// Метод getDistance возвращает расстояние от точки до начала координат (0,0)
	getDistance() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}
const point1 = new Point(30, 30);
console.log('18', point1);

//Задание 19
//В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0). Создайте объект point2 на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.

const point2 = new Point(50, 50);
console.log('19', point2.getDistance());

//Задание 20
//Создайте класс Calculator. Класс должен содержать методы add, subtract, multiply и divide, которые будут выполнять соответствующие математические операции над двумя числами и возвращать результат. Создайте объект calculator на основе класса Calculator, вызовите каждый из методов и выведите результаты в консоль.

class Calculator {
	constructor(a, b) {
	this.a = a;
	this.b = b;
	}

	add() {
		return this.a + this.b;
	}

	subtract() {
		return this.a - this.b;
	}

	multiply() {
		return this.a * this.b;
	}

	divide() {
		return this.a / this.b;
	}
}
const calculator = new Calculator(35, 7);
console.log('20', calculator.add());
console.log('20', calculator.subtract());
console.log('20', calculator.multiply());
console.log('20', calculator.divide());

//Задание 21
//Создайте класс Person. Класс должен содержать свойства name, age и city. Создайте на его основе объект person и выведите его свойства в консоль.

class Person {
	constructor(name, age, city) {
		this.name = name;
		this.age = age;
		this.city = city;
	}
	changeCity() {
		return
	}
}

const person1 = new Person('Вика', 35, 'Санкт-Петербург');
console.log('21', person1);

//Задание 22
//Добавьте в класс Person метод changeCity, который будет изменять значение свойства city на новое значение. Создайте объект person2 на основе класса Person, вызовите метод changeCity с аргументом "New York" и выведите новое значение свойства city в консоль.

const person2 = new Person('Алена', 43, 'Москва');

//Задание 23
//Создайте класс Employee. Класс должен содержать свойства name, position и salary. Создайте на его основе объект employee и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект employee и вывести его свойства.

class Employee {
	constructor(name, position, salary) {
		this.name = name;
		this.position = position;
		this.salary = salary;
	}
	calculateBonus(bonus) {
		this.bonus = this.salary * bonus / 100;;
		return this.salary + this.bonus;

	}
}
const employee1 = new Employee('Никита', 'старший менеджер', 75000);
console.log('23', employee1);

//Задание 24
//Добавьте в класс Employee метод calculateBonus, который будет принимать процент бонуса и увеличивать зарплату сотрудника на соответствующую сумму. Создайте объект employee2 на основе класса Employee и вызовите метод calculateBonus с процентом 10. Выведите новую зарплату сотрудника в консоль.
//Подсказка: Используйте метод call или apply, чтобы вызвать метод calculateBonus для объекта employee2 и передать процент бонуса.

const employee2 = new Employee('Елена', 'менеджер', 45000);
console.log('24',employee2);
console.log('24',employee2.calculateBonus(10));

//Задание 25
//Создайте класс Product. Класс должен содержать свойства name, price и quantity. Создайте на его основе объект product и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект product и вывести его свойства.

class Product {
	constructor(name, price, quantity){
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	calculateTotalPrice(){
		return this.price * this.quantity;
	}
}
const product1 = new Product('куртка', 7999, 3);
console.log('25', product1);

//Задание 26
//Добавьте в класс Product метод calculateTotalPrice, который будет возвращать общую стоимость продукта (произведение цены на количество). Создайте объект product2 на основе класса Product с ценой 10 и количеством 5. Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.

const product2 = new Product('юбка', 10, 5);
console.log('26', product2.calculateTotalPrice());

//Задание 27
//Создайте класс Triangle. Класс должен содержать свойства side1, side2 и side3, которые представляют длины сторон треугольника. Создайте на его основе объект triangle и выведите его свойства в консоль.

class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}
	calculatePerimeter() {
		const perimeter = this.side1 + this.side2 + this.side3;
		return perimeter;
	}
}

const triangle1 = new Triangle(10, 10, 20);
console.log('27', triangle1);

//Задание 28
//Добавьте в класс Triangle метод calculatePerimeter, который будет возвращать периметр треугольника (сумма длин всех сторон). Создайте объект triangle2 на основе класса Triangle со сторонами 3, 4 и 5. Выведите периметр треугольника в консоль с помощью метода calculatePerimeter.

const triangle2 = new Triangle(3, 4, 5);
console.log('28', triangle2.calculatePerimeter());

//Задание 29
//Создайте класс Square. Класс должен содержать свойство side, представляющее длину стороны квадрата. Создайте на его основе объект square и выведите его свойство в консоль.

class Square {
	constructor(side) {
		this.side = side;
	}
	calculateArea() {
		const area = this.side * this.side;
		return area;
	}
}
const square1 = new Square(7);
console.log('29', square1);

//Задание 30
//Добавьте в класс Square метод calculateArea, который будет вычислять и возвращать площадь квадрата (произведение длины стороны на саму себя). Создайте объект square2 на основе класса Square со стороной 5 и выведите его площадь квадрата в консоль с помощью метода calculateArea.

const square2 = new Square(5);
console.log('30', square2.calculateArea());


class Superworker {
	constructor(name, rate, days) {
	this.name = name;
	this.rate = rate;
	this.days = days;
	}
	getSalary() {
		const salary = this.rate * this.days;
		return salary;
	}
}
const superworker = new Superworker ('Евлампий', 5500, 21);
console.log('с платформы', superworker.getSalary());