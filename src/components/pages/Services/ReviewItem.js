import avater from "../../../assets/avatar.png";

const ReviewItem = ({ reviewItem }) => {
  console.log(reviewItem);
  return (
    <div className="text-left font-bold text-purple-900 flex mb-5">
      <div className="max-w-[67px] w-full h-[67px]">
        {reviewItem?.userPhoto ? (
          <>
            <img
              src={reviewItem?.userPhoto}
              className=" rounded-full"
              alt=""
              srcset=""
            />
          </>
        ) : (
          <img src={avater} alt="Avater" srcset="" />
        )}
      </div>
      <div className="ml-5  break-words break-all mt-2">
        <span className="font-semibold">
          {reviewItem?.isVarified ? "varified" : "not varified"}
        </span>
        <h5 className="mb-0 font-bold text-warning capitalize">
          {reviewItem?.userName}
        </h5>
        <p className="mb-0 ">{reviewItem?.textArea}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
