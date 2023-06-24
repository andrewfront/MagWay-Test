const burger = () => {
const burgerBtn = document.querySelector('.burger')
const mobileSetion = document.querySelector('.mobile-inner')
burgerBtn.addEventListener('click', () => {
    mobileSetion.classList.toggle('active')
})
}
export default burger