import React from "react";

const Post = () => {
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const mileage = form.mileage.value;
    console.log(brand, photo, details, mileage);
  };
  return (
    <div>
      <div>
        <span class="flex items-center">
          <span class="h-px flex-1 bg-black"></span>
          <span class="shrink-0 px-6">Create a post here</span>
          <span class="h-px flex-1 bg-black"></span>
        </span>

        <div>
          <form className="card-body" onSubmit={handlePost}>
            <div>
              <p>Post Profile</p>
              <p>
                This information will be displayed publicly so be carefull and
                honest while sharing
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand & Model</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Example: Yamaha R15 v4 or Suzuki gixer"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL here"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea
                placeholder="details"
                name="details"
                className="textarea textarea-bordered textarea-md w-full max-w-xs"
              ></textarea>
              <label className="label">
                <span className="label-text">
                  With a few sentence about your product
                </span>
              </label>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Mileage</span>
              </label>
              <select
                name="mileage"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select
                </option>
                <option value={25}>25+</option>
                <option value={30}>30+</option>
                <option value={30}>35+</option>
                <option value={40}>40+</option>
                <option value={45}>45+</option>
                <option value={50}>50+</option>
                <option value={60}>60+</option>
                <option value={70}>70+</option>
              </select>
            </div>
            <hr />

            <div>
              <button type="submit" className="btn btn-wide btn-secondary">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
