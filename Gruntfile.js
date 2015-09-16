
var requirejsConfig = require('./src/main.require');

var app = require('./src/app.require');
var modules = [{
    name: "main.require",
    include: [],
}];

modules = modules.concat(requirejsConfig.modules);

initModule(app);

module.exports = gruntTasks;

function initModule(module){
    var files, name, include;
    files = module.files || {};
    include = files.dev;
    if(include){
        name = files.prod;
        name = Array.isArray(name) ? name[0] : name;
        modules.push({name: name, include: include});
    }
    
    (module.modules || []).forEach(function(){
        initModule.apply(null, arguments);
    });
}

function gruntTasks(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                jshintrc: true
            }
        },
        requirejs: {
            compile: {
                options: {
                    paths: requirejsConfig.paths,
                    removeCombined: true,
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^\.|.jade$/,
                    baseUrl: './src',
                    dir: "./dist",
                    optimize: 'uglify2',
                    optimizeCss: 'standard',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    modules: modules,
                    done: function(done, output) {
                        console.log('output', output);
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['requirejs']);
}