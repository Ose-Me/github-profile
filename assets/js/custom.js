// extend day.js
// var relativeTime = require("dayjs/plugin/relativeTime");

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

// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-menu");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

//scroll animation on repo header
const stickyHeaderSpan = document.getElementById("hidden-span");
const stickyHeader = document.getElementById("sticky-top1");
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 370) {
    stickyHeaderSpan.classList.remove("hide");
    stickyHeader.style.paddingTop = "0";
  } else {
    stickyHeaderSpan.classList.add("hide");
    stickyHeader.style.paddingTop = "24px";
  }
});

// map userData
const userData = ({ login, name, bio, avatarUrl }) => {
  console.log(login, name, bio, avatarUrl, status);
  let user = document.getElementById("profile-container");
  user.innerHTML = `
<div class="profile">
                        <div class="profile-info">
                            <div class="img-container" style="background-image:url(${avatarUrl})">
                            </div>
                            <span class="user-status">
                                <span class="status-emoji">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.5 8C1.5 6.27609 2.18482 4.62279 3.40381 3.40381C4.62279 2.18482 6.27609 1.5 8 1.5C9.72391 1.5 11.3772 2.18482 12.5962 3.40381C13.8152 4.62279 14.5 6.27609 14.5 8C14.5 9.72391 13.8152 11.3772 12.5962 12.5962C11.3772 13.8152 9.72391 14.5 8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8V8ZM8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0V0ZM5 8C5.26522 8 5.51957 7.89464 5.70711 7.70711C5.89464 7.51957 6 7.26522 6 7C6 6.73478 5.89464 6.48043 5.70711 6.29289C5.51957 6.10536 5.26522 6 5 6C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8ZM12 7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7C10 6.73478 10.1054 6.48043 10.2929 6.29289C10.4804 6.10536 10.7348 6 11 6C11.2652 6 11.5196 6.10536 11.7071 6.29289C11.8946 6.48043 12 6.73478 12 7ZM5.32 9.636C5.48134 9.52303 5.68064 9.47806 5.87486 9.51081C6.06907 9.54355 6.24262 9.65138 6.358 9.811L6.365 9.82C6.468 9.938 6.585 10.042 6.715 10.13C6.979 10.308 7.398 10.5 8 10.5C8.602 10.5 9.02 10.308 9.285 10.129C9.415 10.041 9.532 9.937 9.635 9.819L9.642 9.811C9.69913 9.73076 9.77149 9.66256 9.85498 9.61029C9.93846 9.55802 10.0314 9.52271 10.1285 9.50637C10.2257 9.49002 10.3251 9.49297 10.4211 9.51504C10.5171 9.53711 10.6078 9.57788 10.688 9.635C10.7682 9.69213 10.8364 9.76449 10.8887 9.84798C10.941 9.93146 10.9763 10.0244 10.9926 10.1215C11.009 10.2187 11.006 10.3181 10.984 10.4141C10.9619 10.5101 10.9211 10.6008 10.864 10.681L10.25 10.25C10.864 10.68 10.864 10.681 10.863 10.681V10.682L10.862 10.684L10.86 10.687L10.855 10.694L10.841 10.713C10.7848 10.7883 10.7233 10.8594 10.657 10.926C10.497 11.092 10.319 11.242 10.127 11.371C9.497 11.789 8.757 12.009 8 12C7.054 12 6.348 11.692 5.874 11.37C5.60476 11.1872 5.36385 10.9659 5.159 10.713L5.145 10.693L5.14 10.687L5.138 10.684V10.682H5.137L5.75 10.25L5.136 10.68C5.02196 10.5172 4.97718 10.3159 5.01149 10.1201C5.04581 9.92439 5.1564 9.75026 5.319 9.636H5.32V9.636Z"
                                            fill="black" />
                                    </svg>
                                </span>
                                <span class="set-status">Set Status</span>
                            </span>
                        </div>
                        <h1 class="name">
                            <span class="fullname">${name}</span>
                            <span class="username">${login}</span>
                        </h1>
                    </div>
                    <div class="user-status-container">
                        <span class="status-emoji">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.5 8C1.5 6.27609 2.18482 4.62279 3.40381 3.40381C4.62279 2.18482 6.27609 1.5 8 1.5C9.72391 1.5 11.3772 2.18482 12.5962 3.40381C13.8152 4.62279 14.5 6.27609 14.5 8C14.5 9.72391 13.8152 11.3772 12.5962 12.5962C11.3772 13.8152 9.72391 14.5 8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8V8ZM8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0V0ZM5 8C5.26522 8 5.51957 7.89464 5.70711 7.70711C5.89464 7.51957 6 7.26522 6 7C6 6.73478 5.89464 6.48043 5.70711 6.29289C5.51957 6.10536 5.26522 6 5 6C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8ZM12 7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7C10 6.73478 10.1054 6.48043 10.2929 6.29289C10.4804 6.10536 10.7348 6 11 6C11.2652 6 11.5196 6.10536 11.7071 6.29289C11.8946 6.48043 12 6.73478 12 7ZM5.32 9.636C5.48134 9.52303 5.68064 9.47806 5.87486 9.51081C6.06907 9.54355 6.24262 9.65138 6.358 9.811L6.365 9.82C6.468 9.938 6.585 10.042 6.715 10.13C6.979 10.308 7.398 10.5 8 10.5C8.602 10.5 9.02 10.308 9.285 10.129C9.415 10.041 9.532 9.937 9.635 9.819L9.642 9.811C9.69913 9.73076 9.77149 9.66256 9.85498 9.61029C9.93846 9.55802 10.0314 9.52271 10.1285 9.50637C10.2257 9.49002 10.3251 9.49297 10.4211 9.51504C10.5171 9.53711 10.6078 9.57788 10.688 9.635C10.7682 9.69213 10.8364 9.76449 10.8887 9.84798C10.941 9.93146 10.9763 10.0244 10.9926 10.1215C11.009 10.2187 11.006 10.3181 10.984 10.4141C10.9619 10.5101 10.9211 10.6008 10.864 10.681L10.25 10.25C10.864 10.68 10.864 10.681 10.863 10.681V10.682L10.862 10.684L10.86 10.687L10.855 10.694L10.841 10.713C10.7848 10.7883 10.7233 10.8594 10.657 10.926C10.497 11.092 10.319 11.242 10.127 11.371C9.497 11.789 8.757 12.009 8 12C7.054 12 6.348 11.692 5.874 11.37C5.60476 11.1872 5.36385 10.9659 5.159 10.713L5.145 10.693L5.14 10.687L5.138 10.684V10.682H5.137L5.75 10.25L5.136 10.68C5.02196 10.5172 4.97718 10.3159 5.01149 10.1201C5.04581 9.92439 5.1564 9.75026 5.319 9.636H5.32V9.636Z"
                                    fill="black" />
                            </svg>
                        </span>
                        <span href="" class="">Set Status</span>
                    </div>
                    <p style="font-size: 16px;">${bio}</p>
`;
  return user;
};

// map repositories data
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
  repoListNode.innerHTML += `
<div class="repository">
  <div style="display: flex; justify-content: space-between;">
  <div>
      <div style="display:flex;align-items:center">
      
          <h3><a class="repo-name" href="${url}" target="_blank"> ${name} </a></h3>
          ${isPrivate ? `<span class="label">Private</span>` : ""}
      </div>    
          ${
            description
              ? `<p class="repo-description"> ${description} </p>`
              : ""
          }
      </div>
      <div>
          ${
            stargazerCount <= 0
              ? `<button class="btn-star">
              <svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-star mr-1"
                  viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                  <path fill="#6a737d" fill-rule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
                  </path>
              </svg>
              <span>Star</span></button>`
              : `<button class="btn-star">
              <svg class="octicon octicon-star-fill mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
               <path fill="#6a737d"  fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z">
               </path>
              </svg>
              <span>Unstar</span></button>`
          }
      </div>
  </div>

  <div style="display: flex;margin-top: 13px;">
      ${
        language
          ? `<div id="language"><div class="color-tag" 
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

      ${
        updatedAt
          ? `<p class="text-gray timestamp">Updated ${dayjs(
              updatedAt
            ).fromNow()} </p>`
          : ""
      }
  </div>
</div>
  `;
  return repoListNode;
};
