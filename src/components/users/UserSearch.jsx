import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext.js";

function UserSearch(){
const [text, setText] = useState("");

const {users, searchUsers} = useContext(GithubContext);

const handleChange = (e) => {
  setText(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(text===""){
    alert("Please enter text in the search bar");
  }
  else{
    searchUsers(text);
  }
}

  return <div className="grid sm:grid-cols-1 lg:grid-cols-1 mb-10 gap-10 m-10">
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative">
            <input type="text" className="w-full  pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" value={text} onChange={handleChange} />
            <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
              Go
            </button>
          </div>
        </div>
      </form>
    </div>
    {users.length>0 && (<div>
      <button className="btn btn-lg btn-outline">
        clear
      </button>
    </div>)}
  </div>
}

export default UserSearch;
