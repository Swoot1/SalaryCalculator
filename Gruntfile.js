module.exports = function (grunt) {

   var files = [
      'Public/css/Foundation/js/vendor/fastclick.js',
      'Public/Scripts/Vendor/Angular/angular.js',
      'Public/Scripts/Vendor/Angular/angular-messages.js',
      'Public/Scripts/Vendor/Angular/Plugins/angular-resource.js',
      'Public/Scripts/Vendor/Angular/Plugins/angular-route.js',
      'Public/Scripts/app.js',
      'Public/Scripts/Factories/*.js',
      'Public/Scripts/Directives/*.js',
      'Public/Scripts/Directives/**/*.js',
      'Public/Scripts/Filters/*.js',
      'Public/Scripts/Services/*.js',
      'Public/Scripts/Parsers/*.js',
      'Public/Scripts/Controllers/*.js'
   ];

   grunt.initConfig(
      {
         pkg: grunt.file.readJSON('package.json'),
         concat: {
            options: {
               separator: ';',
               sourceMap: true,
               sourceMapStyle: 'link'
            },
            dist: {
               src: files,
               dest: 'dist/<%= pkg.name %>.js'
            }
         },
         watch: {
            files: files,
            tasks: ['default'],
            options: {
               event: ['all']
            }
         },
         concat_sourcemap: {
            options: {
               sourcesContent: true,
               stripBanners: true
            },
            target: {
               files: {
                  'dest/default_options.js': files
               }
            }
         },
         uglify: {
            options: {
               banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */ \n',
               sourceMap: true,
               sourceMapIncludeSources: true
//               sourceMapIn: 'dist/<%= pkg.name %>.min.js.map'
            },
            dist: {
               files: {
                  'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
               }
            }
         }
      }
   );

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-concat-sourcemap');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-concat');

   // the default task can be run just by typing "grunt" on the command line
   grunt.registerTask('default', ['concat', 'uglify']);
};