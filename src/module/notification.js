const Notification = () => {
  document.getElementById('error').innerHTML = `<div class ="alert alert-secondary">New score added! Refresh to check it out ;-)</div>`;
};

const Error = () => {
  document.getElementById('error').innerHTML = `<div class="alert alert-danger">'Name and score cannot be empty.Try again :('</div>`
};
