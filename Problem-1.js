//Problem - 1

function CamelCase(line) {
    const a = line.split(' ');
    const b = [a[0].toLowerCase()];

    for (let i = 1; i < a.length; i++) {
        b.push(a[i][0].toUpperCase() + a[i].substring(1));
    }

    return b.join('');
}

const c = "This is an input sentence";
const x = CamelCase(c);
console.log(x); 