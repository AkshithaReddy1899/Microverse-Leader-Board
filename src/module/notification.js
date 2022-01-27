const Notification = () => {
  document.getElementById('error').innerHTML = `<div class="alert alert-secondary" role="alert">New score added! Refresh to check it out ;-)
</div>`;
};

const Error = () => {
  document.getElementById('error').innerHTML = `<div class="alert alert-danger" role="alert">Name and score cannot be empty.Try again :(
</div>`;
};

export { Notification, Error };