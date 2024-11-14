/* Get the task manager container element */
const task_manager = document.getElementById('taskManagerContainer');
/* Add an event listener to handle form submission */
task_manager.addEventListener('submit', handleSubmit);

/**
* DOCU: This function is used to handle the submission added task. <br>
* This is being called when user clicks the "Add Task" button. <br>
* Triggered: When user clicks the "Add Task" button.  <br>
* Last Updated Date: November 14, 2024 <br>
* @function
* @param {event} event - The event that triggered the function
* @author Cesar
*/
function handleSubmit(event){
    event.preventDefault();

    /* Get the input field and its current value */
    const task_input = document.getElementById('task_input');
    const task_input_value = task_input.value.trim();

    /* Get the task list where new tasks will be added */
    const task_list = document.getElementById('task_list');

    /* Check if the task_input_value is not empty */
    if(task_input_value !== ''){
        /* Create a new list item to hold the task */
        const task_list_item = document.createElement('li');
        /* Set the text of the list item to the task input value */
        task_list_item.textContent = task_input_value; 

        /* Create a "Delete" button for each task */
        const remove_button = document.createElement('button');
        remove_button.textContent = 'Delete';
        
        /* Add an event listener to the "Delete" button to remove the task when clicked */
        remove_button.addEventListener('click', function() {
            /* Remove the selected list item */
            task_list.removeChild(task_list_item);

            /* If there are no more tasks, show the "No Task Added Yet" message again */
            if (task_list.children.length === 0) {
                document.getElementById('no_task_text').style.display = 'block';
            }
        });

        /* Append the "Delete" button to the task list item */
        task_list_item.appendChild(remove_button);

        /* Append the new task list item (with the "Delete" button) to the task list */
        task_list.appendChild(task_list_item);

        /* Hide the "No Task Added Yet" text when tasks are added */
        document.getElementById('no_task_text').style.display = 'none';
    }

    /* Clear the task_input field */
    task_input.value = '';
}