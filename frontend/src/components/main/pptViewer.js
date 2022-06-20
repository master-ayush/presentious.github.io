import { Avatar, Rating, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";

const PPTViewer = () => {
  const [pptLink, setPptLink] = useState(
    "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx"
  );

  const navigate = useNavigate();

  const { id } = useParams();
  const [pptData, setPptData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [reviewList, setReviewList] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const url = app_config.backend_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [ratingText, setRatingText] = useState("");

  const fetchData = () => {
    fetch(url + "/slide/getbyid/" + id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setPptData(data);
          fetchRatings(data._id);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchRatings = (slide_id) => {
    fetch(url + "/review/getbyitem/" + slide_id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setReviewList(data);
          setReviewLoading(false);
        });
      }
    });
  };

  const addRating = () => {
    fetch(url + "/review/add", {
      method: "POST",
      body: JSON.stringify({
        rating: 4,
        text: reviewText,
        user: currentUser._id,
        slide: pptData._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Review💬 Added");
        fetchRatings();
      }
    });
  };

  const displayRatings = () => {
    if (!reviewLoading) {
      return reviewList.map(({ rating, text, user }) => (
        <div className="card">
          <div className="card-body">
            <Avatar alt="User" />
            <span>{/* <b>{user.name}</b> */}</span>
            <Rating name="simple-controlled" value={rating} />
            <h5 className="text-dark">{text}</h5>
          </div>
        </div>
      ));
    }
  };

  const showRatingForm = () => {
    if (currentUser === null)
      return (
        <h3 className="text-muted text-center my-4">
          Login to add your Review for this slide!!
        </h3>
      );

    return (
      <div>
        <h4 className="text-muted">Your Review</h4>
        <hr />
        <Rating name="simple-controlled" value={4} />
        <TextField
          label="Write Something .."
          fullWidth
          className="mt-2"
          multiline
          rows={3}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button className="btn btn-primary mt-3 float-end" onClick={addRating}>
          Submit Review
        </button>
      </div>
    );
  };

  const displayData = () => {
    if (!loading) {
      return (
        <div className="container" style={{ padding: "4rem" }}>
          <div className="card">
            <div className="card-body">
              <h2>{pptData.title}</h2>
              <p>{pptData.description}</p>
              <a
                href={url + "/uploads/" + pptData.file}
                rel="noreferrer"
                target="_blank"
                className="btn btn-danger btn-lg float-end"
              >
                Download Slide
              </a>
              {/* <iframe
                  src={
                    "https://view.officeapps.live.com/op/embed.aspx?src=[" +
                    url +
                    "/uploads/" +
                    pptData.file +
                    "]"
                  }
                  width="100%"
                  height="600px"
                  frameborder="0"
                /> */}
              <div className="ripple">
                <img
                  src={url + "/uploads/" + pptData.thumbnail}
                  className="img-fluid mt-5"
                  alt={pptData.title}
                />
              </div>

              <div className="reviews mt-5">
                {displayRatings()}

                {showRatingForm()}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div style={{ background: "#eee" }}>{displayData()}</div>;
};

export default PPTViewer;
