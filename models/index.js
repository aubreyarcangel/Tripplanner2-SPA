//!!sequelizerequire
const Sequelize = require('sequelize');

//!!sequelizedb
const db = new Sequelize('postgres://localhost:5432/tripplanner', {
    logging: false
});

const Place = db.define('place',
    {/**/
        address:{
            type:Sequelize.STRING,
            allowNull:false
        },
        city:{
            type:Sequelize.STRING,
            allowNull:false},
        state:{
            type:Sequelize.STRING,
            allowNULL:false
        },
        phone:{
            type:Sequelize.STRING,
            allowNull:false},
        location:{
            type:Sequelize.ARRAY(Sequelize.DOUBLE),
            allowNull:false}
        },
    {/*hooks,etc*/})


const Hotel = db.define('hotel',{
    name:{
            type:Sequelize.STRING,
            allowNull:false},
    num_stars:{
            type:Sequelize.INTEGER,
            allowNull:false,
        validate:{
            min:1.0,
            max:5.0}
        },
    amenities:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{/*hooks,etc*/})

const Activity = db.define('activity',{
    name:{
            type:Sequelize.STRING,
            allowNull:false},
    age_range:{
            type:Sequelize.STRING
    }
},{/*hooks,etc*/})

const Restaurant = db.define('restaurant',{
    name:{
            type:Sequelize.STRING,
            allowNull:false},
    cuisine:{
            type:Sequelize.STRING,
            allowNull:false},
    price:{
        type:Sequelize.INTEGER,
        allowNull:false,
        validate:{
            min:1,
            max:5
        }
    }
},{/*hooks,etc*/})

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);


module.exports = {
    db:db,
    Place,
    Hotel,
    Activity,
    Restaurant
};
