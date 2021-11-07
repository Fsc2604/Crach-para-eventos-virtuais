const LinksSocialMedia = {
  github: 'Fsc2604',
  youtube: 'jakelinygracielly',
  facebook: 'fabio.carvalho.9041',
  instagram: 'carvalhofabiosantana',
  twitter: "'fabioca70330155'"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
