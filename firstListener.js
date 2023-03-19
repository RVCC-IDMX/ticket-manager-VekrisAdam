const chalk = require('chalk');
const TicketManager = require('./ticketManager');

const { log } = console;

const ticketManager = new TicketManager(10);

ticketManager.once('buy', () => {
  log(chalk.blueBright('Someone bought a ticket!'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);
