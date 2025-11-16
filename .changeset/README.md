# Changesets

This directory contains changesets for versioning and publishing packages.

## Creating a Changeset

To create a changeset for your changes, run:

```bash
bun run changeset
```

This will prompt you to:
1. Select which packages have changed
2. Choose the type of change (major, minor, or patch)
3. Write a summary of the changes

## Versioning

After creating changesets, you can version the packages:

```bash
bun run version
```

This will:
- Update package versions based on changesets
- Generate CHANGELOG.md files
- Remove consumed changesets

## Publishing

To publish packages to npm:

```bash
bun run release
```

This will:
- Build all packages
- Publish packages that have been versioned

## Workflow

1. Make your changes
2. Run `bun run changeset` to document the changes
3. Commit the changeset file
4. When ready to release, run `bun run version` to bump versions
5. Run `bun run release` to publish


