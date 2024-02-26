let boton = document.getElementById("boton");
let postData = document.getElementById("post-data");

boton.addEventListener("click", () => {
  async function getPosts() {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      let respuesta = await data.json();
      let post = "";
      respuesta.forEach((element) => {
        post += `<ul class="lista p-4 mx-auto my-3 col-5"><li><h3>${element.title}</h3><p>${element.body}</p></li></ul>`;
      });
      postData.innerHTML = post; //Debe estar fuera del forEach porque modifica el DOM en una sola vuelta y no en varias
    } catch (e) {
      console.log(e);
    }
  }
  getPosts();
});

// cargarDatos();
// setTimeout(()=> {
//     const promise = new Promise((resolve, reject) => {
//         const value = true;
//         value ? resolve('Información enviada') : reject('Rechazado')
//         })
//         promise.then(resp => console.log(resp))
// },3000)
