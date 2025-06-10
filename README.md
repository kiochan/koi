# Koi

[![Version](https://img.shields.io/github/package-json/v/kiochan/koi?style=flat-square)](https://github.com/kiochan/koi/blob/main/package.json)
[![Build](https://img.shields.io/github/actions/workflow/status/kiochan/koi/ci.yml?label=Build&style=flat-square)](https://github.com/kiochan/koi/actions)
[![Last Commit](https://img.shields.io/github/last-commit/kiochan/koi?style=flat-square)](https://github.com/kiochan/koi/commits/main)

[![Made with Nx](https://img.shields.io/badge/monorepo-managed%20by%20Nx-blueviolet?style=flat-square)](https://nx.dev/)
[![Next.js](https://img.shields.io/badge/frontend-Next.js-black?logo=next.js&style=flat-square)](https://nextjs.org/)
[![Electron](https://img.shields.io/badge/built%20with-Electron-47848F?logo=electron&logoColor=white&style=flat-square)](https://www.electronjs.org/)
[![Capacitor](https://img.shields.io/badge/mobile-Capacitor-119EFF?logo=capacitor&style=flat-square)](https://capacitorjs.com/)

**Koi** is a modern, cross-platform framework for creating Japanese-style visual novels. It enables anyone to build immersive, offline-friendly narrative games with minimal effort and maximum creative control.

---

## Philosophy

### Cross-Platform

- Runs on Windows, macOS, Linux, iOS, and Android
- One codebase for desktop and mobile
- Built with Electron (desktop) and Capacitor (mobile)

### Minimal Workflow

> "I just want to tell a story — not manage fade-ins or sprite effects."

- Automates transitions, effects, and visual logic
- You focus on writing dialogue, scenes, and story choices
- Advanced users can override default behaviors

### Offline First

- No login, no cloud, no server required
- Games are fully playable offline
- Designed to work anywhere — even on planes or trains

---

## Tech Stack

| Layer        | Technology                    |
| ------------ | ----------------------------- |
| Frontend     | Next.js, React, Tailwind CSS  |
| Main process | Electron, TypeScript          |
| Mobile       | Capacitor                     |
| Build system | Nx, esbuild, electron-builder |
| Scripting    | Custom DSL (planned)          |

---

## Getting Started

Clone & install:

```bash
git clone https://github.com/kiochan/koi.git
cd koi
npm install
```

Run in desktop development mode:

```bash
npx nx run @koi/editor-main:dev
```

Build for production:

```bash
npx nx run @koi/editor:build
```

Output is located in `packages/editor/dist/`.

---

## Contributing

Contributions are welcome. Whether you're a:

- Writer looking for a better storytelling tool
- Developer interested in creative platforms
- Visual novel fan with feedback or ideas

Feel free to open issues or submit pull requests.

---

## Author

Created by [Kiochan](https://github.com/kiochan)

[![MIT License](https://img.shields.io/github/license/kiochan/koi?style=flat-square)](LICENSE)
