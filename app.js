const taskBlock = document.querySelector('.task-blc');
const addButton = document.querySelector('.add-btn');
const inputs = document.querySelectorAll('.task-int');

let taskId = 1;

addButton.addEventListener('click', () => {
    inputs.forEach(input => {
        const listItem = document.createElement('li');
        listItem.id = `task-link-${taskId}`;
        listItem.style.width = '100%'
        listItem.style.textTransform = 'capitalizee'
        listItem.innerHTML = ` <li id='task-link'> ${input.value}  <i class='bx bx-x'></i> </li>`;
        taskBlock.appendChild(listItem);

        const closeButton = listItem.querySelector('.bx-x');
        closeButton.addEventListener('click', () => {
            listItem.classList.add('none');
        });

        taskId++;
    });

    inputs.forEach(input => {
        input.value = '';
    });
});
