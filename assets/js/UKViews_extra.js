//não consegui fazer o botão e as imagens em Modal funcionarem :(, mas vou deixar os códigos ai mesmo assim.

function showMoreLess(){
document.getElementById('toggle-button').addEventListener('click', function() {
  const textContent = document.getElementById('text-content');
  const button = this;

  if (textContent.classList.contains('expanded')) {
    textContent.classList.remove('expanded');
    button.textContent = 'Show more';
  } else {
    textContent.classList.add('expanded');
    button.textContent = 'Show less';
  }
});
}

function modalImage(){
const thumbnail = document.getElementById('thumbnail');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

thumbnail.addEventListener('click', function () {
  modal.style.display = 'flex';
  modalImage.src = this.src;
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
}

function feedback(){
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário até validação
    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Please, insert your name.';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Please, insert your E-mail.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please, insert a valid E-mail.';
        isValid = false;
    }

    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'Please, type your message.';
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for your feedback!');
        document.getElementById('feedbackForm').reset();
    }
});
}