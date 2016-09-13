const spawn = require('child_process').spawn;
const ls = spawn('git', ['push','https://martyzhou:4150will@github.com/MartyZhou/nodelearn.git', '-u', 'origin', 'master']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
