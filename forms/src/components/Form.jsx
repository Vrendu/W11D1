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

    function handleSubmit(e){
        console.log("submitted");
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
                    <input type="radio" value="Instructor"/> 
                    <input type="radio" value="Student"/> 
                </label>
                <label htmlFor="bio">
                    <input id="bio" type="textarea" />
                </label>
                <label htmlFor="sign_up">Sign Up
                    <input type="checkbox" value="true"/>
                </label>
                <input type="submit" value="Sign Up"/>
            </form>
    
        </>
    );
}

export default Form;

