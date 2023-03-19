const chalk = require('chalk');
const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const { log } = console;
const { error } = console;

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on('error', (anError) => {
  error(chalk.yellow.underline(`Gracefully handling our error: ${anError}`));
});

const onBuy = () => {
  log(chalk.gray.bold.underline('I will be removed soon\n'));
};
log(chalk.blue(`We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event\n`));
log(chalk.blue(`We have ${ticketManager.listenerCount('error')} listener(s) for the error event\n`));

ticketManager.on('buy', onBuy);

log(chalk.blue(`We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount('buy')}\n`));
ticketManager.buy('test@email', 20);

ticketManager.off('buy', onBuy);

log(chalk.blue(`We now have: ${ticketManager.listenerCount('buy')} listener(s) for the buy event\n`));
ticketManager.buy('test@email', 20);

ticketManager.removeAllListeners('buy');
log(chalk.blue(`We have ${ticketManager.listenerCount('buy')} listeners for the buy event\n`));
ticketManager.buy('test@email', 20);
log(chalk.magentaBright('The last ticket was bought'));
