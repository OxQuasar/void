
// Get the current blockchain time
// One epoch duration should be 15 min

theTime = Date.now();
formatTime = Math.trunc(Date.now() / 1000);

epochDuration = 15*60; // 15 min *60 seconds

console.log(theTime);
console.log(formatTime);

console.log(epochDuration);
