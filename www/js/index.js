const { learnFromWeb } = require('./src/system/google_brain');
const chalk = require('chalk');

const [cmd, ...args] = process.argv.slice(2);
const target = args.join(' ');

async function main() {
    console.log(chalk.blue.bold("=== 🦾 KROP-CORP OS v3.2 ACTIVATED ==="));
    if (cmd === 'search-learn') {
        console.log(chalk.yellow("🔍 КРОП ищет корм в Google: " + target));
        const msg = await learnFromWeb(target);
        console.log(chalk.green(msg));
    } else {
        console.log("БРО, ПИШИ: node krop.js search-learn 'тема'");
    }
}
main();
