const baseUrl = 'http://localhost:3000/cars';
var idGlobal = null ;
// ________________________________ FIND ALL CARS ________________________
async function findAllCars() {
  const response = await fetch(`${baseUrl}/all-car`);

  const cars = await response.json();



  cars.forEach((carros, i) => {
    i++
    document.getElementById('carsList').insertAdjacentHTML(
      'beforeend',
      `
     
        <div class="card_car" id="carListItem_${i}" >
        
        <img src="${carros.foto}" class="img-config">
            
        <div class="title_and_id_box">
            <h3>${carros.modelo}</h3>
            <h4 class="car_id">#${i}</h4>
        </div>

        <div class="description">
            ${carros.descricao}
        </div>

        <div class="year_and_km_box">
            <h3 class="year">${carros.ano}</h3>
            <h3 class="km">${carros.km} Km</h3>
        </div>

        <div class="line"></div>

        <div class="price_box">
            
            <div class="price">
                R$ ${carros.preco}
            </div>
        </div>

        <form class="card_buttons">
            <div type="button" onclick="openModal(${i})" class="btn-edit">
                <img src="/assets/img/edit.svg" class="img-icon">
            </div>
            <div type="button" onclick="openModalDelete(${i})" class="btn-edit">
                <img src="/assets/img/trash.svg" class="img-icon">
            </div>
        </form>

     `,
    );
  });
}

findAllCars();

// ________________________________ FIND CARS BY ID ________________________
const findCarsById = async (value) => {
  const id = value - 1;

  const allcars = await fetch(`${baseUrl}/all-car`);
  const cars = await allcars.json();
  const carsValue = Object(cars[id]);


  const carsLeng = Object.values(cars).length;
 

  const carSelectedDiv = document.getElementById('carsList');
  carSelectedDiv.innerHTML = '';

  if (id >= carsLeng) {
 
    $(document).ready(function () {
      $('.toast').toast('show');
    });
    carSelectedDiv.innerHTML = ``;
    findAllCars();
  }
  const response = await fetch(`${baseUrl}/find-car/${carsValue._id}`);

  if (response.status == 400 || response.status == 404) {

   
    findAllCars();
  } else {
    const carro_selected = await response.json();
    const carSelectedDiv = document.getElementById('carsList');

    carSelectedDiv.innerHTML = `
            <div class="card_car" id="carListItem_${carsValue}" >
                
                <img src="${carro_selected.foto}" class="img-config">
                    
                <div class="title_and_id_box">
                    <h3>${carro_selected.modelo}</h3>
                   
                </div>

                <div class="description">
                    ${carro_selected.descricao}
                </div>

                <div class="year_and_km_box">
                    <h6 class="year">${carro_selected.ano}</h6>
                    <h6 class="km">${carro_selected.km} Km</h6>
                </div>

                <div class="line"></div>

                <div class="price_box">
                    
                    <div class="price">
                        ${carro_selected.preco}
                    </div>
                </div>

                <form class="card_buttons">
                    <div type="button" onclick="openModal(${carsValue._id})" class="btn-edit">
                        <img src="/assets/img/edit.svg" class="img-icon">
                    </div>
                    <div type="button" onclick="openModalDelete(${carsValue._id})" class="btn-edit">
                        <img src="/assets/img/trash.svg" class="img-icon">
                    </div>
                </form>
            
            `;

    return;
  }
};

// ________________________________ OPEN MODAL ________________________
async function openModal(id) {

  if (id != undefined) {
    
    document.querySelector('#title_register').innerText = 'Update Car';
    document.querySelector('#btn_update').innerText = 'Confirm';

    const response1 = await fetch(`${baseUrl}/all-car`);
    const cars = await response1.json();
    id = id - 1;
    const choosedCar = cars[id]._id ;

    const response = await fetch(`${baseUrl}/find-car/${choosedCar}`);
   
    const car = await response.json();
  
   document.querySelector('#model').value = car.modelo;
  document.querySelector('#yearmodel').value = car.ano;
   document.querySelector('#km').value = car.km;
     document.querySelector('#fuel').value = car.combustivel;
     document.querySelector('#gearbox').value = car.cambio;
    document.querySelector('#localization').value = car.localizacao;
    document.querySelector('#description').value = car.descricao;
   document.querySelector('#imageurl').value = car.foto;
    document.querySelector('#price').value = car.preco;

    idGlobal = id ;
    console.log('if : ' + idGlobal)


  } 
  else {
    document.querySelector('#title_register').innerText = 'Add New Car';
    
    idGlobal = id ;
    console.log('else : ' + idGlobal)
  }

  document.querySelector('.modal_container').style.display = 'block';
}

// ________________________________ CLOSE MODAL ________________________
function closeModal() {
  document.querySelector('.modal_container').style.display = 'none';
  document.querySelector('.modal_container_2').style.display = 'none';

  let modelo = (document.querySelector('#model').value = '');
  let ano = (document.querySelector('#yearmodel').value = '');
  let km = (document.querySelector('#km').value = '');
  let combustivel = (document.querySelector('#fuel').value = '');
  let cambio = (document.querySelector('#gearbox').value = '');
  let localizacao = (document.querySelector('#localization').value = '');
  let descricao = (document.querySelector('#description').value = '');
  let foto = (document.querySelector('#imageurl').value = '');
  let preco = (document.querySelector('#price').value = '');
}

// ________________________________ CREATE CAR ________________________
async function createCar() {


  let modelo = document.querySelector('#model').value;
  let ano = document.querySelector('#yearmodel').value;
  let km = document.querySelector('#km').value;
  let combustivel = document.querySelector('#fuel').value;
  let cambio = document.querySelector('#gearbox').value;
  let localizacao = document.querySelector('#localization').value;
  let descricao = document.querySelector('#description').value;
  let foto = document.querySelector('#imageurl').value;
  let preco = document.querySelector('#price').value;

 

  const carsInputs = {
    modelo,
    ano,
    km,
    combustivel,
    cambio,
    localizacao,
    descricao,
    foto,
    preco,
  };
  
  const checker = idGlobal + 1 ;


  const modeEditActive = checker > 0; // 


  if(modeEditActive){
    alert('caiu no if do response 1')
    const response1 = await fetch(`${baseUrl}/all-car`);
    const cars = await response1.json();
    var choosedCar = cars[idGlobal]._id;

      }
      else{
       
      }
  
     

  const endPoint =
    baseUrl + (modeEditActive ? `/update-car/${choosedCar}` : `/create-car`);



  const response = await fetch(endPoint, {
    method: modeEditActive ? 'put' : 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(carsInputs),
  });

  const carros = await response.json();

 
  const cardCar = `
     
        <div class="card_car" id="carListItem_${carro_selected.id}"  >
        
        <img src="${carros.imageurl}" class="img-config">
            
        <div class="title_and_id_box">
            <h3>${carros.modelo}</h3>
            <h4 class="car_id">#${carros.id}</h4>
        </div>

        <div class="description">
            ${carros.descricao}
        </div>

        <div class="year_and_km_box">
            <h4 class="year">${carros.ano}</h4>
            <h4 class="km">${carros.km} Km</h4>
        </div>

        <div class="line"></div>

        <div class="price_box">
            
            <div class="price">
                ${carros.preco}
            </div>
        </div>

        <div class="card_buttons">
            <div type="button" class="btn-edit">
                <img src="/assets/img/edit.svg" class="img-icon">
            </div>
            <div type="button" class="btn-edit">
                <img src="/assets/img/trash.svg" class="img-icon">
            </div>
        </div>

     `;
  if (modeEditActive) {
    document.querySelector(`carListItem_${id}`).outerHTML = html;
  } else {
    document
      .getElementById('carsList')
      .insertAdjacentHTML('beforeend', cardCar);
  }
  
}

// ________________________________ OPEN MODAL DELETE ________________________
async function openModalDelete(i) {
  i = i - 1 ;
  const allcars = await fetch(`${baseUrl}/all-car`);
  const cars = await allcars.json();
  const carCheck =  Object(cars[i]);
  const carId = carCheck._id

  document.querySelector('.modal_container_2').style.display = 'block';
  const btnYes = document.querySelector('.delete_yes');

  btnYes.addEventListener('click', function () {
    deleteCar(carId);
 
  });
}

// ________________________________ DELETE CAR ________________________
async function deleteCar(carId) {
  
  const response = await fetch(`${baseUrl}/delete-car/${carId}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  });

  const result = await response.json();

  const toastTxt = document.getElementById('toast-body');
  toastTxt.innerHTML = 'Carro deletado com sucesso';


  $(document).ready(function () {
    $('.toast').toast('show');
  });

}
