import { Link } from "react-router-dom";
import bike1 from "../../../assets/carousel/bike1.jpg";
import bike2 from "../../../assets/carousel/bike2.jpg";
import bike3 from "../../../assets/carousel/bike3.jpg";
import bike4 from "../../../assets/carousel/bike5.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bike1} className="w-full" />
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-6xl w-1/4 text-white font-bold">
                Rent a motorcycle and go on a great adventure
              </h1>
              <p className="text-lg w-1/2 text-gray-200">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <Link
                  to="/discover"
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-main focus:outline-none focus:ring active:bg-primary"
                >
                  <span class="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:ms-4">
                    Discover More
                  </span>
                </Link>
                <Link
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-main focus:outline-none focus:ring active:bg-primary"
                  to="/latest"
                >
                  <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:me-4">
                    {" "}
                    Download{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bike2} className="w-full" />
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-6xl w-1/4 text-white font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg w-1/2 text-gray-200">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <Link
                  to="/discover"
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-main focus:outline-none focus:ring active:bg-primary"
                >
                  <span class="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:ms-4">
                    Discover More
                  </span>
                </Link>
                <Link
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-main focus:outline-none focus:ring active:bg-primary"
                  to="/latest"
                >
                  <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:me-4">
                    {" "}
                    Download{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bike3} className="w-full" />
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-6xl w-1/4 text-white font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg w-1/2 text-gray-200">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <Link
                  to="/discover"
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-main focus:outline-none focus:ring active:bg-primary"
                >
                  <span class="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:ms-4">
                    Discover More
                  </span>
                </Link>
                <Link
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-main focus:outline-none focus:ring active:bg-primary"
                  to="/latest"
                >
                  <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:me-4">
                    {" "}
                    Download{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bike4} className="w-full" />
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-6xl w-1/4 text-white font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg w-1/2 text-gray-200">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <Link
                  to="/discover"
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-main focus:outline-none focus:ring active:bg-primary"
                >
                  <span class="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:ms-4">
                    Discover More
                  </span>
                </Link>
                <Link
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-main focus:outline-none focus:ring active:bg-primary"
                  to="/latest"
                >
                  <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:me-4">
                    {" "}
                    Download{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
