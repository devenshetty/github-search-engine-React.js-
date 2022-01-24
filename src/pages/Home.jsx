function Home(){
  return <div>
    <h1 className="text-5xl text-center">Welcome</h1>
    {process.env.REACT_APP_GITHUB_URL}
  </div>
}

export default Home;
