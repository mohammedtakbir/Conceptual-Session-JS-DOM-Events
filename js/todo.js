let count = 0;
document.querySelector('#input-btn').addEventListener('click', function(){
    count++;
   const inputValue = document.getElementById('input-Value');
   const input = inputValue.value;
   
   const mainContainer = document.getElementById('content-container');
   const tableContainer = document.createElement('tr');
   tableContainer.innerHTML = `
    <th scope="row">${count}</th>
    <td>${input}</td>
    <td>
        <button class="btn btn-danger delete-btn">Delete</button>
        <button class="btn btn-secondary">Edit</button>
    </td>
   `;
   mainContainer.appendChild(tableContainer);

   const deleteBtn = document.getElementsByClassName('delete-btn');
   for(const button of deleteBtn){
    button.addEventListener('click', function(event){
        console.log(event.target.parentNode.parentNode.style.display='none')
    })
   }







   inputValue.value = '';
})