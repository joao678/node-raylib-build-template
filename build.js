const caxa = require('caxa').default;
require('dotenv').config();

(async () => {
    await caxa({
        input: ".",
        output: `./${process.env.EXE_NAME}.exe`,
        exclude: [
            "node.exe",
            `${process.env.EXE_NAME}.exe`,
            "build.js",
            "build.py",
            "assets"
        ],
        command: [
            "{{caxa}}/node_modules/.bin/node",
            "{{caxa}}/index.js"
        ],
    });
})();