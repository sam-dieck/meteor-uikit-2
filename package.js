Package.describe({
  name: 'samdieck:uikit-2',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'uikit-2 package for meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/samdieck/meteor-uikit-2',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // css
  api.addFiles('uikit-2/css/uikit.min.css', 'client');
  api.addFiles('uikit-2/css/uikit.almost-flat.min.css', 'client');
  api.addFiles('uikit-2/css/uikit.almost-flat.min.css', 'client');

  // js
  api.addFiles('uikit-2/js/uikit.min.js', 'client');

  // fonts
  api.addFiles('uikit-2/fonts/fontawesome-webfont.eot', 'client');
  api.addFiles('uikit-2/fonts/fontawesome-webfont.ttf', 'client');
  api.addFiles('uikit-2/fonts/fontawesome-webfont.woff', 'client');
  api.addFiles('uikit-2/fonts/fontawesome.otf', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('samdieck:uikit-2');
  //api.addFiles('uikit-2-tests.js');
});
