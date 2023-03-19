const chalk = require('chalk');

const { log } = console;

class DatabaseService {
  // eslint-disable-next-line class-methods-use-this
  save(email, price, timestamp) {
    log(chalk.greenBright(`Running query: INSERT INTO ordered VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})\n`));
  }
}

module.exports = DatabaseService;
