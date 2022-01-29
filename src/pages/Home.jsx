import UserResults from "../components/users/UserResults";

function Home(){
  return <div>
    <h1 className="text-5xl text-center my-12">Welcome</h1>
     {/*insert search bar here*/}
    <UserResults />
  </div>
}

export default Home;
