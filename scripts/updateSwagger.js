const axios = require('axios');
const fs = require('fs');
const prettier = require('prettier');

const saveFile = async (fileUrl, filePath) => {
  const response = await axios({
    url: fileUrl,
    method: 'GET',
    responseType: 'arraybuffer',
  });

  const content = response.data.toString();
  console.log('content', content);

  const prettierConfigPath = await prettier.resolveConfigFile(filePath);
  const prettierOptions = await prettier.resolveConfig(prettierConfigPath);

  const formattedContent = prettier.format(content, {
    ...prettierOptions,
    // parser: 'json',
    parser: 'yaml',
  });
  fs.writeFileSync(filePath, formattedContent);
  console.log('File downloaded and formatted successfully!');
};

(async () => {
  try {
    await saveFile(
      'https://interface-dev.liftshare.com/swagger/client/swagger.yaml',
      './src/api/client/swagger.yaml',
    );
    await saveFile(
      'https://interface-dev.liftshare.com/swagger/private/swagger.yaml',
      './src/api/private/swagger.yaml',
    );
    await saveFile(
      'https://interface-dev.liftshare.com/swagger/v2/swagger.yaml',
      './src/api/v2/swagger.yaml',
    );
  } catch (error) {
    console.error('Error executing saveFile:', error);
  }
})();
