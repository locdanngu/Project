//------------------Add-Button------------------------

const addbtn = document.querySelector('.js-add-btn')
const modalAdd = document.querySelector('.js-modal-add')
const modalAddContainer = document.querySelector('.js-modal-add-container')
const modalAddclose = document.querySelector('.js-cancel-confirm')


function showAddModal() {
    modalAdd.classList.add('open')
}

function hideAddModal() {
    modalAdd.classList.remove('open')
}

addbtn.addEventListener('click',showAddModal)
modalAdd.addEventListener('click',hideAddModal)
modalAddclose.addEventListener('click',hideAddModal)
modalAddContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})


