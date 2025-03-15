import React, { useState } from 'react'

const Form = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!email) {
            setMessage("Email is required!");
            return;
        }

        if (!validateEmail(email)) {
            setMessage("Enter a valid email address!");
            return;
        }

        setLoading(true);

        try {

            const response = await fetch("https://test.ezworks.ai/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })

            const data = await response.json();

            if (response.status === 442) {
                setMessage("Email ending with @ez.works are not allowed.");
            } else if (response.status === 200) {
                setMessage("Form Submitted!");
            } else {
                setMessage("Oops, something went wrong! Please try again!!");
            }

        } catch (error) {
            console.log(error.message);
            setMessage("Network error, please try again.")
        }

        setLoading(false);
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required />
            <button type='submit' disabled={loading}>
                {loading ? "Submitting..." : "Contact Me"}
            </button>
            {message && <p className='message'>{message}</p>}
        </form>
    )
}

export default Form;
