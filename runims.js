const spawn = require('child_process').spawn;
const bat = spawn('cmd.exe', ['/c', 'D:\powershellscripts\IMS\startt.bat']);

bat.stdout.on('data', (data) => {
  console.log(data);
});

bat.stderr.on('data', (data) => {
  console.log(data);
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});
