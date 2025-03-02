function main() {
  console.log("[*] hello frida");

  const NSWindowInitFns = [
    {
      name: "- initWithContentRect:styleMask:backing:defer:",
      fn: ObjC.classes.NSWindow[
        "- initWithContentRect:styleMask:backing:defer:"
      ],
    },
    {
      name: "- initWithContentRect:styleMask:backing:defer:screen:",
      fn: ObjC.classes.NSWindow[
        "- initWithContentRect:styleMask:backing:defer:screen:"
      ],
    },
  ];

  NSWindowInitFns.forEach(({ name, fn }) => {
    Interceptor.attach(fn.implementation, {
      onEnter: function (args) {
        console.log(
          `[+] NSWindow initWithContentRect has called, instance self address: ${args[0]}`
        );
      },
      onLeave: function (retval) {
        console.log(`[+] NSWindow initWithContentRect has returned`);
        const self = ObjC.Object(retval);
        self.setSharingType_(0);
        console.log(`[+] setSharingType_ to 0 successfully`);
      },
    });
    console.log(`[+] intercepted [${name}] methods`);
  });
}

setTimeout(() => {
  main();
}, 1000);
