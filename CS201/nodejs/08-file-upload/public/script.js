const url = "/api/v1/products";

const fileForm= document.querySelector(".file-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const priceImage = document.querySelector("#image");
const container = document.querySelector(".container");

let imageValue;

fileForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  const priceValue = priceInput.value;
  try {
    const product = { name: nameValue, price: priceValue, image: imageValue };
    await axios.post(url, product);
    fetchProducts();
  } catch (err) {
    console.error(err);
  }
});

imageInput.addEventListener("change", async (e) => {
  const imageFile = e.target.files;
  const formData = new FormData();
  formData.append("image", imageFile);
  // console.log([...formData.values()]);

  try {
    const {
      data: {
        image: { src }
      }
    } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    imageValue = src;
  } catch (err) {
    imageValue = null;
    console.error(err);
  }
});

const fetchProducts = async () = {
  try {
    const {
      data:{
        image: { products }
      }
    } = await axios.get(url)
    const tempProducts = products.map((each) => {
      return `<article> class="product">` + `<img src="${each.image}" alt="${each.name}""` + `<footer>` + `<p>${each.name}<p>` + `<span>${each.price}</span>`
    })
  } catch (err) {
    console.error(err);
  }
};

fetchProducts();
