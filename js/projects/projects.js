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
var reposFiltered = [];

async function getProjects() {
    getGitHubReposJson(function(reposJson) {
        repos = reposJson;
        getFilterJson(function(filterJson) {
            filter = filterJson;
            return filterRepos(repos, filter);
        });
    });  
}

function getGitHubReposJson(callback) {
    let requestURL = 'https://api.github.com/users/sudoariel/repos';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        callback(request.response);
    }
}

function getRepoLanguagesJson(requestURL, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        callback(request.response);
    }
}

function getFilterJson(callback) {
    let requestURL = 'js/projects/filter.json';
    let request = new XMLHttpRequest();
    request.overrideMimeType('application/json');
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        callback(request.response);
    }
}

function filterRepos(reposJson, filterJson) {
    let newRepos = reposJson.filter(function (repo) {
        return filterJson.find(repoFilter => repoFilter.repo === repo.name) !== undefined;
    });

    for(let i = 0; i < newRepos.length; i++) {
        getRepoLanguagesJson(newRepos[i].languages_url, function(languagesJson) {
            filterRepoData = filterJson.find(repoFilter => repoFilter.repo == newRepos[i].name)
            reposFiltered.push(new Project(
                filterRepoData.title,
                filterRepoData.repo,
                newRepos[i].description,
                newRepos[i].html_url,
                Object.keys(languagesJson)
            ));      
        });
    }
    return reposFiltered;
}