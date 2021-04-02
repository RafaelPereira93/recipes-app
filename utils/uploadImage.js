export const urlPreviewImage = async (files) => {
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "recipes-app");

  return window.URL.createObjectURL(files[0]);
};

export const uploadImage = async (files) => {
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "recipes-app");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/rafael1993/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  const file = await res.json();
  return { public_id: file.public_id, secure_url: file.secure_url };
};
