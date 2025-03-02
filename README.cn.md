# macOS hidden anything NSWindow

[English](./README.md) | 简体中文

## 简介

这是一个使用 Frida 注入Chrome的工具，用于修改 NSWindow 的行为，使其在 macOS 系统上隐藏任何窗口内容。

## Quickstart
```bash
pnpx github:eric-gitta-moore/mac-hidden-anything-NSWindow start "path/to/your/chrome"
```

## 功能特点

- 使用 Frida 框架进行注入
- 拦截 NSWindow 的初始化方法
- 修改窗口的共享类型，实现内容隐藏

## 前提条件
- 关闭 sip
- 修改 boot-args `sudo nvram boot-args="-arm64e_preview_abi thid_should_crash=0 tss_should_crash=0"`
- `sudo spctl --master-disable`
- `sudo spctl --global-disable`

## 安装

```bash
pip install frida frida-tool

pnpm install
```

## 使用方法

1. 启动项目：

```bash
pnpm start
```

2. 如果要指定 Chrome 路径，可以作为参数传入：

```bash
pnpm start "path/to/your/chrome"
```

e.g.

```bash
pnpm start '/Users/bytedance/workspace/chrome-mac/92.0.4506.0/Chromium.app/Contents/MacOS/Chromium'
```

3. 注入成功
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

## 工作原理

该工具通过 Frida 注入目标 Chrome 进程，拦截 `NSWindow` 的初始化方法，并将 `NSWindowSharingType` 设置为 `NSWindowSharingNone` ，从而实现窗口内容的隐藏。

## 许可证

本项目采用MIT许可证。详情请参见[LICENSE](./LICENSE)文件。