// Requerimientos
// 1. Programar una función IIFE para ser invocada al cargar nuestra página.
// (5 Puntos)
// 2. Programar la petición a la API usando async - await y mostrar el resultado en html
// utilizando etiquetas del tipo párrafo una bajo la otra.
// (5 Puntos)

// import data from '../mock/users.json' with { type: "json" };

// Función IIFE
(async function () {


  try {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();

  const users = data.results;

  // <div class="user-card">
  //     <img src="https://randomuser.me/api/portraits/men/84.jpg" alt="User" >
  //     <div class="info">
  //       <h2 class="item">Nombre</h2>
  //       <p class="item">Email</p>
  //       <p class="item">Numbero</p>
  //   </div>

    users.forEach((user) => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      const img = document.createElement('img');
      img.src = user.picture.large;
      img.alt = user.name.first;
      userCard.appendChild(img);

      const info = document.createElement('div');
      info.classList.add('info');

      const name = document.createElement('h2');
      name.classList.add('item');
      name.textContent = `${user.name.first} ${user.name.last}`;
      info.appendChild(name);

      const email = document.createElement('p');
      email.classList.add('item');
      email.textContent = user.email;
      info.appendChild(email);

      const phone = document.createElement('p');
      phone.classList.add('item');
      phone.textContent = user.phone;
      info.appendChild(phone);

      userCard.appendChild(info);

      document.getElementById('users').appendChild(userCard);
    });


    
  } catch (error) {
    console.log('Error en la petición', error);
  }


})();
