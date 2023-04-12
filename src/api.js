import axios from "axios";

const apiUrl = "http://localhost:5000";

export function uploadPhoto(photoFile) {
  const formData = new FormData();
  formData.append("photo", photoFile);

  return axios({
    method: "post",
    url: `${apiUrl}/pets/photos`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export function createPet(data) {
  return axios.post(`${apiUrl}/pets`, data);
}

export function getPets() {
  return axios.get(`${apiUrl}/pets`);
}

export function getPet(id) {
  return axios.get(`${apiUrl}/pets/${id}`);
}

export function updatePet(data) {
  return axios.put(`${apiUrl}/pets/${data.id}`, data);
}
