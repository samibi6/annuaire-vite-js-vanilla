import * as bootstrap from 'bootstrap';
import './style.scss';
import { data } from './data';
import { nav } from './nav';
data.sort((a, b) => a.nom.localeCompare(b.nom));

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let search = urlParams.get('search')?.toLowerCase() ?? 1;

if(search.length > 0){
  let dataFilter = data.filter((p) => p.nom.toLocaleLowerCase().includes(search) || p.prenom.toLowerCase().includes(search));
  const listePersonnesSearch = () => {
    let html = '';
    for (let i = 0; i < dataFilter.length; i++) {
      const personne = dataFilter[i];
      let personneCard = `
        <a class="card col-5 col-md-3" href="/personne/?id=${personne.id}">
          <img src="${personne.avatar}" class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
          <div class="card-body">
            <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
          </div>
        </a>
      `;
      html += personneCard;
    }
    return html;
  };
  document.querySelector('#app').innerHTML = `
  <main>
    ${nav}

    <div class="container-fluid my-4">
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        ${listePersonnesSearch()}
      </div>
    </div>
  </main>
`;
}else{
  const listePersonnes = () => {
    let html = '';
    for (let i = 0; i < data.length; i++) {
      const personne = data[i];
      let personneCard = `
        <a class="card col-5 col-md-3" href="/personne/?id=${personne.id}">
          <img src="${personne.avatar}" class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
          <div class="card-body">
            <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
          </div>
        </a>
      `;
      html += personneCard;
    }
    return html;
  };
  
  document.querySelector('#app').innerHTML = `
    <main>
      ${nav}
  
      <div class="container-fluid my-4">
        <div class="d-flex gap-3 flex-wrap justify-content-center">
          ${listePersonnes()}
        </div>
      </div>
    </main>
  `;
};

// const listePersonnes = () => {
//   let html = '';
//   for (let i = 0; i < data.length; i++) {
//     const personne = data[i];
//     let personneCard = `
//       <a class="card col-5 col-md-3" href="/personne/?id=${personne.id}">
//         <img src="${personne.avatar}" class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
//         <div class="card-body">
//           <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
//         </div>
//       </a>
//     `;
//     html += personneCard;
//   }
//   return html;
// };

// document.querySelector('#app').innerHTML = `
//   <main>
//     ${nav}

//     <div class="container-fluid my-4">
//       <div class="d-flex gap-3 flex-wrap justify-content-center">
//         ${listePersonnes()}
//       </div>
//     </div>
//   </main>
// `;



// document.getElementById("myForm").addEventListener("input", function (e) {
//   e.preventDefault();
//   let dataFilter = data.filter((p) => p.nom.includes(document.getElementById("search").value) || p.prenom.includes(document.getElementById("search").value));
//   const listePersonnesSearch = () => {
//     let html = '';
//     for (let i = 0; i < dataFilter.length; i++) {
//       const personne = dataFilter[i];
//       let personneCard = `
//         <a class="card col-5 col-md-3" href="/personne/?id=${personne.id}">
//           <img src="${personne.avatar}" class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
//           <div class="card-body">
//             <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
//           </div>
//         </a>
//       `;
//       html += personneCard;
//     }
//     return html;
//   };
//   document.querySelector('#app').innerHTML = `
//   <main>
//     ${nav}

//     <div class="container-fluid my-4">
//       <div class="d-flex gap-3 flex-wrap justify-content-center">
//         ${listePersonnesSearch()}
//       </div>
//     </div>
//   </main>
// `;
// });

// const searchInput = document.querySelector('#search');

// searchInput.addEventListener('input', (event)=>{
// const url = new URL(window.location);
// url.searchParams.set('q', event.target.value);
// window.history.pushState({}, "", url);
// const liste =document.querySelector(#liste-personnes);
// liste.innerHTML = listePersonnes();
// });

// see correct version on github