const spawn = require('child_process').spawn;
const ls = spawn('git', ['remote', 'add', 'origin', 'https://github.com/MartyZhou/nodelearn.git']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
