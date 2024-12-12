import { useEffect } from "react";
import Header from "../common/Header";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const formSubmit = async (data) => {
    await fetch("http://localhost:8000/users" + params.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    // toast("User updated successfully");
    navigate("/users");
  };
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users/" + params.id);
    const data = await res.json();
    reset(data);
  };
  useEffect(() => {
    fetchUsers();
  });
  return (
    <>
      <Header />
      <div className="container ">
        <div className="row py-4">
          <div className="col-md-6">
            <h3> User /edit</h3>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/users/" className="btn btn-primary float-end">
              Back
            </Link>
          </div>
        </div>
        <div className="card border-0 shadow p-3 ">
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="mb-3">
              <label>Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className={`form-control ${errors.name && "is-invalid"}`}
                placeholder="Enter Name"
              />
              {errors.name && (
                <span className="invalid-feedback">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "please enter valid email address",
                  },
                })}
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                placeholder="Enter Email"
              />
              {errors.email && (
                <span className="invalid-feedback">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label>Mobile</label>
              <input
                {...register("mobile", { required: true })}
                type="text"
                className={`form-control ${errors.mobile && "is-invalid"}`}
                placeholder="Enter Mobile"
              />
              {errors.mobile && (
                <span className="invalid-feedback">This field is required</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
