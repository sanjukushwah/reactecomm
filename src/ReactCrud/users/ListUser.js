import { useEffect, useState } from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    setUsers(data);
  };
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure to delete this user?")) {
      await fetch("http://localhost:8000/users/" + id, {
        method: "DELETE",
      });
    }
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
    // toast("User deleted successfully");
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="container ">
        <div className="row py-4">
          <div className="col-md-6">
            <h3>List User</h3>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/users/create/" className="btn btn-primary float-end">
              Create User
            </Link>
          </div>
        </div>
        <div className="card border-0 shadow p-3 ">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                      <Link
                        to={`/users/edit/${user.id}`}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </Link>
                      <Link
                        onClick={() => deleteUser}
                        className="btn btn-sm btn-danger ms-1"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>1234567890</td>
                <td>
                  <a href="#link" className="btn btn-sm btn-primary">
                    Edit
                  </a>
                  <a href="#link" className="btn btn-sm btn-danger ms-1">
                    Delete
                  </a>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListUser;
