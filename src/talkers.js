const fs = require('fs').promises;
const { join } = require('path');

const readTalkerFile = async () => {
    const path = '/talker.json';
    try {
        const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
        return JSON.parse(contentFile);
    } catch (err) {
        return null;
    }
};

const getAllTalkers = async () => {
    const talkers = await readTalkerFile();
    return talkers;
};

const getTalkerByID = async (id) => {
    const talkers = await readTalkerFile();
    return talkers.find((t) => t.id === id);
};

module.exports = {
  getAllTalkers,
  getTalkerByID,  
};