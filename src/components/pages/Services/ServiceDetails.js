import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import avater from "../../../assets/avatar.png";
import ReviewItem from "./ReviewItem";
import { Rate } from "antd";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const ServiceDetails = () => {
  const { description, img, price, serviceName, _id } = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);
  const [review, setReview] = useState([]);
  console.log(review.length);
  useEffect(() => {
    fetch(`http://localhost:5000/displayReview/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, [_id, refresh]);
  // add review
  let handlePost;
  if (user) {
    handlePost = (event) => {
      event.preventDefault();
      const form = event.target;
      const textArea = form.textarea.value;
      const review = {
        textArea,
        userPhoto: user?.photoURL,
        userName: user?.displayName,
        userEmail: user?.email,
        isVarified: user?.emailVerified,
        serviceId: _id,
        serviceName,
        price,
      };

      fetch("http://localhost:5000/addReview", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          setRefresh(!refresh);
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Review Added Succesfully!!",
            timer: 1500,
          });
          form.reset();
        })
        .catch((err) => console.log(err));
    };
  } else {
    handlePost = (event) => {
      event.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Plz Login First!!",
        timer: 4000,
      }).then(() => {
        navigate("/login");
      });
    };
  }

  return (
    <div className="pt-24 max-w-7xl mx-auto">
      <Helmet>
        <title>Service Details</title>
      </Helmet>
      <h1 className="text-5xl text-center font-bold uppercase text-primary  mb-16">
        Service Details
      </h1>
      <div className="service-details border rounded p-5">
        <h2 className="text-2xl font-bold">
          <span className="border-b-2 font-bold text-yellow-900">Service:</span>{" "}
          {serviceName}
        </h2>
        <img
          className="mb-8 h-[500px] bg-lime-700"
          src={img}
          alt=""
          srcset=""
        />
        <p>
          <span className="border-b-2 font-bold text-yellow-900">Info:</span>{" "}
          {description}
        </p>
        <div className="mt-4">
          <p>
            <span className="border-b-2 font-bold text-yellow-900">Price:</span>{" "}
            {price}$
          </p>
        </div>
      </div>
      <div className="review mt-20">
        <h1 className="text-4xl text-center font-bold text-primary uppercase  mb-12">
          All Reviews
        </h1>
        <div className="text-right  border rounded p-5">
          <div className="review-details border-dashed text-warning  border-b-2 mb-12 pb-8">
            {review.length === 0 ? (
              <div className="min-h-[20vh] pt-5 flex items-center justify-center flex-col">
                <h3 className="text-center text-primary text-3xl ">
                  "No reviews were added for this service."
                </h3>
                <p>Started with your first review</p>
              </div>
            ) : (
              <>
                {review.map((reviewItem) => (
                  <ReviewItem key={reviewItem._id} reviewItem={reviewItem} />
                ))}
              </>
            )}
          </div>
          <div>
            <form action="" onSubmit={handlePost}>
              <div className="mb-8">
                {user?.photoURL ? (
                  <div className="flex items-center">
                    <img
                      className="rounded-full w-20 h-20 ml-auto"
                      src={user?.photoURL}
                      alt="User"
                      srcset=""
                    />
                    <div className="text-left ml-3">
                      <h5 className="text-2xl capitalize mb-0">
                        {user?.displayName}
                      </h5>
                      <p className="mb-0 font-bold text-yellow-900">
                        please Your review .
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-end">
                    <img src={avater} alt="Avater" srcset="" />
                    <div className="text-left ml-3">
                      <h5 className="text-2xl mb-0 capitalize">
                        {user?.displayName}
                      </h5>
                      <p className="mb-0 font-bold text-yellow-900">
                        please Your review .
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex justify-end">
                  <Rate />
                </div>
              </div>
              <div>
                <textarea
                  name="textarea"
                  className="textarea textarea-bordered w-full resize-none h-48 text-[20px] text-warning max-w-3xl"
                  placeholder="Describe your exprerience..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Please Add Review?
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
