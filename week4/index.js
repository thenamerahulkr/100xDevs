const { Command } = require('commander');
const program = new Command();
program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');
program.command('count_words')
    .description('')
    .argument(  )
