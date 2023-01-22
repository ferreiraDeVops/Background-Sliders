import '../styles/index.css'

const hello = ()=>console.log(`Its works ${1+1}`)
 hello()
 const body = document.body

 const slides = document.querySelectorAll(".slide")
  
 const leftBtn = document.getElementById(`left`)
 const rigthBtn = document.getElementById("right")
 
 let activeSlide = 0
 
 function botãoRigth () {
         rigthBtn.addEventListener('click', () => {
                 activeSlide ++
                 console.log("Botão rigth Numero do contador: " + activeSlide + `\n`)
                 if (activeSlide > slides.length - 1) {
                   activeSlide = 0
                 }
                 setBgToBody()
                 setActiveSlide()       
         })
 }
 
 
 function botãoLeft(){
         leftBtn.addEventListener('click', () => {
                 activeSlide --
                 console.log("Botão left Numero do contador: " + activeSlide + `\n`)
               
                 if (activeSlide < 0) {
                   activeSlide = slides.length - 1
                 }
                 setBgToBody()
                 setActiveSlide() 
         })
 }
 
 setBgToBody()
 
 // aqui esta sendo alterado o body
 function setBgToBody() {
                         //background recebe =  slide no indice vai ser o backgrand       
         body.style.backgroundImage = slides[activeSlide].style.backgroundImage
 }
 // mudando o slide
 function setActiveSlide() {
 
         // percorer o array de slides  com um callback 
         //passando removendo a classList 
         slides.forEach((slide) => slide.classList.remove('active'))
         slides[activeSlide].classList.add('active')
 }
 
 function menu(){
         botãoLeft()
         botãoRigth()
 }
 menu()