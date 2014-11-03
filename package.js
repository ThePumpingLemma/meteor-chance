Package.describe({
  name: 'thepumpinglemma:chance',
  summary: 'Meteor package that wraps the Chance.js NPM package. See http://chancejs.com/ for more details.',
  version: '1.0.0',
  git: 'https://github.com/ThePumpingLemma/meteor-chance.git'
});

Npm.depends({
  'chance': '0.6.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Chance')
  api.addFiles('.npm/package/node_modules/chance/chance.js', ['client'])
  api.addFiles('thepumpinglemma:chance.js');
});

