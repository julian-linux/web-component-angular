const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/tweet/runtime.js',
        './dist/tweet/polyfills.js',
        './dist/tweet/scripts.js',
        './dist/tweet/main.js',
    ]
    await fs.ensureDir('build')
    await concat(files, 'build/tweet.js');
    await fs.copyFile('./dist/tweet/styles.css', 'build/styles.css')
    // await fs.copy('./dist/angularElements/assets/', 'elements/assets/' )
    
})()
