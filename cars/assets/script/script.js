const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://avatars.mds.yandex.net/get-autoru-vos/2056688/aff28c87b676be0da530f0e4275eb1ae/1200x900n'
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getInfo() {
        return {
            type:this.type,
            brand: this.brand
    }
}
    getImg() {
        return this.image;
    }

    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(type, price, brand, image, doors) {
        super(type, price, brand, image);
        this.doors = doors;
    }

    getDoorsCount() {
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, image, maxSpeed) {
        super(type, price, brand, image);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }
}

//Автомобили
const cars = data
.filter(item => item.type === 'car')
.map(({type, price, brand, image, doors}) => new Car(type, price, brand, image, doors));
console.log(cars);

const carsSection = document.querySelector(".cars");

function createCarSection(car) {
    let carDiv = document.createElement('li');
    carDiv.classList.add('car');
    carsSection.append(carDiv);

    let carTitle = document.createElement('h3');
    carTitle.classList.add('car__title');
    carTitle.textContent = car.getInfo().brand;
    carDiv.append(carTitle);

    const carImage = document.createElement('img');
    carImage.classList.add('car__image');
    carImage.setAttribute('src', car.getImg());
    carDiv.append(carImage);

    const carDoors = document.createElement('p');
    carDoors.classList.add('car__doors');
    carDoors.innerText = `Количество дверей: ${car.getDoorsCount()}`;
    carDiv.append(carDoors);

    const carPrice = document.createElement('p');
    carPrice.classList.add('car__price');
    carPrice.textContent = `Цена: ${car.getPrice()} руб.`;
    carDiv.appendChild(carPrice);
}

cars.forEach((car)=> createCarSection(car));

//Мотоциклы
const bikes = data
.filter(item => item.type === 'bike')
.map(({type, price, brand, image, maxSpeed}) => new Bike(type, price, brand, image, maxSpeed));
console.log(bikes);

const bikesSection = document.querySelector(".bikes");

function createBikeSection(bike) {
    let bikeDiv = document.createElement('li');
    bikeDiv.classList.add('bike');
    bikesSection.append(bikeDiv);

    let bikeTitle = document.createElement('h3');
    bikeTitle.classList.add('bike__title');
    bikeTitle.textContent = bike.getInfo().brand;
    bikeDiv.append(bikeTitle);

    const bikeImage = document.createElement('img');
    bikeImage.classList.add('bike__image');
    bikeImage.setAttribute('src', bike.getImg());
    bikeDiv.append(bikeImage);

    const bikeSpeed = document.createElement('p');
    bikeSpeed.classList.add('bike__speed');
    bikeSpeed.innerText = `Максимальная скорость: ${bike.getMaxSpeed()}`;
    bikeDiv.append(bikeSpeed);

    const bikePrice = document.createElement('p');
    bikePrice.classList.add('bike__price');
    bikePrice.textContent = `Цена: ${bike.getPrice()} руб.`;
    bikeDiv.append(bikePrice);
}

bikes.forEach((bike)=> createBikeSection(bike));
