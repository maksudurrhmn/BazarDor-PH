const dns = require('node:dns');
const { spawn } = require('node:child_process');
const { resolve, sep } = require('node:path');

dns.setServers(['8.8.8.8', '8.8.4.4']);

const nextBin = require.resolve('next/dist/bin/next');
const dnsFix = resolve(__dirname, 'dns-fix.cjs').split(sep).join('/');

// Forward the DNS fix to Next.js and its child Node.js processes.
process.env.NODE_OPTIONS = `--require ${JSON.stringify(dnsFix)}`;

const child = spawn(process.execPath, [nextBin, 'dev'], {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => {
  process.exitCode = code ?? 1;
});
