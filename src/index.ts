import app from './app';
import properties from './config/properties';

async function main() {
  try {
    app.listen(3000, () => {
      console.log('Server listen on port 3000');
    });
  } catch (error) {
    console.log(error);
    console.log(JSON.stringify(error));
  }
}

main();
