var typed = new Typed('.typing', {
    strings: [
      "",'website designer!',
      'web developer!',
      'backend developer!',
      'good learner!'
    ],
    loop:true,
    typeSpeed:100,
})


var navList = document.querySelectorAll('.nav li')

for(i=0;i<navList.length;i++){
  const a = navList[i].querySelector('a')
  a.addEventListener('click',()=>{
    for(let j=0;j<i;j++){
      navList[j].querySelector('a').classList.remove("active")
    }
    a.classList.add("active")
  })
}

//calculating age
const MS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;
document.getElementById('age').innerText = Math.floor((new Date() - new Date('2002/03/03')) / MS_IN_YEAR);

//calculating age based on server date to avoid false local system date (not working in netlify hosting)
// fetch('https://worldtimeapi.org/api/timezone/Etc/UTC')
//   .then(response => response.json())
//   .then(data => {
//       const serverDate = new Date(data.utc_datetime);
//       const MS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;
//       document.getElementById('age').innerText = Math.floor((serverDate - new Date('2002/03/03')) / MS_IN_YEAR);
//   })
//   .catch(error => console.error('Error fetching NTP time:', error));
  