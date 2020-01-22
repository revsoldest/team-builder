import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState ({
        name: "",
        role: "",
        email: ""
    })
    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }
    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        }
        props.addNewPerson(newMember);
        setMember({ name: "", email: "", role: ""})
    }



    return (
            <form className="App-form" onSubmit={submitForm}>
                <h1>Add A New Duelist Below: </h1><br />
                <label htmlFor="name">
                    Name: { " " }
                </label>
                <input 
                    type="text"
                    name="name"
                    onChange={changeHandler}
                    value={member.name}
                    />
                <br />
                <label htmlFor="email">
                    Email: { " " }
                </label>
                <input 
                    type="text"
                    name="email"
                    onChange={changeHandler}
                    value={member.email}
                    />
                <br />
                <label htmlFor="role">
                    Role:  { " " }
                </label>
                <input 
                    type="text"
                    name="role"
                    onChange={changeHandler}
                    value={member.role}
                    />
                    <br />
                    <button className="App-btn" type="submit">Add Person!</button>
         </form>
    )
}


export default Form;