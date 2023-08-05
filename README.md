# Check Disposable Email

An NPM package that allows you to check whether an email address is disposable or temporary. It provides a simple and reliable way to detect email addresses associated with disposable email services commonly used for one-time registrations, spam, or temporary access.

[![npm version](https://badge.fury.io/js/check-disposable-email.svg)](https://badge.fury.io/js/check-disposable-email)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- Fast and lightweight package for email validation.
- Utilizes a list of known disposable email domains to make accurate checks.
- Works seamlessly with both TypeScript and JavaScript projects.

## Installation
You can easily install the package using npm or yarn:

```bash
npm install check-disposable-email
```
or

```
yarn add check-disposable-email
```

## Usage
The package exports a single function, isDisposableEmail, which checks if an email address is disposable:

JavaScript

```javascript
// Example using async/await
const { isDisposableEmail } = require('check-disposable-email');

async function checkEmailAndDoSomething(email) {
  try {
    const isDisposable = await isDisposableEmail(email);
    if (isDisposable) {
      console.log(`Email '${email}' is a disposable email.`);
    } else {
      console.log(`Email '${email}' is not a disposable email.`);
    }
    // Do something else here with the result...
  } catch (error) {
    console.error('Error while checking the email:', error);
  }
}

checkEmailAndDoSomething('user@example.com'); // Email user@example.com is a disposable email.


// Example using .then() and .catch()
const { isDisposableEmail } = require('check-disposable-email');

function checkEmailAndDoSomething(email) {
  isDisposableEmail(email)
    .then((isDisposable) => {
      if (isDisposable) {
        console.log(`Email '${email}' is a disposable email.`);
      } else {
        console.log(`Email '${email}' is not a disposable email.`);
      }
      // Do something else here with the result...
    })
    .catch((error) => {
      console.error('Error while checking the email:', error);
    });
}

checkEmailAndDoSomething('user@gmail.com'); // Email user@example.com is not a disposable email.
```

TypeScript

```typescript
// Example using async/await
import { isDisposableEmail } from 'check-disposable-email';

async function checkEmailAndDoSomething(email: string): Promise<void> {
  try {
    const isDisposable = await isDisposableEmail(email);
    if (isDisposable) {
      console.log(`Email '${email}' is a disposable email.`);
    } else {
      console.log(`Email '${email}' is not a disposable email.`);
    }
    // Do something else here with the result...
  } catch (error) {
    console.error('Error while checking the email:', error);
  }
}

checkEmailAndDoSomething('user@example.com'); // Email user@example.com is a disposable email.


// Example using .then() and .catch()
import { isDisposableEmail } from 'check-disposable-email';

function checkEmailAndDoSomething(email: string): void {
  isDisposableEmail(email)
    .then((isDisposable) => {
      if (isDisposable) {
        console.log(`Email '${email}' is a disposable email.`);
      } else {
        console.log(`Email '${email}' is not a disposable email.`);
      }
      // Do something else here with the result...
    })
    .catch((error) => {
      console.error('Error while checking the email:', error);
    });
}

checkEmailAndDoSomething('user@gmail.com'); // Email user@example.com is not a disposable email.
```

## How It Works
The package fetches a list of known disposable email domains from a public GitHub repository during initialization. When you call the isDisposableEmail() function, it checks whether the email address's domain is in the list of disposable domains.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

With the check-disposable-email package, you can enhance your email validation logic by detecting disposable email addresses and avoid unnecessary or spammy registrations on your platform. Enjoy the convenience of a fast and reliable solution for email validation in your projects!