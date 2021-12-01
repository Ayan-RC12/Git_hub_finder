class Github{
  constructor(){
    this.client_id='273d62e9393fe3e3c30e';
    this.client_sexret ='b836f0f7104cd2ef74356b392d388ded5c2ad0f4 ';
    this.repos_count =5;
    this.repos_sort ='created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
} 