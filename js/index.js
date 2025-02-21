fetch('https://api.escuelajs.co/api/v1/products')
  .then(Response => Response.json())
  .then(data =>{
    let tabla = `<tr>
                   <th>title</th>
                   <th>price</th>
                   <th>description</th>
                   <th>category.name</th>
                 </tr>`

    for(let user of data){
     tabla +=   `<tr>
                    <td>${user.title}</td>
                    <td>${user.price}</td>
                    <td>${user.description}</td>
                    <td>${user.category.name}</td>
                </tr>`
    }  
 
    document.getElementById("tblUsers").innerHTML = tabla
  })