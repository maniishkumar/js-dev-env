import Express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 2112;
const app = new Express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.get('/', (req, res) => {
    //res.send('Hello world');
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
});