const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class FileService {
    async save(file) {
        try {
            if (!file || !file.mimetype) {
                throw new Error("Invalid file");
            }

            const mime = file.mimetype.split("/")[1] || "png"; // Default format
            const fileName = uuidv4() + "." + mime;
            const currentDir = __dirname;
            const staticDir = path.join(currentDir, '..', 'uploads');
            const filePath = path.join(staticDir, fileName);

            if (!fs.existsSync(staticDir)) {
                fs.mkdirSync(staticDir, { recursive: true });
            }

            await file.mv(filePath); // Asinxron qilib qo'ydik
            return fileName;
        } catch (error) {
            throw new Error(`Error saving file: ${error.message}`);
        }
    }
}

module.exports = new FileService();
