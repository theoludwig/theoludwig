# 💡 Contributing

Thanks a lot for your interest in contributing to **theoludwig.fr**! 🎉

## Code of Conduct

**theoludwig.fr** adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it. Please read [the full text](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Types of contributions

- Reporting a bug.
- Suggest a new feature idea.
- Correct spelling errors, improvements or additions to documentation files (README, CONTRIBUTING...).
- Improve structure/format/performance/refactor/tests of the code.

## Pull Requests

- **Please first discuss** the change you wish to make via [issue](https://github.com/Divlo/Divlo/issues) before making a change. It might avoid a waste of your time.

- Ensure your code respect linting.

- Make sure your **code passes the tests**.

If you're adding new features to **theoludwig.fr**, please include tests.

## Commits

The commit message guidelines adheres to [Conventional Commits](https://www.conventionalcommits.org/) and [Semantic Versioning](https://semver.org/) for releases.

## Getting Started

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Divlo/Divlo)

### Prerequisites

- [Node.js](https://nodejs.org/) >= 16.0.0
- [npm](https://www.npmjs.com/) >= 8.0.0

### Installation

```sh
# Clone the repository
git clone https://github.com/Divlo/Divlo.git

# Go to the project root
cd Divlo

# Configure environment variables
cp .env.example .env

# Install
npm install
```

### Local Development environment

```sh
# Run website
npm run dev
```

### Production environment with [Docker](https://www.docker.com/)

```sh
# Setup and run all the services for you
docker compose up --build
```

### Services started

- `website`: <http://127.0.0.1:3000>
