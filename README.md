# macOS hidden anything NSWindow

English | [简体中文](./README.cn.md)

![1740917307696](https://github.com/user-attachments/assets/87d14952-ffc0-4924-8dc7-14e6bf541f54)

## Introduction

This is a tool that uses Frida to inject into Chrome and modify NSWindow behavior to hide any window content on macOS systems.

## ⚠️ Warning ⚠️
- Before executing any command in this document, please understand what it does.
- Pay particular attention to the four commands in the [Precondition](#Precondition) section.  It is essential that you understand them before executing them.

## Quickstart
```bash
pnpx github:eric-gitta-moore/mac-hidden-anything-NSWindow#main "path/to/your/chrome"
```

## Features

- Uses Frida framework for injection
- Intercepts NSWindow initialization methods
- Modifies window sharing type to achieve content hiding

## Precondition
- Close the sip
- Change boot-args `sudo nvram boot-args="-arm64e_preview_abi thid_should_crash=0 tss_should_crash=0"`
- `sudo spctl --master-disable`
- `sudo spctl --global-disable`

## Installation

```bash
pip install frida frida-tool

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

e.g.

```bash
pnpm start '/Users/bytedance/workspace/chrome-mac/92.0.4506.0/Chromium.app/Contents/MacOS/Chromium'
```

3. Inject success
```diff
Spawning `/Applications/Google Chrome Dev.app/Contents/MacOS/Google Chrome Dev`...
Chrome Inspector server listening on port 9229

Spawned `/Applications/Google Chrome Dev.app/Contents/MacOS/Google Chrome Dev`. Resuming main thread!
[Local::Google Chrome Dev ]-> [*] hello frida
[+] intercepted [- initWithContentRect:styleMask:backing:defer:] methods
[+] intercepted [- initWithContentRect:styleMask:backing:defer:screen:] methods
[+] NSWindow initWithContentRect has called, instance self address: 0x104016157c0
[+] NSWindow initWithContentRect has returned
+ [+] setSharingType_ to 0 successfully
[+] NSWindow initWithContentRect has called, instance self address: 0x10401ea6c00
[+] NSWindow initWithContentRect has returned
+ [+] setSharingType_ to 0 successfully
```

## How it works

This tool injects into the target Chrome process using Frida, intercepts `NSWindow` initialization methods, and sets the window sharing type to `NSWindowSharingNone`, thereby hiding the window content.

## License

This project is licensed under the WTFPL License. See the [LICENSE](./LICENSE) file for details.
