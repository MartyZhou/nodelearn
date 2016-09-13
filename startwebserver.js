const http = require('http');
const exec = require('child_process').exec;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
   
    var message = 'test message';

    exec('git status', (err, stdout, stderr) => {
	message += '\nGit status';
	message +=  '\n' + stdout + '\nerr' + err + '\nstderr' + stderr;

	// add
	exec('git add *', (err, stdout, stderr) => {
	    message += '\nGit add *';
	    message +=  '\n' + stdout + '\nerr' + err + '\nstderr' + stderr;

	    exec('git commit -m "another commit"', (err, stdout, stderr) => {
		message += '\nGit commit';
		message +=  '\n' + stdout + '\nerr' + err + '\nstderr' + stderr;

		exec('git push https://martyzhou:4150will@github.com/MartyZhou/nodelearn.git', (err, stdout, stderr) => {
		    message += '\nGit push';
		    message +=  '\n' + stdout + '\nerr' + err + '\nstderr' + stderr;
		    
		});
	    });
	res.end(message + '\n end of message');
	});
    });
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
