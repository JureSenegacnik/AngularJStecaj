module.exports = function (grunt) {

    grunt.initConfig({
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            compile: {
                files: {
                    'dist/index.html': 'dist/index.html'

                }
            },
            empty: {
                files: {
                    'dist/index.html': 'dist/index.html'
            
                }
            }
        },
        browserify: {
          main: {
              files: {
                  'dist/js/app.js': ['src/main.ts']
              },
              options: {
                  plugin: ['tsify'] /*compiler za pretvorbo typescripta v javascript*/ 
              }
          }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['src/**/*.html'], dest: 'dist/'}
                ]
            }
        },
        connect: { /*tole naaredi, da zaganjaš aplikacijo kot na serverju, ne kot odpiranje datoteke */
            server: {
                options:{
                    port:48080,
                    hostname: 'localhost',
                    base: 'dist', //tole nujno sem
                    livereload: 35729
               }
            }
        },
        tslint:
        {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: ['src/**/*.ts']
            }
        },
        less:
        {
          production: {
              files: {
                  'dist/css/main.css': 'src/assets/main.less' //tu lahko das vejico in nastejes se druge lesse
              }
          }
        },
        watch:{ /*tole poskrbi, da se server ne samo prizge in ugasne, ampak ostane prizgan se naprej in lahko
            gledas to stran/app: tu potem nastjes, na katere fajle pazi in osvezi ob spremembi*/
            html:{
                files: ['src/**/*.html'],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: ['src/**/*.ts'],
                tasks: ['browserify', 'tslint'],//tu moras napisati, da zazeen se tslint, ko kaj spremenis
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['src/assets/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
        }
   
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');


    
  

    grunt.registerTask('build', ['less', 'copy', 'tslint','htmlmin', 'browserify', 'connect:server', 'watch']);
    /*grunt.registerTask('dev', ['less', 'copy', 'tslint', 'browserify', 'connect:server', 'watch']);
    grunt.registerTask('production', ['less', 'copy', 'tslint', 'browserify', 'connect:server', 'watch']);*/
    /*regstertask so razlicni tipi buildanja */
};
