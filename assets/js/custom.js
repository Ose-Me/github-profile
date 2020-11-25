// responsive navbar function
function responsiveNav() {
  var x = document.getElementById("bottom-nav-mobile");
  if (x.className === "bottom-nav") {
    x.className += " responsive";
  } else {
    x.className = "bottom-nav";
  }
}

// toggle add repositories dropdown
document
  .getElementById("add-dropdown-btn")
  .addEventListener("click", function () {
    document.getElementById("dropdown-menu1").classList.toggle("show");
  });

// toggle profile details dropdown
document
  .getElementById("profile-dropdown-btn")
  .addEventListener("click", function () {
    document.getElementById("dropdown-menu2").classList.toggle("show");
  });

//scroll animation on repo header
const headerUserNode = document.getElementById("hidden-span");
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 370) {
    headerUserNode.classList.remove("hide");
  } else {
    headerUserNode.classList.add("hide");
  }
});

const userData = ({}) => {};

const repoData = ({
  name,
  isPrivate,
  updatedAt,
  stargazerCount,
  forkCount,
  description,
  url,
  languages: {
    nodes: [language],
  },
}) => {
  let repoListNode = document.getElementById("repositories");
  console.log(language);
  //populate list of repositories
  repoListNode.innerHTML += `
<div class="repository">
  <div style="display: flex; justify-content: space-between;">
      <div>
          <h3><a class="repo-name" href="${url}" target="_blank"> ${name} </a></h3>
          
          ${description ? `<p> ${description} </p>` : ""}
      </div>
      <div>
          <button class="btn-star">
              <svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-star mr-1"
                  viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                  <path fill="#6a737d" fill-rule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
                  </path>
              </svg>
              <span>Star</span></button>
      </div>
  </div>

  <div style="display: flex;margin-top: 13px;">
      ${
        language
          ? `<div style="display:flex;align-items:center"><div class="color-tag" 
      style="background-color:${language.color}">
      </div><p class="text-gray"> ${language.name}</p></div>`
          : ""
      }
      
      ${
        stargazerCount && stargazerCount !== 0
          ? `<a class="text-gray blue-icon" id="star">
          <svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-star mr-1"
              viewBox="0 0 16 16" version="1.1" aria-hidden="true">
              <path fill-rule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
              </path>
          </svg>
          ${stargazerCount}</a>`
          : ""
      }

      ${
        forkCount && forkCount !== 0
          ? `<a class="text-gray blue-icon" id="fork">
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="fork"
              class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1"
              role="img">
              <path fill-rule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z">
              </path>
          </svg>
         ${forkCount}</a>`
          : ""
      }

      <p class="text-gray timestamp">Updated 6 days ago</p>
  </div>
</div>
  `;
  return repoListNode;
};
