function HelpForm() {
    return (
        <section className="form-section">

            <h2>Request Help</h2>

            <form>
                <input type="text" placeholder="Enter Name" />
                <input type="text" placeholder="Location" />
                <textarea placeholder="Describe Emergency"></textarea>

                <button type="submit">Submit</button>
            </form>

        </section>
    );
}

export default HelpForm;