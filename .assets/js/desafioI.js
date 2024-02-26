let boton= document.getElementById('boton')
// onclick="getPosts()"
boton.addEventListener("click", ()=>{
    async function getPosts(){
        try{
            let data= await fetch('https://jsonplaceholder.typicode.com/posts');
            let respuesta= await data.json();
            respuesta.forEach(element => {
    
                document.getElementById('post-data').innerHTML=(`${element.title} | ${element.body}`);
                
            });
        } catch (e){
            console.log(e)
        }
    }
    getPosts();
})




// cargarDatos();
// setTimeout(()=> {
//     const promise = new Promise((resolve, reject) => {
//         const value = true;
//         value ? resolve('Información enviada') : reject('Rechazado')
//         })
//         promise.then(resp => console.log(resp))
// },3000)