import React from "react";

export default function ResultTable({keyword, user, onAddred}){
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    //Tải dữ liệu 1 lần khi component mount
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {setUsers(data); setLoading(false); });
    }, []);
    
    const filteredUsers = users.filter(
        (u) => 
            u.name.toLowerCase().includes(keyword.toLowerCase()) ||
            u.username.toLowerCase().includes(keyword.toLowerCase())
    );

    React.useEffect(() => {
        if(user){
            setUsers((prev) => [...prev, {...user, id: prev.length+1}]);
            onAddred();
        }
    }, [user]);

    const [editing, setEditing] = React.useState(null);

    const removeUser = (id) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
    };

    const editUser = (u) => {
        setEditing({ ...u, address: { ...u.address } });
    };

    const handleEditChange = (key, value) => {
        if (["street", "suite", "city"].includes(key)) {
            setEditing({ ...editing, address: { ...editing.address, [key]: value } });
        } else {
            setEditing({ ...editing, [key]: value });
        }
    };

    const saveUser = () => {
        setUsers((prev) => prev.map((u) => (u.id === editing.id ? editing : u)));
        setEditing(null);
    };

    if (loading) return <p>Đang tải dữ liệu...</p>;

    return(
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((u) => (
                        <tr key = {u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>{u.address.city}</td>
                            <td>
                                <button onClick = {() => editUser(u)}>Sửa</button>
                                <button onClick = {() => removeUser(u)}>Xoá</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editing && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h4>EditUser</h4>
                            <label>Name:</label>
                            <input value={editing.name} onChange={(e) => handleEditChange("name", e.target.value)} />
                            
                            <label>Username:</label>
                            <input value={editing.username} onChange={(e) => handleEditChange("username", e.target.value)} />
            
                            <label>City:</label>
                            <input value={editing.address.city} onChange={(e) => handleEditChange("city", e.target.value)} />
                            
                            <br />
                                <button onClick={saveUser}>Lưu</button>
                                <button onClick={() => setEditing(null)}>Hủy</button>
                    </div>
                </div>
            )}
        </div>
    )
}