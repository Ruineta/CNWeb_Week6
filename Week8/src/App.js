import React from "react";
import SearchForm from "./components/SearchForm";
import AddUser from "./components/AddUser";
import ResultTable from "./components/ResultTable";

export default function App(){
    const [kw, setKeyword] = React.useState("");
    const [newUser, setNewUser] = React.useState(null);

    return(
        <div className="container">
            <h1>User Management</h1>

            <SearchForm onChangeValue = {setKeyword} />
            <AddUser onAdd = {setNewUser} />
            <ResultTable 
                keyword = {kw}
                user = {newUser}
                onAdded = {() => setNewUser(null)} />
        </div>
    );
}