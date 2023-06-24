const modal = () => {
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal-close_btn')
const requestBtn = document.querySelectorAll('.leave-request')
requestBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.add('showmodal')
    })
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('showmodal')
})
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('showmodal')) {
        modal.classList.remove('showmodal')
    }
})
}
export default modal