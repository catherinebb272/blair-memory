import { createWorker } from 'tesseract.js';

const imgPath = process.argv[2];
const worker = await createWorker('eng');
const { data } = await worker.recognize(imgPath);
console.log('=== TEXT ===');
console.log(data.text);
console.log('=== CONF ===');
console.log(JSON.stringify(data.confidence, null, 2));
await worker.terminate();
