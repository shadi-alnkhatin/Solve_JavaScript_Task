
function AddItemToList(){
    const AddInput = document.getElementById("addInput");
    const ErrorText = document.getElementsByClassName("error")[0];
    const listItems= document.getElementsByClassName('listItems')[0];

    if (AddInput.value.trim()==='')
    {
        ErrorText.style.display="block";
    }
    else
    {
        ErrorText.style.display="none";

        const liElement= document.createElement("li");
        liElement.textContent = addInput.value;

        const DeleteButton=document.createElement("button");
        DeleteButton.textContent = "Delete";
        DeleteButton.setAttribute("class","delete");

        listItems.appendChild(liElement);
        liElement.appendChild(DeleteButton);
        AddInput.value = '';

        DeleteButton.addEventListener('click', function() {
            listItems.removeChild(liElement);
        });

    }
}