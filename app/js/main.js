window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const menuToggle = document.querySelector('.menuToggle') 
const navigation = document.querySelector('.navigation')

toggleMenu =() => {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')

}