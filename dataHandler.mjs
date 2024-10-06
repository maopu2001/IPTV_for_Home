import { config } from 'dotenv';
config();

export default async function handleData() {
  try {
    const data = await fetch(process.env.url);
    const response = await data.text();

    const arr = response.split('\n');
    let newData = arr[0];
    arr.shift();
    for (let i = 0; i < arr.length; i += 2) {
      const item1 = arr[i];
      if (!item1.includes('group-title="BANGLADESH"')) {
        continue;
      }
      const item2 = arr[i + 1];
      newData += '\n' + item1 + '\n' + item2;
    }
    return newData;
  } catch (err) {
    return err;
  }
}
