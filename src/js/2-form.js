const refs = {
  formFeedback: document.querySelector('.feedback-form'),
  input: document.querySelector("input[name='email']"),
  textarea: document.querySelector("textarea[name='message']"),
};

const newDiv = document.createElement('div');
newDiv.classList.add('form-container');

refs.formFeedback.parentNode.insertBefore(newDiv, refs.formFeedback);
newDiv.appendChild(refs.formFeedback);

let formData = {
  email: '',
  message: '',
};

const fillFormFields = formFeedback => {
  const formLsData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formLsData === null) {
    return;
  }
  formData = formLsData;
  const formDataKeys = Object.keys(formLsData);
  formDataKeys.forEach(key => {
    refs.formFeedback.elements[key].value = formLsData[key];
  });
};

fillFormFields(refs.formFeedback);

const onFormFieldChange = ({ target: formField }) => {
  const fieldName = formField.name;
  const fieldValue = formField.value;
  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  if (refs.input.value === '' || refs.textarea.value === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-on-state');
  event.currentTarget.reset();
};
refs.formFeedback.addEventListener('input', onFormFieldChange);
refs.formFeedback.addEventListener('submit', onFeedbackFormSubmit);
