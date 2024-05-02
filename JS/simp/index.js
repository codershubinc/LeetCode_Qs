let str = 'hello dfjc doiui sdifjeuio eiujeuio ejhe jhe wjehd world';
let split 
split = str.split(' ');
let result = [] ;
// make first letter of word upper case
for (const spt of split) {
    res = spt.charAt(0).toUpperCase() + spt.slice(1);
result.push(res);
}

console.log(result);

