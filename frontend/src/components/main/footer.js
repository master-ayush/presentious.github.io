import React from "react";

const Footer = () => {
  return (
    <footer
      class="text-center text-white"
      style={{ backgroundColor: "#caced1" }}
    >
      <div class="container p-4">
        <section class="">
          <div class="row">
            <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                class="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  alt=""
                  src="https://slidestore.com/wp-content/uploads/2016/08/2283_PowerPoint_Design_Service_Slides_Slide_1_Presentation_Title.jpg"
                  class="w-100"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>
            <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                class="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://cdn2.slidemodel.com/wp-content/uploads/FF0234-01-multi-purpose-powerpoint-template-3.jpg"
                  class="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>
            <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                class="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://i.ytimg.com/vi/iocREITImno/maxresdefault.jpg"
                  class="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>
            <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                class="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://prezentr.com/wp-content/uploads/2020/03/Hong-Kong-PowerPoint-Template-Preview.jpg"
                  class="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>
            <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                class="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://prezentr.com/wp-content/uploads/2017/08/Trade-PowerPoint-Template-Preview.jpg"
                  class="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>
            <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
              <div
                class="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="https://prezentr.com/wp-content/uploads/2017/05/Moodle-PowerPoint-Template-Preview.png"
                  class="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Copyright:
        <a class="text-white" href="https://digipodium.com/">
          Presentious.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
