# Tools Tracker

## Development Setup

### Prerequisites

- [Bun](https://bun.sh/) for JavaScript/TypeScript runtime and package management
- [Python](https://www.python.org/) for pre-commit hooks
- [Git](https://git-scm.com/) for version control

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd tools-tracker
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   bun install
   ```

3. Install pre-commit hooks:
   ```bash
   pip install pre-commit
   pre-commit install
   ```

### Pre-commit Hooks

This project uses [pre-commit](https://pre-commit.com/) to run checks before each commit:

- Trailing whitespace trimming
- End of file fixing
- YAML and JSON validation
- Prettier for code formatting
- ESLint for linting
- TypeScript type checking

To run pre-commit checks manually:

```bash
pre-commit run --all-files
```

### Available Scripts

In the backend directory, you can run:

- `bun run dev` - Start the development server with hot reload
- `bun run start` - Start the production server
- `bun run test` - Run tests
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Run ESLint with auto-fix
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check code formatting
- `bun run typecheck` - Run TypeScript type checking
