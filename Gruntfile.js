
var requirejsConfig = require('./src/main.require');

var app = require('./src/app.require');
var modules = [{
    name: "main.bundle",
    include: ['main.require'],
}];

modules = modules.concat(requirejsConfig.modules);

console.log('modules', modules);

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
                    generateSourceMaps: false,
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