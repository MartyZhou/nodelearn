const http = require('http');
const spawn = require('child_process').spawn;
const ls = spawn('git', ['status']);

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
   
    var message = 'test message';
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    message = data;
//     res.end('Hello World\n' + data);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    //     res.end('Hello World Error\n');
    message = data;
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    //     res.end('Hello World child process exited\n');
    message = 'child process exited with code ' + code;
});

    setTimeout(()=>{
	res.end(message);
    }, 2000);
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
