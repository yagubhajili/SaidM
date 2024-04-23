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




// function getData(callback) {

//     fetch('https://fakestoreapi.com/users')
//         .then(response => response.json())
//         .then(data => callback(data));

// }


function createtable(data) {
  data.forEach(element => {

    tableBody.innerHTML += `
        <tr data=${element.id}>
        <th scope="row">${element.id}</th>
        <td>${element.title}</td>
        <td>${element.category}</td>
        <td>${element.price}</td>
        
        <td><button class="deletebtns">X</button></td>

         </tr>`






  });
}
let deletebtns = document.querySelectorAll('.deletebtns')
for (const deletebtn of deletebtns) {
  deletebtn.addEventListener('click', async (e) => {

    console.log(deletebtn)
    await deleteById("http://localhost:3000/products", e.target.getAttribute('data'))




  })
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


