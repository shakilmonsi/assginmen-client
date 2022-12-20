import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import ReviewRowItem from "./ReviewRowItem";
import "../../All.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { logOut } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  let serialReview = 1;
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?userEmail=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("personalService")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("recived", data);
        setReviews(data);
      });
  }, [user?.email, refresh]);
  console.log(reviews);
  const handleReviewDelete = (id) => {
    fetch(`http://localhost:5000/myReviews/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("personalService")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: `Review Deleted Succesfully!`,
            timer: 2000,
          });
          const remaining = reviews.filter((rvwItm) => rvwItm._id !== id);
          setReviews(remaining);
        }
      });
  };
  const handleUpdata = (event, id) => {
    event?.preventDefault();
    const form = event?.target;
    const review = form?.reveiwTextArea?.value;

    console.log(review);
    const updateReview = {
      review,
    };
    fetch(`http://localhost:5000/myReviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("personalService")}`,
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: `Review Updated Succesfully !!`,
          timer: 1500,
        });
        form.reset();
        setRefresh(!refresh);
        event.preventDefault();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto fond-bold bg-deep-orange-800">
      <Helmet>
        <title>My Reviews</title>
      </Helmet>
      <h1 className="text-4xl text-center font-bold uppercase  mb-16">
        Reviews details here.
      </h1>
      <div>
        {reviews.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table w-full fond-bold text-white">
              {/* <!-- head --> */}
              <thead>
                <tr className="text-xl">
                  <th className="text-xl font-bold text-yellow-900">TOTAL</th>
                  <th className="text-xl font-bold  text-yellow-900">
                    Service Name
                  </th>
                  <th className="text-xl font-bold  text-yellow-900">
                    your Review
                  </th>
                  <th className="text-xl font-bold  text-yellow-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((reviewItem) => (
                  <ReviewRowItem
                    handleReviewDelete={handleReviewDelete}
                    serialReview={serialReview++}
                    key={reviewItem._id}
                    handleUpdata={handleUpdata}
                    reviewItem={reviewItem}
                    dfltValue={reviewItem.textArea}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h3 className="text-center text-3xl min-h-[50vh]">
            "No reviews were added"
          </h3>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
