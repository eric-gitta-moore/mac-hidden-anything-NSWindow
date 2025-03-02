import path from "path";
import { spawn } from "child_process";
import process from "process";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
spawn(
  "frida",
  [
    "-f",
    process.argv[2] ||
      `/Users/bytedance/workspace/chrome-mac/92.0.4506.0/Chromium.app/Contents/MacOS/Chromium`,
    "-l",
    path.join(__dirname, "frida-script.js"),
    "--runtime",
    "v8",
    "--debug",
  ],
  {
    stdio: "inherit",
  }
);
