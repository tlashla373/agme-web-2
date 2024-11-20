// JavaScript to toggle between Sign Up and Log In tabs
function showTab(tabId) {
    // Remove 'active' class from all tab buttons and form contents
    const tabButtons = document.querySelectorAll('.tab-btn');
    const formContents = document.querySelectorAll('.form-content');

    tabButtons.forEach(button => button.classList.remove('active'));
    formContents.forEach(form => form.classList.remove('active'));

    // Add 'active' class to the clicked tab and its corresponding content
    document.querySelector(`#${tabId}`).classList.add('active');
    event.currentTarget.classList.add('active');
}
