
const login();
{
  await axios
    .post("http://localhost:5000/", {
      username: this.state.username,
      password: this.state.password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.message == "Login success!")
        this.setState({
          loginClicked: true,
        });
    })
    .catch((error) => {
      console.log(error);
    });
}

const SignUp(){
await axios
.post("http://localhost:5000/signup", {
  username: this.state.username,
  password: this.state.password,
})
.then((response) => {
  console.log(response.data.message);
  this.setState({
    signedupClicked: true,
  });
})
.catch((error) => {
  console.log(error);
});
}