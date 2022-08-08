const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/i,
                use: "asset/resource",
            }
        ],
    },

    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    }
};