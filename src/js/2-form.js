const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', inputText);
function inputText(event) {
  formData.email = feedbackForm.email.value.trim();
  formData.message = feedbackForm.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}

if (localStorage.getItem('feedback-form-state')) {
  formData.email = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  formData.message = JSON.parse(localStorage.getItem('feedback-form-state')).message;

  feedbackForm.email.value = formData.email;
  feedbackForm.message.value = formData.message;
}






