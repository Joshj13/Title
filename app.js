const userList = document.getElementById('userList');
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submit');

nameInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        submitName();
    }
});

submitButton.addEventListener('click', function () {
    submitName();
});

function submitName() {
    const name = nameInput.value.trim();

    if (name !== '') {
        populateDivs(name);
        nameInput.style.display = 'none'; // Hide the input field
        submitButton.style.display = 'none'; // Hide the submit button
        userList.style.display = 'flex'; // Show the user list
    } else {
        alert('Please enter a valid name.');
    }
}

function populateDivs(name) {
    userList.innerHTML = ''; // Clear the previous content, if any

    for (let i = 0; i < name.length; i++) {
        const character = name[i];

        if (character === ' ') {
            const spaceElement = document.createElement('span');
            spaceElement.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            userList.appendChild(spaceElement);
        } else {
            const listItem = document.createElement('li');
            const divElement = document.createElement('div');
            divElement.textContent = character;

            listItem.appendChild(divElement);
            userList.appendChild(listItem);

            divElement.addEventListener('click', function () {
                this.classList.toggle('clicked'); // Toggle the 'clicked' class when clicked
            });
        }
    }
    
    // Adjust the margin-left of userList
    userList.style.marginLeft = '56px'; // Adjust the value as needed
}
