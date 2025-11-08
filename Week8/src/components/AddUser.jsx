import React from "react";
import Modal from "./Modal.jsx";

export default function AddUser({onAdd}){
    const [adding, setAdding] = React.useState(false); 
    const [user, setUser] = React.useState({ 
        name: "", username: "", email: "", 
        address: { street: "", suite: "", city: "" }, 
        phone: "", website: "" 
    }); 
    
    const handleChange = (e) => { 
        const { id, value } = e.target; 
        if (["street", "suite", "city"].includes(id)) { 
            setUser({ ...user, address: { ...user.address, [id]: value } }); 
        } else { 
            setUser({ ...user, [id]: value }); 
        } 
    }; 

    const handleAdd = () => { 
        if (user.name === "" || user.username === "") { 
            alert("Please enter Name and Username!"); 
            return; 
        } 
        
        onAdd(user); 
        setUser({ name: "", username: "", email: "", address: { street: "", suite: "", city: "" }, phone: "", website: "" }); 
        setAdding(false); 
    };

    return(
        <div className="add-user"> 
	        <button onClick={() => setAdding(true)}>Thêm</button> 
            <Modal show={adding} title="Add User" onClose={() => setAdding(false)}> 
                <label htmlFor="name"> Name: </label> 
                <input id="name" type="text" value={user.name} onChange={handleChange}/>
                
                <label>Username:</label>
                <input id="username" value={user.username} onChange={handleChange} />            
                      
                <label>Email:</label>
                <input id="email" value={user.email} onChange={handleChange} />
        
                <label>City:</label>
                <input id="city" value={user.address.city} onChange={handleChange} />

                <label>Phone:</label>
                <input id="phone" value={user.phone} onChange={handleChange} />

                <fieldset>
                    <legend>Address</legend>
                    <label htmlFor="street">Street:</label>
                    <input id="street" type="text" value={user.address.street} onChange={handleChange} />
                    <label htmlFor="suite">Suite:</label>
                    <input id="suite" type="text" value={user.address.suite} onChange={handleChange} />
                    <label htmlFor="city">City:</label>
                    <input id="city" type="text" value={user.address.city} onChange={handleChange} />
                </fieldset>

                <div style={{ marginTop: 10 }}>
                    <button onClick={handleAdd}>Lưu</button>
                    <button onClick={() => setAdding(false)}>Hủy</button>    
                </div>
            </Modal>
        </div> 
    );
} 