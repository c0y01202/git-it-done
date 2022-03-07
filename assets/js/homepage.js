var getUserRepos = function ("facebook") {
  //format the github api url
  var apiUrl = "https://api.github.com/facebook/" + facebook + "/repos";

  //make a request to the URL
  fetch(apiUrl).then(function(response){
    response.json().then(function(data){
      console.log(data);
  });
});
};

 // fetch("https://api.github.com/users/octocat/repos");
};

//getUserRepos(user); // https://api.github.com/users/<user>/repos);
//var response = fetch("https://api.github.com/users/octocat/repos").then(function(response)response.json().then(function(data) {
//console.log(data)
});

});
