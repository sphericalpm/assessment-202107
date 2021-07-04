const button = document.querySelector('#password-btn')
const input = document.querySelector('#password')

button.addEventListener('click', () => {
  const type = input.getAttribute('type')
  if (type === 'password') {
    input.setAttribute('type', 'text')
    button.classList.add('show')
  } else {
    input.setAttribute('type', 'password')
    button.classList.remove('show')
  }
})