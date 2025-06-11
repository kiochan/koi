const { execSync } = require('child_process');

const componentArg = process.argv.find(
  (arg) => arg.startsWith('--component=') || arg.startsWith('-c=')
);
if (!componentArg) {
  console.error('❌ please pass conponent type --component=button');
  process.exit(1);
}

const component = componentArg.split('=')[1];
console.log(`📦 adding: ${component}`);

execSync(`npx shadcn@latest add ${component}`, {
  stdio: 'inherit',
  cwd: process.cwd(),
});
