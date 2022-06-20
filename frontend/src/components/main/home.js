import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";

const Home = () => {
  const url = app_config.api_url;
  const navigate = useNavigate();
  useEffect(() => {}, []);

  return (
    <div id="preview" class="preview">
      <div style={{ display: "none" }}></div>
      <div>
        <div
          data-draggable="true"
          class=""
          style={{ position: "relative" }}
          draggable="false"
        >
          <section
            draggable="false"
            class="overflow-hidden pt-0"
            data-v-271253ee=""
          >
            <section class="mb-10">
              <div
                class="p-5 text-center bg-image"
                style={{
                  backgroundImage:
                    "linear-gradient(to right , #000a, #000a), url(https://www.slidesalad.com/wp-content/uploads/2020/07/Modern-PowerPoint-Templates-PPT-Slides.jpg)",
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                }}
                aria-controls="#picker-editor"
              ></div>
              <div class="container">
                <div
                  class="card mx-4 mx-md-5 text-center shadow-5-strong"
                  style={{
                    marginTop: "-170px",
                    background: "hsla(0, 0%, 100%, 0.7)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <div class="card-body px-4 py-5 px-md-5">
                    <h1 class="display-3 fw-bold ls-tight mb-4">
                      <span>All of your Presentation needs</span> <br />
                      <span class="text-primary">on Presentious</span>
                    </h1>
                    <button
                      class="btn btn-primary btn-lg py-3 px-5 mb-2 mb-md-0 me-md-2"
                      onClick={(e) => navigate("/main/signup")}
                      aria-controls="#picker-editor"
                      draggable="false"
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div data-draggable="true" class="" style={{ position: "relative" }}>
          <section draggable="false" class="container pt-5" data-v-271253ee="">
            <section class="mb-10 text-center">
              <h2 class="fw-bold mb-9 text-center">Why is it so great?</h2>
              <div class="row gx-lg-5">
                <div class="col-lg-4 col-md-12 mb-8 mb-lg-0">
                  <div class="card shadow-2-strong h-100">
                    <div
                      class="d-flex justify-content-center"
                      style={{ marginTop: "-43px" }}
                    >
                      <div class="p-4 bg-primary rounded-circle shadow-5-strong d-inline-block">
                        <i
                          class="fas fa-headset fa-4x text-white"
                          aria-controls="#picker-editor"
                        ></i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Support 24*7</h5>
                      <p class="card-text">
                        There are 24*7 costumer care executive available for any queries and support 
                        we are also provide telephonic support on costumer request.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-8 mb-lg-0">
                  <div class="card shadow-2-strong h-100">
                    <div
                      class="d-flex justify-content-center"
                      style={{ marginTop: "-43px" }}
                    >
                      <div class="p-4 bg-primary rounded-circle shadow-5-strong d-inline-block">
                        <i
                          class="fas fa-shield-alt fa-4x text-white"
                          aria-controls="#picker-editor"
                        ></i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Safe and solid</h5>
                      <p class="card-text">
                        This is the most safe place for create your presentation 
                        there no bugs to intrupt in your presentation 
                        you can create , edit and share your presentation easly.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mb-8 mb-lg-0">
                  <div class="card shadow-2-strong h-100">
                    <div
                      class="d-flex justify-content-center"
                      style={{ marginTop: "-43px" }}
                    >
                      <div class="p-4 bg-primary rounded-circle shadow-5-strong d-inline-block">
                        <i
                          class="fas fa-rocket fa-4x text-white"
                          aria-controls="#picker-editor"
                        ></i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">Extremely fast</h5>
                      <p class="card-text">
                        This is the fastest way to create edit and share your presentation 
                        you can design your ppts very shortly and easly . There are no lagging problem
                        you can access slide by your Presentation topic. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div
          data-draggable="true"
          class=""
          style={{ position: "relative" }}
          draggable="false"
        >
          <section draggable="false" class="container pt-5" data-v-271253ee="">
            <section class="mb-10 text-center">
              <h2 class="fw-bold mb-5">User Reviews</h2>
              <div
                id="carouselExampleControls"
                class="carousel slide carousel-dark carousel-fade"
                data-mdb-ride="carousel"
              >
                <div class="carousel-inner px-5 px-md-0">
                  <div class="carousel-item active">
                    <img
                      class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                      alt="avatar"
                      style={{ width: "150px", height: "150px" }}
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-8">
                        <h5 class="mb-3">Maria Kate</h5>
                        <p>Photographer</p>
                        <p class="text-muted">
                          <i class="fas fa-quote-left pe-2"></i>
                          <span>
                            
It is easy to navigate  this site  because  all of the links are right
there on the left hand side, and people without image-loading browsers
can access the links via the text at the  bottom  which is very  handy
and essential  for a good site.
                            
                          </span>
                        </p>
                      </div>
                    </div>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="far fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                      alt="avatar"
                      style={{ width: "150px", height: "150px" }}
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-8">
                        <h5 class="mb-3">John Doe</h5>
                        <p>Web Developer</p>
                        <p class="text-muted">
                          <i class="fas fa-quote-left pe-2"></i>
                          <span>
                            
The design is very  consistent  throughout all of the pages- clean and
easy to read.  Well done!
                          </span>
                        </p>
                      </div>
                    </div>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="far fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                      alt="avatar"
                      style={{ width: "150px", height: "150px" }}
                      aria-controls="#picker-editor"
                      draggable="false"
                    />
                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-8">
                        <h5 class="mb-3">Anna Deynah</h5>
                        <p>UX Designer</p>
                        <p class="text-muted">
                          <i class="fas fa-quote-left pe-2"></i>
                          <span>
                            Presentious is very cool website to create preesentation easly
                            and very short time .
                            there are so many good tamplates.
                          </span>
                        </p>
                      </div>
                    </div>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="fas fa-star fa-sm"></i>
                      </li>
                      <li>
                        <i class="far fa-star fa-sm"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </section>
          </section>
        </div>
        <div data-draggable="true" class="" style={{ position: "relative" }}>
          <section draggable="false" class="container pt-5" data-v-271253ee="">
            <section class="mb-10 background-radial-gradient">
              <div class="container px-4 py-5 px-md-5 text-center text-lg-start">
                <div class="row gx-lg-5 align-items-center">
                  <div class="col-lg-6 mb-5 mb-lg-0">
                    <h1
                      class="my-4 display-3 fw-bold ls-tight"
                    >
                    <span >Do not miss</span> <br />
                      <span style={{ color: "hsl(218, 81%, 75%)" }}>
                        any updates
                      </span>
                    </h1>
                    <p
                      class="mb-4 opacity-70 lead"
                      style={{ color: "hsl(218, 81%, 85%)" }}>
                   
                    We will write rarely and only high-quality content.
                    </p>
                  </div>
                  <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="card bg-glass">
                      <div class="card-body py-5 px-md-5">
                        <div class="mb-5 text-center">
                          <h2 class="fw-bold mb-3">
                            Subscribe to the newsletter
                          </h2>
                        </div>
                        <form>
                          <div class="form-outline mb-4">
                            <input
                              type="text"
                              id="form5Example1"
                              class="form-control"
                            />
                            <label
                              class="form-label"
                              for="form5Example1"
                              style={{ marginLeft: "0px" }}
                            >
                              Name
                            </label>
                            <div class="form-notch">
                              <div
                                class="form-notch-leading"
                                style={{ width: "9px" }}
                              ></div>
                              <div
                                class="form-notch-middle"
                                style={{ width: "42.4px" }}
                              ></div>
                              <div class="form-notch-trailing"></div>
                            </div>
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              id="form5Example2"
                              class="form-control"
                            />
                            <label
                              class="form-label"
                              for="form5Example2"
                              style={{ marginLeft: "0px" }}
                            >
                              Email address
                            </label>
                            <div class="form-notch">
                              <div
                                class="form-notch-leading"
                                style={{ width: "9px" }}
                              ></div>
                              <div
                                class="form-notch-middle"
                                style={{ width: "88.8px" }}
                              ></div>
                              <div class="form-notch-trailing"></div>
                            </div>
                          </div>
                          <div class="form-check d-flex justify-content-center mb-4">
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form5Example3"
                              checked=""
                            />
                            <label class="form-check-label" for="form5Example3">
                              I have read and agree to the terms
                            </label>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary btn-block mb-md-4"
                            aria-controls="#picker-editor"
                          >
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
