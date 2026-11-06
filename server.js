const express = require('express');
const app = express();

app.get('/api/v1/status', (req, res) => {
  res.status(200).json({ status: 'green', message: 'API is secure and functional' });
});

module.exports = app;
if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
