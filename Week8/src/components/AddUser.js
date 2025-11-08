import React from "react";

export default function addUser({onAdd}){
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
            alert("Vui lòng nhập Name và Username!"); 
            return; 
        } 
        
        onAdd(user); 
        setUser({ name: "", username: "", email: "", address: { street: "", suite: "", city: "" }, phone: "", website: "" }); 
        setAdding(false); 
    };

    return(
        <div className="add-user"> 
	        <button onClick={() => setAdding(true)}>Thêm</button> 
            {adding && ( 
                <div className="modal-overlay"> 
                    <div className="modal-content"> 
                        <h4>Add User</h4> 
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
            
                        <br />
                        <button onClick={handleAdd}>Lưu</button>
                        <button onClick={() => setAdding(false)}>Hủy</button>    
                    </div> 
                </div> 
        )}
        </div> 
    );
} 