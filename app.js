console.log(`Running app.js...`)
import {series} from 'async';
const {exec} = require('child_process');

series([
 () => exec('npm run build'),
 () => exec('npm run serve')
]); 
