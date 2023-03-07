import initApp from './src/app.js';

const app = initApp();
app.listen(3080, () => {
    console.log('Running on port 3080');
});