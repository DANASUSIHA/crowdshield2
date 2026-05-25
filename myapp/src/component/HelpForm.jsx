import { useState } from "react";
import axios from "axios";

function HelpForm() {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [emergency, setEmergency] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name || !location || !emergency) {

      alert("All fields required");

      return;
    }

    try {

      await axios.post(
        "http://localhost:5000/api/add-request",
        {
          name,
          location,
          emergency
        }
      );

      alert("Request Added");

      setName("");
      setLocation("");
      setEmergency("");

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <section className="form-section">

      <h2>Request Help</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        />

        <textarea
          placeholder="Describe Emergency"
          value={emergency}
          onChange={(e) =>
            setEmergency(e.target.value)
          }
        ></textarea>

        <button type="submit">
          Submit
        </button>

      </form>

    </section>
  );
}

export default HelpForm;