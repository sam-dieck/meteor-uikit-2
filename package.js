Package.describe({
  name: 'samdieck:uikit-2',
  version: '0.0.4',
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

  // Core
  api.addFiles('uikit-2/css/uikit.almost-flat.min.css', 'client');
  api.addFiles('uikit-2/js/uikit.min.js', 'client');

  // Font
  api.addFiles('uikit-2/fonts/fontawesome-webfont.eot', 'client');
  api.addFiles('uikit-2/fonts/fontawesome-webfont.ttf', 'client');
  api.addFiles('uikit-2/fonts/fontawesome-webfont.woff', 'client');
  api.addFiles('uikit-2/fonts/fontawesome.otf', 'client');

  // Components
  api.addFiles('uikit-2/css/components/datepicker.almost-flat.min.css', 'client');
  api.addFiles('uikit-2/js/components/datepicker.min.js', 'client');

  api.addFiles('uikit-2/css/components/sticky.almost-flat.min.css', 'client');
  api.addFiles('uikit-2/js/components/sticky.min.js', 'client');

  api.addFiles('uikit-2/css/components/notify.almost-flat.min.css', 'client');
  api.addFiles('uikit-2/js/components/notify.min.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('samdieck:uikit-2');
  //api.addFiles('uikit-2-tests.js');
});
