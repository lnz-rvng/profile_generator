const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? `, (name) => {
  console.log(`What a great name ${name} \n`);
  rl.question(`What's an activity you like doing? `, (activity) => {
    console.log(`${activity} sounds fun \n`);
    rl.question(`What do you listen to while doing that? `, (listen) => {
      console.log(`${listen} is amazing \n`);
      rl.question(`Which meal is your favourite? (eg: dinner, brunch, etc.) `, (meal) => {
        console.log(`${meal} sounds reasonable \n`);
        rl.question(`What's your favourite thing to eat for that meal? `, (food) => {
          console.log(`${food} sounds so delicious \n`);
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            console.log(`${sport} sounds good \n`);
            rl.question(`In a few words, tell us what you are amazing at! `, (character) => {
              console.log(`Your answer: ${character} \n`);
              
              console.log(`${name} loves ${activity} while listening to ${listen}, eating ${meal} with they're favorite food which is/are ${food}, likes ${sport} over any sport, ${character} is what they're good at!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


