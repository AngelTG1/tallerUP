//obtenemos la informacion del archivo JSON
fetch("data.json").
then(response => response.json()).
then(data => {
    let ul = document.createElement("ul");
    ul.className = "my-ul"
    const container = document.getElementById("container");

    //nueva tarea
    let ul2 = document.createElement("ul");
    //Mapeamos los datos del archivo
    data.students.forEach(element => {
        console.log("La persona: ", element.name)
    
        let item = document.createElement("item");
        item.className = "my-item"
        item.textContent = element.name;
        ul.appendChild(item);
        container.appendChild(ul);

        let item2 = document.createElement("item");
        item2.textContent = element.age;
        ul2.appendChild(item2)
        container.appendChild(ul2)
    
    });
});
