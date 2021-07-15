const colors = require('./colors');

const log = console.log;

/**
 *  Print a json in terminal
 * @argument {string} json
 * @argument {string} color
 * @argument color of background, default in black;
 *    @example
     log.json({
        a: 'ayrton',
        b: 'lacerda',
      })
 */
function json(json, color) {
  return log(
    `${colors.bg[color || 'black']} \n\n 📬 📬 📬 JSON 📬 📬 📬 \n\n`,
    `${JSON.stringify(json, null, 3)} ${colors.reset}\n`,
    ` \n\n`,
  );
}

/**
 * @argument {string} txt
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function info(txt, conditional) {
  if (conditional) return log(`${colors.fg.cyan}ℹ️  ${txt}  ${colors.reset}\n\n`);

  if (conditional === undefined) return log(`${colors.fg.cyan}ℹ️  ${txt}  ${colors.reset}\n\n`);
}

/**
 * @argument {string} txt
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function warning(txt, conditional) {
  if (conditional) return log(`${colors.fg.yellow}⚠️  ${txt}  ${colors.reset}\n\n`);
  if (conditional === undefined) return log(`${colors.fg.yellow}⚠️  ${txt}  ${colors.reset}\n\n`);
}

/**
 * @argument {string} txt 
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function error(txt, conditional) {
  if (conditional) return log(`${colors.bg.red}🆘  ${txt}  ${colors.reset}\n\n`);

  if (conditional === undefined) return log(`${colors.bg.red}🆘  ${txt}  ${colors.reset}\n\n`);
}

/**
 * @argument {string} txt
 * @argument conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function success(txt, conditional) {
  if (conditional) return log(`${colors.fg.green}✅  ${txt}  ${colors.reset}\n\n`);

  if (conditional === undefined) return log(`${colors.fg.green}✅  ${txt}  ${colors.reset}\n\n`);
}

module.exports = {
  info,
  json,
  warning,
  error,
  success,
};
