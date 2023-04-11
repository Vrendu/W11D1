import { useState } from "react";

const Form = () => {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        number: "",
        phone_type: "",
        staff: "",
        bio: "",
        sign_up: false
    });

    const [errors, setErrors] = useState([]);

    function validate() {
        // let error = {};
        if (newUser.name.length <= 0) {
            // errors['name'] = "cannot be empty"
            setErrors((prev) => {return {...prev, name: "cannot be empty"}});
        }

        if (newUser.email.length <= 0 && newUser.email.split("@").length != 2) {
            setErrors((prev) => {return {...prev, email: 'email is not valid'}});
        }

        if (newUser.number && newUser.number.split("-").length != 3) {
            setErrors((prev) => ({...prev, number: 'phone number is not valid'}));

            if (!newUser.phone_type) {
                setErrors((prev) => ({...prev, phone_type: 'phone type must be selected'}));
            }
        }

        if (newUser.bio.length > 280) {
            setErrors((prev) => ({...prev, bio: 'character limit is 280'}));
        }
    }

    function handleSubmit(e){
        console.log(newUser);
        e.preventDefault();
        validate();
        setNewUser({ name: "", email: "", number: "", phone_type: "", staff: "", bio: "", sign_up: false});
    }

    const handleChange = (attribute, e) => {
        setNewUser(prev => ({ ...prev, [attribute]: e.target.value }));
    }

    const handleChangeCreator = attribute => e => {
        setNewUser(prev => ({ ...prev, [attribute]: e.target.value }));
    }

    return (
        <>
            <h1>I am a form</h1>
            <form className="form" onSubmit={handleSubmit}> Form
                <label htmlFor="Name"> Name
                    <input id="name" value={newUser.name} onChange={e => handleChange('name', e)}/>
                </label>
                <label htmlFor="email"> Email
                        <input id="email" value={newUser.email} onChange={e => handleChange('email', e)} />
                </label>
                <label htmlFor="number">Phone Number
                        <input id="number" value={newUser.number} onChange={e => handleChange('number', e)} />
                </label>
                <label htmlFor="phone_type">
                    <select id="phone_type" onChange={handleChangeCreator('phone_type')}>
                        <option disabled selected={newUser.phone_type === '' ? true: false} value="">Select Phone Type</option>
                        <option selected={newUser.phone_type === 'Home' ? true : false}  value="Home">Home</option>
                        <option selected={newUser.phone_type === 'Work' ? true : false}  value="Work">Work</option>
                        <option selected={newUser.phone_type === 'Mobile' ? true : false}  value="Mobile">Mobile</option>
                    </select>
                </label>
                <label htmlFor="staff">
                    <label>Instructor
                        <input name="staff" type="radio" value="Instructor"/>
                    </label>
                    <label>Student
                        <input name="staff" type="radio" value="Student"/>
                    </label>
                </label>
                <label htmlFor="bio">
                    <input id="bio" type="textarea" />
                </label>
                <label htmlFor="sign_up">Sign Up
                    <input type="checkbox" value="true"/>
                </label>
                <input type="submit" value="Register"/>
            </form>
        </>
    );
}

export default Form;
