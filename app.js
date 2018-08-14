/*function car(name, model, owner, year, phone, image) {
    return {
        name, model, owner, year, phone, image
    }
}*/

const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log =(text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('BMW', 'M5', 'Max', 2018, '+7 965 800 37 40', 'images/bmw-m5.jpg'),
    car('Mercedes-Benz AMG', 'E63s', 'Nikolay', 2016, '+7 965 231 12 12', 'images/mb-e63.jpg'),
    car('Nissan', 'Almera Classic', 'Alex', 2008, '+7 921 163 62 93', 'images/almera.jpg')
]


new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index];
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cancel')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'

        },
        filteredCars() {
            const filtered = this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })

            return filtered
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})