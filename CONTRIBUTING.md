# 💡 Contributing

Thanks a lot for your interest in contributing to **divlo.fr**! 🎉

## Types of contributions

- Reporting a bug.
- Suggest a new feature idea.
- Correct spelling errors, improvements or additions to documentation files (README, CONTRIBUTING...).
- Improve structure/format/performance/refactor/tests of the code.

## Pull Requests

- **Please first discuss** the change you wish to make via [issue](https://github.com/Divlo/Divlo/issues) before making a change. It might avoid a waste of your time.

- Ensure your code respect [Typescript Standard Style](https://www.npmjs.com/package/ts-standard).

- Make sure your **code passes the tests**.

If you're adding new features to **divlo.fr**, please include tests.

## Commits

The commit message guidelines respect [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) and [Semantic Versioning](https://semver.org/) for releases.

### Types

Types define which kind of changes you made to the project.

| Types    | Description                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| feat     | A new feature.                                                                                               |
| fix      | A bug fix.                                                                                                   |
| docs     | Documentation only changes.                                                                                  |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).      |
| refactor | A code change that neither fixes a bug nor adds a feature.                                                   |
| perf     | A code change that improves performance.                                                                     |
| test     | Adding missing tests or correcting existing tests.                                                           |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).         |
| ci       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs). |
| chore    | Other changes that don't modify src or test files.                                                           |
| revert   | Reverts a previous commit.                                                                                   |

### Scopes

Scopes define what part of the code changed.

## Getting Started

### Installation

```sh
# Clone the repository
git clone https://github.com/Divlo/Divlo.git

# Go to the project root
cd Divlo

# Configure environment variables
cp .env.example .env
```

### Development environment with [Docker](https://www.docker.com/)

```sh
# Setup and run all the services for you
docker-compose up --build
```

### Services started

- website : `http://localhost:3000`
- [MailDev](https://maildev.github.io/maildev/) : `http://localhost:1080`
