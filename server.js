function startServer () {
  // Import and require express
  const express = require('express');
  
  const PORT = process.env.PORT || 3001;
  const app = express();

  // Express middleware
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Import and require mysql2
  const mysql = require('mysql2');
  // Connect to database
  const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'bergus33',
      database: 'company_db'
    },
    console.log(`Connected to the 'company_db' database.`)
  );

  app.listen(PORT, () => {
    (console.log(`Server running on port ${PORT}`));
  });
  
  return db;
}

module.exports = {startServer};
