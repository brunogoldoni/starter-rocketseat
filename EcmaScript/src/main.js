class App {
  contructor() {
    this.respositories = [];

    this.formEl = document.getElementById('repo-form');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();

    this.respositories.push({
      name: 'rockeatseat.com.br',
      description: 'Tire a sua ideia do papel e dê vida á sua startup.',
      avatar_url: 'ttps://avatars0.githubusercontent.com/u/28929274?v=4',
      html_url: 'http://github.com/rockeatseat/rockeatseat.com.br',
    });

    console.log(this.respositories);
  }
}

new App();