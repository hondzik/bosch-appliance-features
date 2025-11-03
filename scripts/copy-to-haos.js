import { copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source and destination paths
const localFile = path.join(__dirname, '..', 'dist', 'bosch-appliance-features.js');
const remotePath = 'H:\\www\\community\\bosch-appliance-features\\bosch-appliance-features.js';

async function copyFileToHAOS() {
  try {
    console.log('Copying file to HAOS server...');
    await copyFile(localFile, remotePath);
    
    console.log('File successfully copied to HAOS server.');
    console.log(`Destination: ${remotePath}`);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

copyFileToHAOS();