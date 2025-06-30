const argList = process.argv.slice(2);
const args = {};
 
for (const str of argList) {
    const [key, value] = str.split('=');
    
    if (key && value && key.startsWith('--')) {
    console.log(key, value);
    args[key.slice(2)] = value;
    }
}

console.log(args);


export const PORT = 5517;