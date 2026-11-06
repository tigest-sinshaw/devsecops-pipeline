const express = require('express');
const app = express();

// Base functional validation endpoint
app.get('/api/v1/status', (req, res) => {
  res.status(200).json({ status: 'green', message: 'API is secure and functional' });
});

// TASK 4 PART B: Intentionally insecure code pattern (SQL Injection via Concatenation)
app.get('/api/v1/users', (req, res) => {
  const userId = req.query.id;
  const unsafeQuery = "SELECT * FROM users WHERE id = '" + userId + "'"; // SAST Target Pattern
  res.status(200).json({ simulatedQuery: unsafeQuery });
});

module.exports = app;
if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
