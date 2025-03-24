let profileAvatar = document.querySelector(".profile-avatar");
let profileName = document.querySelector(".profile-name");
let profileUsername = document.querySelector(".profile-username");
let repositories = document.querySelector(".repositories");
let userFollowers = document.querySelector(".followers");
let userFollowing = document.querySelector(".following");
let profileLink = document.querySelector(".profile-link");
let username = "pedrolucas08";

const getUserInfo = async () => {
  let url = `https://api.github.com/users/${username}`;

  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let {
      avatar_url,
      name,
      login,
      public_repos,
      followers,
      following,
      html_url,
    } = await response.json();

    profileAvatar.src = avatar_url;
    profileName.textContent = name;
    profileUsername.textContent = login;
    repositories.textContent = public_repos;
    userFollowers.textContent = followers;
    userFollowing.textContent = following;
    profileLink.href = html_url;
  } catch (error) {
    console.error(error);
  }
};

getUserInfo();
