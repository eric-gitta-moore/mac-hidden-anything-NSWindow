# macOS hidden anything NSWindow

[English](./README.md) | 简体中文

## 简介

这是一个使用Frida注入Chrome的工具，用于修改NSWindow的行为，使其在macOS系统上隐藏任何窗口内容。

## 功能特点

- 使用Frida框架进行注入
- 拦截NSWindow的初始化方法
- 修改窗口的共享类型，实现内容隐藏

## 安装

```bash
pnpm install
```

## 使用方法

1. 启动项目：

```bash
pnpm start
```

2. 如果要指定Chrome路径，可以作为参数传入：

```bash
pnpm start "path/to/your/chrome"
```

## 工作原理

该工具通过Frida注入目标Chrome进程，拦截NSWindow的初始化方法，并将窗口的共享类型设置为0，从而实现窗口内容的隐藏。

## 许可证

本项目采用MIT许可证。详情请参见[LICENSE](./LICENSE)文件。