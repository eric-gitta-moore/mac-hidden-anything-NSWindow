# macOS hidden anything NSWindow

English | [简体中文](./README.cn.md)

## Introduction

This is a tool that uses Frida to inject into Chrome and modify NSWindow behavior to hide any window content on macOS systems.

## Features

- Uses Frida framework for injection
- Intercepts NSWindow initialization methods
- Modifies window sharing type to achieve content hiding

## Installation

```bash
pnpm install
```

## Usage

1. Start the project:

```bash
pnpm start
```

2. If you want to specify a Chrome path, you can pass it as an argument:

```bash
pnpm start "path/to/your/chrome"
```

## How it works

This tool injects into the target Chrome process using Frida, intercepts NSWindow initialization methods, and sets the window sharing type to 0, thereby hiding the window content.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.