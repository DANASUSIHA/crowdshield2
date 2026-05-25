import { useEffect, useState } from "react";
import axios from "axios";

function RequestList() {

  const [requests, setRequests] = useState([]);

  const [editId, setEditId] = useState(null);

  const [updatedStatus, setUpdatedStatus] =
    useState("");

  useEffect(() => {

    fetchRequests();

  }, []);

  // FETCH REQUESTS
  const fetchRequests = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/requests"
      );

      setRequests(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // DELETE REQUEST
  const deleteRequest = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/delete-request/${id}`
      );

      fetchRequests();

    } catch (error) {

      console.log(error);

    }
  };

  // UPDATE REQUEST
  const updateRequest = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/update-request/${id}`,
        {
          status: updatedStatus
        }
      );

      alert("Status Updated");

      setEditId(null);

      setUpdatedStatus("");

      fetchRequests();

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="request-list">

      <h2>Emergency Requests</h2>

      {
        requests.map((req) => (

          <div
            className="card"
            key={req._id}
          >

            <h3>{req.name}</h3>

            <p>
              <b>Location:</b>
              {req.location}
            </p>

            <p>
              <b>Emergency:</b>
              {req.emergency}
            </p>

            <p>
              <b>Status:</b>
              {req.status}
            </p>

            {
              editId === req._id ? (

                <div>

                  <input
                    type="text"
                    placeholder="Update Status"
                    value={updatedStatus}
                    onChange={(e) =>
                      setUpdatedStatus(
                        e.target.value
                      )
                    }
                  />

                  <button
                    onClick={() =>
                      updateRequest(req._id)
                    }
                  >
                    Save
                  </button>

                </div>

              ) : (

                <button
                  onClick={() => {

                    setEditId(req._id);

                    setUpdatedStatus(req.status);

                  }}
                >
                  Edit
                </button>
              )
            }

            <button
              onClick={() =>
                deleteRequest(req._id)
              }
            >
              Delete
            </button>

          </div>
        ))
      }

    </div>
  );
}

export default RequestList;