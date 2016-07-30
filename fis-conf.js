fis
  .match('/{node_modules, src}/**.js', {
    isMod: true
  })

  .match(/^\/src\/(index\.html)/, {
    release: '$1'
  })

  .match('/src/**.js', {
    parser: fis.plugin('babel-5.x', {
      optional: ["es7.decorators", "es7.classProperties"],
      stage: 0
    }),
    rExt: '.js',
    preprocessor: fis.plugin('js-require-css')
  })

  .match('*.scss', {
    parser: fis.plugin('node-sass'),
    rExt: '.css'
  })

  .unhook('components')
  .hook('node_modules')

  .hook('commonjs', {
    extList: ['.js']
  })

  .match('::package', {
    postpackager: fis.plugin('loader', {
      allInOne: {
        js: function(file) {
          return '/build/aio.js'
        },
        css: function(file) {
          return '/build/style.css'
        }
      }
    })
  })

// fis3 release prod
fis
  .media('prod')
  .match('*.js', {
    usehash: true,
    optimizer: fis.plugin('uglify-js')
  })
  .match('*.css', {
    usehash: true,
    optimizer: fis.plugin('clean-css')
  })
  .match('/src/**.js', {
    usehash: false,
    optimizer: null
  })

fis.get('project.ignore').push('dist/**')
fis.get('project.ignore').push('package.json')
fis.get('project.ignore').push('README.md')
