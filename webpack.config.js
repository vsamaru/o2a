module.exports = {
    entry: "./index.js",
    mode: "production",
    node: {
        fs: 'empty',
        net: 'empty',
        child_process: 'empty',
        tls: 'empty',
    },
    optimization: {
        minimize: false
    },
    output: {
        filename: "worker.js"
    },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: []
  }
}
