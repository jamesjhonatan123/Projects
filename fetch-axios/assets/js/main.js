/* fetch("pessoas.json")
  .then(response => response.json()) //converte eum objeto javascript
  .then(json => insereJsonNaPagina(json)) */

  axios("pessoas.json")
    .then(response => insereJsonNaPagina(response.data));

function insereJsonNaPagina(json) {
  const table = document.createElement('table');

  for (array of json) {
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerHTML = array.nome;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerHTML = array.idade;
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerHTML = array.salario;
    tr.appendChild(td3);

    table.append(tr);
  }

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
  alternaColor();
}

function alternaColor(){
  const tags = document.getElementsByTagName('td');

  for (let i = 0; i < tags.length; i+=3){

    for(let k = 0; k<=2; k++){
      tags[i].style.backgroundColor = "gray";
      i++;
    }
    
  }

}


