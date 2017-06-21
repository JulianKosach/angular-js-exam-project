module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/*.js',
				dest: 'build/*.min.js'
			}
		},
		karma: {
			unit: {
				options: {
					files: [

						// resource
						'src/html/libs/underscore-min.js',

						'src/html/libs/angular.min.js',
						'src/html/libs/angular-animate.min.js',
						'src/html/libs/angular-resource.min.js',
						'src/html/libs/angular-route.min.js',
						'src/html/libs/angular-mocks.js',

						'src/html/js/app.module.js',
						'src/html/js/app.config.js',

						'src/html/js/core/core.module.js',
						'src/html/js/core/album/album.module.js',
						'src/html/js/core/album/album.service.js',

						'src/html/js/albums-list/albums-list.module.js',
						'src/html/js/albums-list/albums-list.component.js',

						'src/html/js/album-detail/album-detail.module.js',
						'src/html/js/album-detail/album-detail.component.js',
						
						'src/html/js/album-add/album-add.module.js',
						'src/html/js/album-add/album-add.component.js',
						
						'src/html/js/album-edit/album-edit.module.js',
						'src/html/js/album-edit/album-edit.component.js',
						
						'src/html/js/album-delete/album-delete.module.js',
						'src/html/js/album-delete/album-delete.component.js',

						// tests
						'src/tests/album.service.spec.js',
						'src/tests/albums-list.service.spec.js',
						'src/tests/album-detail.service.spec.js'
					],
					frameworks: ['jasmine'],
					plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
					browsers: ['PhantomJS'],
					port: 9999,
					singleRun: true,
					logLevel: 'ERROR'
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-karma');

	function start_server() {

		// Force task into async mode and grab a handle to the "done" function.
		var done = this.async();
		// Run some sync stuff.
		grunt.log.writeln('Processing task...');

		try {

			require('./src/server.js')();

		} catch (e) {
			console.error(e);
			done();
		}
	}

	grunt.registerTask('start_server', start_server);
	grunt.registerTask('test', ['karma']);
	grunt.registerTask('start', ['test', 'start_server']);

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'start']);
};