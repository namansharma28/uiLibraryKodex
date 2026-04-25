# Contributing to UI Library Starter

First off, thank you for considering contributing to UI Library Starter! 🎉

This project is designed to be beginner-friendly and is a great place to make your first open-source contribution.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Guidelines](#coding-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project follows a Code of Conduct. By participating, you are expected to uphold this code:

- Be respectful and inclusive
- Be patient with beginners
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## 🤝 How Can I Contribute?

### Reporting Bugs

- Check if the bug has already been reported in [Issues](https://github.com/YOUR-USERNAME/ui-library-starter/issues)
- If not, create a new issue using the Bug Report template
- Provide as much detail as possible

### Suggesting Features

- Check if the feature has already been suggested
- Create a new issue using the Feature Request template
- Explain the use case and why it would be valuable

### Contributing Code

1. **Find an Issue**
   - Look for issues labeled `good-first-issue` or `help-wanted`
   - Comment on the issue to let others know you're working on it

2. **Fork & Clone**
   - Fork the repository
   - Clone your fork locally

3. **Create a Branch**
   - Create a new branch for your work
   - Use descriptive branch names

4. **Make Changes**
   - Follow the coding guidelines
   - Test your changes thoroughly

5. **Submit a Pull Request**
   - Push your changes to your fork
   - Create a pull request to the main repository

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git
- GitHub account

### Setup

```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR-USERNAME/ui-library-starter.git
cd ui-library-starter

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/ui-library-starter.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔄 Development Workflow

### 1. Sync Your Fork

```bash
git checkout main
git pull upstream main
git push origin main
```

### 2. Create a Branch

```bash
git checkout -b feature/component-name-#issue-number
```

**Branch Naming Convention:**
- `feature/component-name-#12` - New features
- `fix/bug-description-#12` - Bug fixes
- `docs/description-#12` - Documentation
- `refactor/description-#12` - Code refactoring

### 3. Make Your Changes

Follow the [Component Development Guide](./GETTING_STARTED.md#how-to-add-a-new-component-step-by-step)

### 4. Test Your Changes

```bash
# Run linting
npm run lint

# Format code
npm run format

# Test in browser
npm run dev
```

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add ComponentName component (#12)"
```

### 6. Push to Your Fork

```bash
git push origin feature/component-name-#12
```

### 7. Create a Pull Request

- Go to your fork on GitHub
- Click "Compare & pull request"
- Fill in the PR template
- Submit the PR

## 📝 Coding Guidelines

### Component Structure

```jsx
import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

/**
 * ComponentName - Brief description
 * 
 * @example
 * <ComponentName variant="primary">Content</ComponentName>
 */
export const ComponentName = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <div className={cn('base-classes', className)} {...props}>
      {children}
    </div>
  );
};

ComponentName.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'primary']),
  className: PropTypes.string,
};
```

### Styling Guidelines

- Use Tailwind utility classes only
- No custom CSS files
- Use `cn()` utility for className merging
- Follow mobile-first responsive design
- Include hover, focus, and disabled states

### Accessibility Guidelines

- Use semantic HTML
- Include ARIA attributes when needed
- Ensure keyboard navigation works
- Provide visible focus indicators
- Test with keyboard only

### Code Style

- Use ESLint and Prettier (configured)
- Use PascalCase for components
- Use camelCase for functions and variables
- Use descriptive variable names
- Add comments for complex logic

## 💬 Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type: brief description (#issue-number)

Detailed description of changes
- Change 1
- Change 2

Closes #issue-number
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```bash
feat: add Input component (#12)

- Add Input component with variants
- Add size options (sm, md, lg)
- Add error state
- Add PropTypes validation
- Add demo examples

Closes #12
```

```bash
fix: correct Button focus ring color (#15)

- Change focus ring from blue to primary color
- Improve focus visibility

Closes #15
```

## 🔍 Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] All tests pass (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] Component is added to demo
- [ ] PropTypes are defined
- [ ] Accessibility is considered
- [ ] No console errors or warnings

### PR Template

Fill out the PR template completely:
- Description of changes
- Type of change
- Component details (if applicable)
- Screenshots
- Checklist items

### Review Process

1. **Automated Checks**
   - Linting must pass
   - Build must succeed

2. **Code Review**
   - Maintainers will review your code
   - They may request changes
   - Be responsive to feedback

3. **Approval & Merge**
   - Once approved, maintainers will merge
   - Your contribution is now part of the project!

### After Merge

```bash
# Sync your fork
git checkout main
git pull upstream main
git push origin main

# Delete your feature branch
git branch -d feature/component-name-#12
git push origin --delete feature/component-name-#12
```

## 🎯 Component Checklist

Use this checklist when adding a new component:

### Planning
- [ ] Issue created and assigned
- [ ] Component API designed (props, variants)
- [ ] Similar components researched

### Development
- [ ] Component folder created
- [ ] Component file created
- [ ] Export file created
- [ ] Added to main index
- [ ] Added to demo

### Code Quality
- [ ] Uses `cn()` utility
- [ ] PropTypes defined
- [ ] Default props set
- [ ] Accepts className
- [ ] Spreads ...props

### Styling
- [ ] Tailwind classes only
- [ ] Responsive design
- [ ] Hover states
- [ ] Focus states
- [ ] Disabled states

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA attributes
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Screen reader tested

### Testing
- [ ] All variants tested
- [ ] All sizes tested
- [ ] Responsive tested
- [ ] Keyboard tested
- [ ] No console errors

### Documentation
- [ ] JSDoc comment
- [ ] Demo examples
- [ ] Props documented
- [ ] Usage examples

## 🆘 Getting Help

- **Questions?** Open a [Discussion](https://github.com/YOUR-USERNAME/ui-library-starter/discussions)
- **Stuck?** Comment on your issue or PR
- **Bug?** Create a [Bug Report](https://github.com/YOUR-USERNAME/ui-library-starter/issues/new?template=bug_report.md)

## 🌟 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Part of the project's history

Thank you for contributing! 🎉

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Timers Only](https://www.firsttimersonly.com/)
