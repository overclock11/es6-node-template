const Hotels =  require('./modules/hotels/HotelsBoot');
const hotels = new Hotels();

class Modules {
    static registerRoutes(app) {
        app.use('/api',hotels.setup());
    }
}

module.exports = Modules;