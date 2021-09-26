let button = document.querySelector('.bars')
 console.log(button)
 let ul = document.querySelector('ul')
console.log(ul)
 let count = 0
 console.log(count)
 let X = document.querySelector('.close')

 function showmenu() {
    count += 1
      console.log(count)
      if (document.body.style.maxWidth === '1096px' || count === 1) {
        ul.style.display = 'flex'
        X.style.display = 'flex'
      } else if ( count > 1) {
        count = 0
        ul.style.display = 'none'
        X.style.display = 'none'
      }
  }  
  
    
      
 

 button.addEventListener('click', showmenu)

 function closemenu() {
  ul.style.display = 'none'
  X.style.display = 'none'
 }
 X.addEventListener('click', closemenu)