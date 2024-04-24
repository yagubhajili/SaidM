const getDatas = async (url) => {
  let res = await axios(url);
  let data = res.data;
  return data;
};

const postDatas = async (url, obj) => {
  let res = await axios.post(url, obj);
  let data = res.data;
  return data;
};

const getDataById = async (url, id) => {
  let res = await axios(url + "/" + id);
  let data = res.data;
  return data;
};

const deleteById = async (url, id) => {
  let res = await axios.delete(url + "/" + id);
  let data = res.data;
  return data;
};

const putById = async (url, id, obj) => {
  let res = await axios.put(url + "/" + id, obj);
  let data = res.data;
  return data;
};

const patchById = async (url, id, obj) => {
  let res = await axios.patch(url + "/" + id, obj);
  let data = res.data;
  return data;
};















const tableBody = document.querySelector('.tableBody')
const AddcalbackBtn = document.querySelector('.Addcalback')
const AddPromisekBtn = document.querySelector('.AddPromise')
const AddAxioskBtn = document.querySelector('.AddAxios')

const getDataBtn = document.querySelector('.getDataBtn')
const createBtn = document.querySelector('.createBtn')
const deleteBtn = document.querySelector('.deleteBtn')

const modal = document.querySelector(".modals")

const modalTitle = document.querySelector(".modalTitle")
const modalPrice = document.querySelector(".modalPrice")
const modalCategory = document.querySelector(".modalCategory")




// function getData(callback) {

//     fetch('https://fakestoreapi.com/users')
//         .then(response => response.json())
//         .then(data => callback(data));

// }


function createtable(data) {
  data.forEach(element => {

    tableBody.innerHTML += `
        <tr data-id=${element.id} class="rows">
        <th scope="row">${element.id}</th>
        <td class="title">${element.title}</td>
        <td class="price">${element.price}</td>
        <td class="category">${element.category}</td>
        <td><button class="deletebtns">X</button></td>
        <td><button class="editBtns">edit</button></td>
         </tr>`



  });

  let deletebtns = document.querySelectorAll('.deletebtns')
  for (const deletebtn of deletebtns) {
    deletebtn.addEventListener('click', async (e) => {
      let prodId = e.target.closest(".rows").dataset.id

      removeProduct(prodId)

    })
  }


  let editBtns = document.querySelectorAll('.editBtns')
  for (const editBtn of editBtns) {
    editBtn.addEventListener('click', async (e) => {
      let prodId = e.target.closest(".rows").dataset.id
      let tableRow = e.target.closest(".rows")
      let title = tableRow.querySelector(".title").textContent
      let price = tableRow.querySelector(".price").textContent
      let category = tableRow.querySelector(".category").textContent

      modal.classList.remove('d-none')
      modalTitle.value = title
      modalPrice.innnerText = price
      modalCategory.innnerText = category

    })
  }
}




function removeProduct(id) {

  axios.delete(`http://localhost:3000/products/${id}`)

}




// AddcalbackBtn.addEventListener('click', getData(createtable))




// function promise() {
//     fetch('https://fakestoreapi.com/users')
//         .then(response => response.json())
//         .then(data => {
//             createtable(data)
//         });
// }


// AddPromisekBtn.addEventListener('click', promise)



async function getUser() {
  try {
    const response = await axios.get('http://localhost:3000/products');
    createtable(response.data)
  } catch (error) {
    console.error(error);
  }
}


// AddAxioskBtn.addEventListener('click', getUser)


getDataBtn.addEventListener('click', () => {
  getDatas('http://localhost:3000/products').then(data => createtable(data))
})





createBtn.addEventListener('click', () => {
  postDatas('http://localhost:3000/products').then(data => createtable(data))
})


