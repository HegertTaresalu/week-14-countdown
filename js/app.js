const countDown = document.querySelector(".countDown");
const targetData = new Date("Dec 24, 2021, 00:00:01").getTime();

const interval = setInterval(() =>{
    console.log("tick");
    
    const now =  new Date().getTime();
    console.log(now);

    const timeLeft = targetData - now;
    const days = Math.floor(timeLeft/(1000*60*60*24));
    const hours = Math.floor(timeLeft/(1000*60*60)%24);
    const minutes = Math.floor(timeLeft/(1000*60)%60);
    const seconds = Math.floor(timeLeft/(1000)%60);
    console.log(minutes)


    countDown.innerHTML = `
    <div><span>${days} päeva</span></div>
    <div><span>${hours} tundi</span></div>
    <div><span>${minutes} minutid</span></div>
    <div><span>${seconds} sekundit</span></div>
    `
},1000);