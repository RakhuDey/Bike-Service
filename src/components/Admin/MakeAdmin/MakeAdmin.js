import React from "react";
import { useForm } from "react-hook-form";
import AdminNav from "../../Shared/AdminNav/AdminNav";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://boiling-caverns-61336.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => console.log("server side res", res));
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <AdminNav></AdminNav>
      </div>

      <div className="col-md-9 text-center mt-5">
        <h4 style={{ color: "#DAA520" }} className="border-bottom pb-2">
          Add More Admin
        </h4>
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <p style={{ fontWeight: "bold", color: "#008080" }}>Full Name: </p>
          <input
            className="w-25 border border-success rounded-pill pl-2"
            name="name"
            placeholder="name"
            {...register("name")}
          />
          <br />
          <br />
          <p style={{ fontWeight: "bold", color: "#008080" }}>Email </p>
          <input
            className="w-25 border border-success rounded-pill pl-2"
            name="email"
            placeholder="email"
            {...register("email")}
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

export default MakeAdmin;
