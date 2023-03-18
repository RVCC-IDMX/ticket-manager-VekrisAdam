const chalk = require('chalk');

const { log } = console;

// basic colors
log(chalk.red('Hey, this is dcode!'));
log(chalk.magenta('I am magenta'));
log(chalk.yellow('banana'));

// background colors
log(chalk.bgRed('red background'));
log(chalk.bgGreen('forest'));

// styling and decoration
log(chalk.bold('I am bold'));
log(chalk.underline('I am underlined'));

// method chaining
log(chalk.yellow.bgRed.underline('warning!!!'));
log(chalk.green.bgWhite.bold('what is happening?'));

// Hex and RGB
log(chalk.hex('#009879').bold('dcode green!'));
log(chalk.rgb(20, 200, 50).bold('I wonder what this will be'));
