export class App {
  configureRouter(config, router) {
    config.title = 'Smashator!';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'create-bracket',         name: 'create-bracket',        moduleId: 'create-bracket',        nav: true, title: 'Create bracket' }
    ]);

    this.router = router;
  }
}
