import { useState, useEffect } from "react";

function HelpForm() {

    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [emergency, setEmergency] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        console.log("Task List Updated", tasks);
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "" || location === "" || emergency === "") {
            setError("All fields are required");
            return;
        }

        const newTask = {
            id: Date.now(),
            name,
            location,
            emergency
        };

        setTasks([...tasks, newTask]);

        setName("");
        setLocation("");
        setEmergency("");
        setError("");
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <section className="form-section">

            <h2>Request Help</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <textarea
                    placeholder="Describe Emergency"
                    value={emergency}
                    onChange={(e) => setEmergency(e.target.value)}
                ></textarea>

                {error && <p className="error">{error}</p>}

                <button type="submit">Add Request</button>

            </form>

            <div className="task-container">

                {tasks.map((task) => (
                    <div className="task-card" key={task.id}>

                        <h3>{task.name}</h3>

                        <p>
                            <strong>Location:</strong> {task.location}
                        </p>

                        <p>
                            <strong>Emergency:</strong> {task.emergency}
                        </p>

                        <button onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default HelpForm;