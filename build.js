const shell = require('shelljs');

shell.echo('Building site...');
shell.rm('-rf','dist');
shell.mkdir('dist');
shell.cp('index.html','dist/');
shell.cp('-R','images','dist/');
shell.cp('-R','css','dist/');
shell.echo('Build complete!');