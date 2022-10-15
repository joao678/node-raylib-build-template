const r = require('raylib');
const fs = require('fs');
const path = require('path');

const screenWidth = 800;
const screenHeight = 450;

r.InitWindow(screenWidth, screenHeight, "Hello World!");
r.SetTargetFPS(60);

//example reading a text file from assets folder using nodejs fs module with current working directory path (can be replaced using raylib functions to read files)
const textFromFile = fs.readFileSync(path.resolve(process.cwd() + '/assets/test.txt')).toString();
//example loading image from assets folder using a raylib function
const exampleTexture = r.LoadTexture('./assets/image.png');
r.SetTextureFilter(exampleTexture, r.TEXTURE_FILTER_BILINEAR);

const textWidth = r.MeasureText(`text from "test.txt": ${textFromFile}`, 20);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.RAYWHITE);
    r.DrawText(`text from "test.txt": ${textFromFile}`, (screenWidth/2)-(textWidth/2), 100, 20, r.RED);
    r.DrawTexture(exampleTexture, (screenWidth/2)-(exampleTexture.width/2), (screenHeight/2)-(exampleTexture.height/2), r.RAYWHITE);
    r.EndDrawing();
}

r.CloseWindow()