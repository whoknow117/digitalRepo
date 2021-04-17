const {Sequelize} = require('sequelize')


module.exports = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect:"postgres",
        dialectOptions:{

            ssl: {
                rejectUnauthorized: false
            },

        }
    }

)