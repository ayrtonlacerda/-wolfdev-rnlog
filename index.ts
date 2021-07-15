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
function json(json: string, color: string) {
  return log(
    `${colors.bg[color || 'black']} \n\n 📬 📬 📬 JSON 📬 📬 📬 \n\n`,
    `${JSON.stringify(json, null, 3)} ${colors.reset}\n`,
    ` \n\n`,
  );
}

/**
 * @argument {string} txt
 * @argument {boolean} conditional that defines whether or not to show the log;
 *    @example
     log.info('testando todos os logs', anyVar === yes)
 */
function info(txt: string, conditional: boolean) {
  if (conditional) return log(`${colors.fg.cyan}ℹ️  ${txt}  ${colors.reset}\n\n`);

  if (conditional === undefined) return log(`${colors.fg.cyan}ℹ️  ${txt}  ${colors.reset}\n\n`);
}

/**
 * @argument {string} txt
 * @argument {boolean}  conditional that defines whether or not to show the log;
 *    @example
     log.warning('testando todos os logs', anyVar === yes)
 */
function warning(txt: string, conditional: boolean) {
  if (conditional) return log(`${colors.fg.yellow}⚠️  ${txt}  ${colors.reset}\n\n`);
  if (conditional === undefined) return log(`${colors.fg.yellow}⚠️  ${txt}  ${colors.reset}\n\n`);
}

/**
 * @argument {string} txt 
 * @argument {boolean} conditional that defines whether or not to show the log;
 *    @example
     log.error('testando todos os logs', anyVar === yes)
 */
function error(txt: string, conditional: boolean) {
  if (conditional) return log(`${colors.bg.red}🆘  ${txt}  ${colors.reset}\n\n`);

  if (conditional === undefined) return log(`${colors.bg.red}🆘  ${txt}  ${colors.reset}\n\n`);
}

/**
 * @argument {string} txt
 * @argument {boolean} conditional that defines whether or not to show the log;
 *    @example
     log.success('testando todos os logs', anyVar === yes)
 */
function success(txt: string, conditional: boolean) {
  if (conditional) return log(`${colors.fg.green}✅  ${txt}  ${colors.reset}\n\n`);

  if (conditional === undefined) return log(`${colors.fg.green}✅  ${txt}  ${colors.reset}\n\n`);
}

/**
  configure logs within the console for global use, no need to import the package into each file
    @example
    console.success('testando todos os logs', anyVar === yes)
    console.info('testando todos os logs', anyVar === yes)
    console.error('testando todos os logs', anyVar === yes)
    console.warning('testando todos os logs', anyVar === yes)
    console.json({
        a: 'ayrton',
        b: 'lacerda',
      })
*/
function config() {
  console.json = json
  console.error = error
  console.info = info
  console.warning = warning
  console.success = success
}

module.exports = {
  info,
  json,
  warning,
  error,
  success,
  config
};
