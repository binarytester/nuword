import { createCanvas } from "canvas";
const WordCloud = require("node-wordcloud")();

function generateCloud(list: Array<[string, number]>) {
    const canvas = createCanvas(500, 200);
    const options = {
        gridSize: 8,
        rotateRatio: 0,
        rotationSteps: 7,
        rotationRange: [-70, 70],
        backgroundColor: "#fff",
        sizeRange: [18, 70],
        fontWeight: "bold",
        fontFamily: `"PingFang SC", "Microsoft YaHei", "Segoe UI Emoji", "Segoe UI Emoji","Segoe UI Historic"`,
        shape: "circle",
    };

    const wordcloud = WordCloud(canvas, { list, ...options });

    wordcloud.draw();

    // Convert canvas to data URL (Base64-encoded image)
    const dataURL = canvas.toDataURL("image/png");

    return dataURL; // Return the data URL of the generated image
}

export default generateCloud;