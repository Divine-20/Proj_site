const github = document.querySelector('.github')
const linkedin = document.querySelector('.linkedin')
const email = document.querySelector('.email')
const twitter = document.querySelector('.twitter')

const githubApi = "https://github.com/Divine-20"
const linkedinApi = "https://www.linkedin.com/in/ingabire-divine-44113522a/"
const emailApi = "mailto:https://accounts.google.com/AccountChooser?source=ogb&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fdata%2Fu%2F1%2F&Email=ing.divine55%40gmail.com&ec=GAhAFw"
const twitterApi = "https://twitter.com/Divine55Ing"

github.addEventListener('click',()=>{
    window.open(url = githubApi, target ='blank')
})
linkedin.addEventListener('click',() =>{
    window.open(url = linkedinApi, target = 'blank')
})
email.addEventListener('click',() => {
    window.open(url = emailApi, target ='blank')
})
twitter.addEventListener('click',() => {
    window.open(url = twitterApi, target ='blank')
});


