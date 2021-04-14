const readline= require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('',(answer) => {
    len=answer.length;
    var i;
    for (i=0 ;i<=len;i++){
        console.log(answer.charAt(i));
    }
rl.close();
})