document.addEventListener('DOMContentLoaded', (event) => {
    loadReviews();
});

document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let bookId = document.getElementById('bookId').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let mark = document.getElementById('mark').value;
    let opinion = document.getElementById('opinion').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    let review = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mark: mark,
        opinion: opinion
    };

    saveReview(bookId, review);
    addReviewToTable(review);

    document.getElementById('reviewForm').reset();
});

function saveReview(bookId, review) {
    let reviews = JSON.parse(sessionStorage.getItem(bookId)) || [];
    reviews.push(review);
    sessionStorage.setItem(bookId, JSON.stringify(reviews));
}

function loadReviews() {
    let bookId = document.getElementById('bookId').value;
    let reviews = JSON.parse(sessionStorage.getItem(bookId)) || [];
    reviews.forEach(review => addReviewToTable(review));
}

function addReviewToTable(review) {
    let table = document.getElementById('reviewsTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    let firstNameCell = newRow.insertCell(0);
    let lastNameCell = newRow.insertCell(1);
    let emailCell = newRow.insertCell(2);
    let markCell = newRow.insertCell(3);
    let opinionCell = newRow.insertCell(4);

    firstNameCell.innerHTML = review.firstName;
    lastNameCell.innerHTML = review.lastName;
    emailCell.innerHTML = review.email;
    markCell.innerHTML = review.mark;
    opinionCell.innerHTML = review.opinion;
}
