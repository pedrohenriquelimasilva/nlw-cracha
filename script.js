const userCount = {
  gitHub: 'pedrohenriquelimasilva',
  youtube: 'pedro lima',
  facebook: 'pedrohenrique',
  instagram: 'p3dr0_ath',
  twitter: 'pedro'
}

function changeSocialMidia() {
  for (let li of socialMidiaLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${userCount[social]}`
  }
}

changeSocialMidia()

function getInfoGithubProfile() {
  const urlAPI = `https://api.github.com/users/${userCount.gitHub}`

  fetch(urlAPI)
    .then(response => response.json())
    .then(data => {
      people.textContent = data.name
      profileBio.textContent = data.bio
      profileUrlGithub.href = data.html_url
      profileImageGithub.src = data.avatar_url
      profileName.textContent = data.login
    })
}

getInfoGithubProfile()
