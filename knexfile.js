const path = require('path');

require('dotenv').config();

// "postgresql://postgres@localhost/postgres" what was here before
const {
  DATABASE_URL = 'postgres://yvobzaqe:I5vlhBE6ti9jfzQNbo1p2yPUImeHy_vw@stampy.db.elephantsql.com/yvobzaqe'
} = process.env;

module.exports = {
  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    },
    useNullAsDefault: true
  }
};
