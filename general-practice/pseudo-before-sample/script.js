let todoList = document.querySelector('.todo > ul');
todoList.addEventListener('click' , (event)=>{
    console.log('event ' , event);
    if(event.target.tagName ==='LI'){
        event.target.classList.toggle('done');
    }
});