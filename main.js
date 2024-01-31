const form=document.getElementById("form")
const ul=document.getElementById("ul")

let todos=[]

form.addEventListener("submit",function(e){

    e.preventDefault()
   const data= e.target.userInput.value
   todos.push(data)
   localStorage.setItem("todos",JSON.stringify(todos))
   displayItems()

})

function displayItems(){
    ul.innerHTML=""
if(localStorage.getItem("todos"))
   { 
    const x=JSON.parse(localStorage.getItem("todos"))
    todos=x

}
   for (let i = 0; i < todos.length; i++) {
    const element = todos[i];
    const li=document.createElement("li")
    li.textContent=element
    li.addEventListener("click",function(){
        todos=todos.filter((i)=>i !=li.textContent)
      console.log(todos);
      li.remove()
      
    })
    ul.appendChild(li)
   }
   
}
displayItems()
console.log(todos);
