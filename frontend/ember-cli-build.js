'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
// const isProduction = EmberApp.env() === 'production';

// const purgeCSS = {
//   module: require('@fullhuman/postcss-purgecss'),
//   options: {
//     content: [
//       // add extra paths here for components/controllers which include tailwind classes
//       './app/index.html',
//       './app/templates/**/*.hbs',
//       './app/components/**/*.hbs',
//     ],
//     defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
//   },
// };

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        extension: 'scss',
        enabled: true,
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind.config.js$/],
        parser: require('postcss-scss'),
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          {
            module: require('tailwindcss'),
            options: {
              config: './app/styles/tailwind.config.js',
            },
          },
          {
            module: require('@appuniversum/ember-appuniversum'),
          },
        ],
      },
    },
  });
  return app.toTree();
};
