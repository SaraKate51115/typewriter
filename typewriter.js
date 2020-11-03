const sentence = "hello sunshine!!!";
let delay = 0;
 
    for (let char of sentence) {
      setTimeout(() => {
       process.stdout.write(char)
      }, delay);
      delay += 200;
    }

    setTimeout(() => {
      console.log('')
    }, delay);
  

