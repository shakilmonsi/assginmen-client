import React from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.sPhotUrl.value;
    const serviceName = form.sTitle.value;
    const description = form.sDescription.value;
    const price = form.sPrice.value;
    const newServiceItem = {
      img,
      serviceName,
      description,
      price,
    };
    fetch(`http://localhost:5000/addService`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newServiceItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: `Service Added Succesfully!`,
            timer: 2000,
          });
        }
        form.reset();
      });
  };
  return (
    <div className="max-w-7xl mx-auto py-20 pt-32 bg-purple-900 pb-0">
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <h1 className="text-4xl mb-8 text-center font-bold uppercase">
        Add Service
      </h1>
      <div>
        <div className="min-h-[50vh]">
          <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-[500px] shadow-2xl bg-base-100">
              <form onSubmit={handleAddService} className="card-body text-xl">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text font-bold text-xl">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="sPhotUrl"
                    placeholder="Photo Url"
                    className="input text-white font-bold input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="labelabel-text">
                    <span className="label-text font-bold text-xl">Title</span>
                  </label>
                  <input
                    type="text"
                    name="sTitle"
                    placeholder="Title"
                    className="input text-white font-bold input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">
                      Description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="sDescription"
                    placeholder="Description"
                    className="input text-white font-bold input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">Price</span>
                  </label>
                  <input
                    type="text"
                    name="sPrice"
                    placeholder="Price"
                    className="input text-white font-bold input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add Service</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
