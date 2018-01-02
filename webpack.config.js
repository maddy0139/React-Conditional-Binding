var  config  =  {
    entry:  './src/App.js',
    output:  {
        path:  './build',
        filename:  'index.js'
    },
    module:  {
        loaders:  [
            {
                test:  /\.js?$/,
                exclude:  /node_modules/,
                loader:  'babel',
                query:  {
                    presets:  ['es2015',  'react']
                }
            }
        ]
    }
}
module.exports  =  config;
