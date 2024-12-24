The solution focuses on robust error handling and clear credential management:

```javascript
const admin = require('firebase-admin');

// Improved credential handling with explicit error catching
try {
  const serviceAccount = require('./path/to/serviceAccountKey.json'); // Ensure correct path
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "YOUR_DATABASE_URL"
  });
  console.log('Firebase Admin SDK initialized successfully!');
} catch (error) {
  console.error('Error initializing Firebase Admin SDK:', error);
  // Add more specific error handling, like checking for file existence or permissions
  if (error.code === 'ENOENT') {
    console.error('Service account file not found. Check the path and file permissions.');
  } else if (error.code === 'PERMISSION_DENIED') {
    console.error('Permission denied. Ensure the service account has the necessary permissions.');
  }
  // Exit or handle the error appropriately for your application
  process.exit(1);
}
```

Ensure that:

*   The `serviceAccountKey.json` file exists at the specified path and has correct permissions.
*   The `databaseURL` is set to your Firebase project's Database URL.
*   The service account has the necessary permissions in your Firebase project.