const url = "/api/v1/products";

const fileFormDOM = document.querySelector(".file-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const priceImage = document.querySelector("#image");
const container = document.querySelector(".container");

let imageValue;

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
