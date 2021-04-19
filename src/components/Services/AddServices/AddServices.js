import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import AdminNav from "../../Shared/AdminNav/AdminNav";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      imageURL: imageURL,
      description: data.description,
      price: data.price,
    };
    console.log("service Data:", serviceData);

    fetch(`https://boiling-caverns-61336.herokuapp.com/addServices`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log("server side res", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "4295ac4d47b569312bea67b440cdbdbb");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <div className="col-md-5  mt-5 d-flex">
        <AdminNav></AdminNav>
      </div>
      <div style={{ marginLeft: "" }} className="col-md-7  text-center  mt-5">
        <h4
          style={{
            color: "#3C1874",
            fontWeight: "bold",
            borderBottom: "1px solid indigo",
          }}
        >
          Add More Service
        </h4>
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <p style={{ fontWeight: "bold", color: " #3C1874" }}>
            Service Name:{" "}
          </p>
          <input
            className="w-25 border border-success rounded-pill pl-2"
            name="name"
            placeholder="name"
            {...register("name")}
          />
          <br />
          <br />
          <p style={{ fontWeight: "bold", color: "#3C1874" }}>Price: </p>
          <input
            className="w-25 border border-success rounded-pill pl-2"
            name="price"
            placeholder="price"
            {...register("price")}
          />{" "}
          <br /> <br />
          <p style={{ fontWeight: "bold", color: " #3C1874" }}>Description: </p>
          <input
            className="w-25 border border-success rounded-pill pl-2"
            name="description"
            placeholder="description"
            {...register("description")}
          />{" "}
          <br /> <br />
          <p style={{ fontWeight: "bold", color: " #3C1874" }}>Upload Image</p>
          <input
            onChange={handleImageUpload}
            className="responsiveAddImage w-25 border border-success rounded-pill pl-2"
            name="imageURL"
            type="file"
          />{" "}
          <br /> <br />
          <button
            className="w-25 border border-success rounded-pill pl-2 btn-brand text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
