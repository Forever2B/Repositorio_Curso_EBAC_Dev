// https://api.github.com/users/Forever2B


document.addEventListener('DOMContentLoaded', function() {
    const ElementRepositories = $('#repositories');
    const ElementProfileIcon = $('#profile-icon');
    const ElementProfileLink = $('#profile-link');
    const ElementFollowers = $('#followers');
    const ElementUserName = $('#user-name');
    const ElementFollows = $('#follows');
    const ElementName = $('#name');

    fetch('https://api.github.com/users/Forever2B')
    .then(function(res) {
        if (!res.ok) {
            throw new Error(`Requisição da api: ${res.status} ${res.statusText}`);
        }
        return res.json();
    })
    .then(function(json) {
        ElementProfileIcon.attr('src', json.avatar_url);
        ElementProfileLink.attr('href', json.html_url);
        ElementRepositories.text(json.public_repos);
        ElementFollowers.text(json.followers);
        ElementUserName.text(json.login);
        ElementFollows.text(json.following);
        ElementName.text(json.name);
    })
    .catch(function(erro) {
        console.log(`%cfetch() -> .catch%c : %c${erro}`, 'font-weight: bold; color: red;', '', 'text-decoration: underline;');
    })    
})