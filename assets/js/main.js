// Endpoint URL
const githubUrl = "https://api.github.com/graphql";

// The Authorization in the header of the request
const oauth = { Authorization: "bearer " + token };

// The GraphQL query, a string
const query = `{
    viewer {
      login
      bio
      avatarUrl
      status {
        emojiHTML
        message
      }
      repositories(last: 20, isFork: false) {
        nodes {
          name
          description
          forkCount
          url
          updatedAt
          isPrivate
          stargazerCount
          languages(first: 5, orderBy: {direction: ASC, field: SIZE}) {
            nodes {
              color
              name
            }
          }
        }
      }
    }
  }
  `;

// Post request, axios.post() return a Promise
axios
  .post(githubUrl, { query: query }, { headers: oauth })
  .then(function (response) {
    const user = response.data.data.viewer;

    // map user data
    userData(user);

    // map repo data
    [...user.repositories.nodes].reverse().forEach((repo) => {
      repoData(repo);
    });
  })
  .catch(function (error) {
    // On error, print the error
    console.log(error);
  });
