import app from './app';

async function main() {
  try {
    app.listen(3000);
  } catch (error) {
    console.log(error);
    console.log(JSON.stringify(error));
  }
}

main();
