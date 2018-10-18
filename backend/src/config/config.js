module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'blockbuster',
    user: process.env.DB_USER || 'blockbuster',
    password: process.env.DB_PASS || 'blockbuster',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './blockbuster.sqlite'
    }
  }
}
