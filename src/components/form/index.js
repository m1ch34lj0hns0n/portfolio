import React, {useState} from 'react';

const Form = () => {

    const [formStatus, setFormStatus] = useState({
        success: false
    });

    const serializeForm = form => {
        const data = {};
        const formData = new FormData(form);
        formData.forEach((value, key) => {data[key] = value});
        return data;
    };

    const formSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const data = serializeForm(form);
        setFormStatus({success: false, error: false});

        fetch(form.action, {
            method: form.method,
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            setFormStatus({success: result.ok});
        });
    };

    return (
        <form
            method="post"
            action="https://formspree.io/f/xwkwlwbq"
            onSubmit={e => formSubmit(e)}
        >
            <div className="form-row mb-2">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-row mb-2">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    required
                />
            </div>
            <div className="form-row mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className="form-control"
                />
            </div>
            <div className="form-row mb-2">
                {formStatus.error && <p>Form submission unsuccessful</p>}
                {formStatus.success ? (
                    <p>Thanks for contacting me, I'll respond shortly <span role="img" aria-label=":D">😁</span></p>
                ) : (
                    <button type="submit" className="btn btn-primary ml-auto">Submit</button>
                )}
            </div>
        </form>
    );
};

export default Form;