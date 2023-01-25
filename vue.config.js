module.exports = {
    pages: {
        'index': {
            entry: './src/pages/Landing/main.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: [ 'chunk-vendors', 'chunk-common', 'index']
        },
        'app': {
            entry: './src/pages/App/main.js',
            template: 'public/index.html',
            title: 'App',
            chunks: ['chunk-vendors', 'chunk-common', 'app']
        }
    }
}