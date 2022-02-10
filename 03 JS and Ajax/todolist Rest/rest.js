document.getElementById("loadTask").onclick =function(){
   loadFromServer('https://jsonplaceholder.typicode.com/todos');
}
function loadFromServer(url){
    fetch(url).then(function(response){
        return response.json();
    }).then(function (data){
        console.log("Test");
        convertArrayForTodoList(data)
    }).catch(function (err){
        console.log(err);
    })
}
function convertArrayForTodoList(DataArray){
    for (let index = 0; index < DataArray.length; index++) {
        todoList.tasks.push({
            name:DataArray[index].title,
            finished: DataArray[index].completed,
            clickedLight: false,
            responsible: "User"+ DataArray[index].userId,
            description: ""
        })
        
    }
    writeTodoList();
}