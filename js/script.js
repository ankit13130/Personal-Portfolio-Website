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