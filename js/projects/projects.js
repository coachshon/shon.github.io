class Project {
    constructor(title, name, description, url, languages) {
        this.title = title;
        this.name = name;
        this.description = description;
        this.url = url;
        this.languages = languages;
    }
}

var repos, filter; 

function getProjects() {
    getGitHubReposJson();
    getFilterJson()
}

function getGitHubReposJson() {
    let requestURL = 'https://api.github.com/users/sudoariel/repos';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        repos = request.response;
    }
}

function getFilterJson() {
    let requestURL = 'js/projects/filter.json';
    let request = new XMLHttpRequest();
    request.overrideMimeType('application/json');
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        filter = request.response;
    }
}