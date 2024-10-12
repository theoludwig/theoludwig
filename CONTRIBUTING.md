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

- **Please first discuss** the change you wish to make via [issue](https://github.com/theoludwig/theoludwig/issues) before making a change. It might avoid a waste of your time.

- Ensure your code respect linting.

- Make sure your **code passes the tests**.

If you're adding new features to **theoludwig.fr**, please include tests.

## Commits

The commit message guidelines adheres to [Conventional Commits](https://www.conventionalcommits.org/) and [Semantic Versioning](https://semver.org/) for releases.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 22.0.0
- [pnpm](https://pnpm.io/) >= 9.12.1 [(`corepack enable`)](https://nodejs.org/docs/latest-v22.x/api/corepack.html)
- [Docker](https://www.docker.com/)

### Installation

```sh
# Clone the repository
git clone git@github.com:theoludwig/theoludwig.git

# Go to the project root
cd theoludwig

# Configure environment variables
cp .env.example .env
cp apps/website/.env.example apps/website/.env

# Install dependencies
pnpm install --frozen-lockfile

# Install Playwright browser binaries and their dependencies (tests)
pnpm exec playwright install --with-deps
```

### Development

```sh
# Start the development server
node --run dev

# Lint
node --run lint:editorconfig
node --run lint:markdown
node --run lint:typescript
node --run lint:eslint
node --run lint:prettier

# Tests
node --run test

# Build
node --run build

# To execute a command in a specific package (e.g: packages/utils)
cd packages/utils
node --run test
```

### Production environment with [Docker](https://www.docker.com/)

```sh
# Setup and run all the services for you
docker compose up --build
```

#### Services started

`theoludwig`: <http://127.0.0.1:3000>
