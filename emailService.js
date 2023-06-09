const chalk = require('chalk');

const { log } = console;

class EmailService {
  // eslint-disable-next-line class-methods-use-this
  send(email) {
    log(chalk.redBright(`Sending email to ${email}`));
  }
}

module.exports = EmailService;
