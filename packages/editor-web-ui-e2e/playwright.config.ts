import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:3000';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),

  use: {
    baseURL,
    trace: 'on-first-retry',
    headless: true,
  },

  webServer: {
    command: 'npx nx run @koi/web-ui:start',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    cwd: workspaceRoot ?? process.cwd(),
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
