# 🚀 Getting Started - Your First Steps!

> **Welcome!** This guide will take you from "I just found this project" to "I just made my first contribution!" 🎉

**Time needed:** About 1-2 hours for your first time (gets faster after that!)

**What you'll learn:**
- How to set up the project on your computer
- How to build your first component
- How to contribute using Git and GitHub
- How to work like a real developer!

**Don't worry if you:**
- Haven't used Git before
- Haven't contributed to open source before
- Feel nervous or confused
- Make mistakes (we all do!)

We're here to help you every step of the way! 💪

## 📚 Table of Contents (Your Roadmap)

**First Time Here? Start with Section 1-3!**

1. [Prerequisites](#prerequisites) - What you need installed
2. [Installation](#installation-steps) - Get the project on your computer
3. [Project Tour](#project-tour) - Understand what you're looking at
4. [Your First Task](#your-first-task-explore-the-button-component) - Get your hands dirty!
5. [How to Add a Component](#how-to-add-a-new-component-step-by-step) - The main event!
6. [Git & GitHub Workflow](#git-workflow-summary) - How to contribute
7. [Troubleshooting](#troubleshooting) - When things go wrong
8. [FAQ](#faq) - Common questions answered

---

## 🔧 Installation Steps

### 1. Fork the Repository

1. Go to the project's GitHub repository
2. Click the **"Fork"** button in the top-right corner
3. This creates your own copy of the project

### 2. Clone Your Fork

Open your terminal and run:

```bash
# Replace YOUR-USERNAME with your GitHub username
git clone https://github.com/YOUR-USERNAME/ui-library-starter.git

# Navigate into the project
cd ui-library-starter
```

### 3. Add Upstream Remote

This lets you sync with the main project:

```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/ui-library-starter.git
```

### 4. Install Dependencies

```bash
npm install
```

This will install all the packages needed for the project. It might take a few minutes.

### 5. Start the Development Server

```bash
npm run dev
```

You should see output like:
```
VITE v5.0.12  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 6. Open in Browser

Open your browser and go to: **http://localhost:5173**

You should see the demo page with buttons and cards!

## Project Tour

### Important Files to Know:

1. **src/components/** - Where all components live
   - Each component has its own folder
   - Example: `Button/Button.jsx`, `Button/Button.css`

2. **demo/App.jsx** - Demo application
   - Test your components here
   - See examples of how to use components

3. **package.json** - Project configuration
   - Lists all dependencies
   - Defines npm scripts

### Available Commands:

```bash
# Start development server
npm run dev

# Build the library for distribution
npm run build:lib

# Check code for errors
npm run lint

# Format code automatically
npm run format
```

## Your First Task: Explore the Button Component

### Step 1: Open the Button Component

Navigate to: `src/components/Button/Button.jsx`

### Step 2: Understand the Code

```jsx
export const Button = ({
  children,      // Text inside the button
  variant,       // Style variant (primary, secondary, etc.)
  size,          // Size (sm, md, lg)
  disabled,      // Is button disabled?
  onClick,       // Function to call when clicked
  className,     // Additional Tailwind classes
  ...props       // Any other props
}) => {
  // Uses Tailwind CSS classes for styling
  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </button>
  );
};
```

### Step 3: Try Changing Something

1. Open `demo/App.jsx`
2. Find the Button section
3. Try changing the button text:
   ```jsx
   <Button variant="primary">Click Me!</Button>
   ```
4. Save the file
5. See the change in your browser (it updates automatically!)

### Step 4: Experiment with Props

Try different combinations:

```jsx
<Button variant="primary" size="lg">Large Primary</Button>
<Button variant="secondary" size="sm">Small Secondary</Button>
<Button variant="outline" disabled>Disabled Outline</Button>
```

## Understanding Tailwind CSS

This project uses Tailwind CSS for styling - no separate CSS files needed!

### How to Use Tailwind:

Use utility classes directly in your JSX:

```jsx
<div className="bg-primary-600 text-white p-4 rounded-lg">
  Styled with Tailwind!
</div>
```

### Common Tailwind Classes:

- **Colors**: `bg-primary-600`, `text-white`, `border-gray-300`
- **Spacing**: `p-4` (padding), `m-2` (margin), `gap-4` (gap)
- **Layout**: `flex`, `grid`, `items-center`, `justify-between`
- **Sizing**: `w-full`, `h-10`, `max-w-lg`
- **Typography**: `text-lg`, `font-bold`, `text-center`

### Try This:

1. Open `demo/App.jsx`
2. Change a button's color:
   ```jsx
   <Button className="bg-green-600 hover:bg-green-700">
     Green Button
   </Button>
   ```
3. Save and see the custom green button!

## Common Patterns You'll Use

### 1. Creating a Component with Tailwind

```jsx
import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

export const MyComponent = ({ children, className, ...props }) => {
  return (
    <div className={cn('p-4 bg-white rounded-lg border border-gray-200', className)} {...props}>
      {children}
    </div>
  );
};

MyComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
```

### 2. Using the cn() Utility

The `cn()` function merges Tailwind classes properly (handles conflicts):

```jsx
// Without cn():
className={`p-4 bg-white ${variant === 'primary' ? 'bg-primary-600' : ''}`}
// Problem: Both bg-white and bg-primary-600 might conflict!

// With cn():
className={cn('p-4 bg-white', variant === 'primary' && 'bg-primary-600')}
// cn() intelligently merges classes, keeping only bg-primary-600
```

### 3. PropTypes Validation

PropTypes help catch errors:

```jsx
MyComponent.propTypes = {
  // Required string
  title: PropTypes.string.isRequired,
  
  // Optional string
  description: PropTypes.string,
  
  // One of specific values
  variant: PropTypes.oneOf(['primary', 'secondary']),
  
  // Boolean
  disabled: PropTypes.bool,
  
  // Function
  onClick: PropTypes.func,
  
  // Any React node (text, elements, etc.)
  children: PropTypes.node,
};
```

## Troubleshooting

### Server won't start?

1. Make sure you ran `npm install`
2. Check if port 5173 is already in use
3. Try closing and reopening your terminal

### Changes not showing?

1. Make sure you saved the file
2. Check the terminal for errors
3. Try refreshing the browser

### Syntax errors?

Run the linter to find issues:
```bash
npm run lint
```

## Next Steps

1. ✅ Complete the "Explore Button" task above
2. 📖 Read the `PROCESS_FLOW.md` document
3. 🎨 Study the Card component
4. 🛠️ Try creating your first component (follow Phase 3 in PROCESS_FLOW.md)

## Need Help?

- Check the `PROCESS_FLOW.md` for detailed guides
- Look at existing components for examples
- Ask your mentor when stuck
- Search for errors in the browser console

## Learning Resources

### React Basics:
- [React Official Tutorial](https://react.dev/learn)
- [React Components](https://react.dev/learn/your-first-component)

### JavaScript:
- [JavaScript.info](https://javascript.info)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Tailwind CSS:
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

## Tips for Success

1. **Don't rush** - Take time to understand each concept
2. **Experiment** - Try changing things and see what happens
3. **Read code** - Study existing components carefully
4. **Ask questions** - No question is too small
5. **Practice daily** - Consistency is key
6. **Use the demo** - Test everything in the demo app

## Your Learning Path

### Week 1: Setup & Exploration
- ✅ Install and run the project
- ✅ Understand project structure
- ✅ Study Button and Card components
- ✅ Experiment with props and styles

### Week 2: Understanding Components
- Learn component patterns
- Understand PropTypes
- Study CSS variables
- Practice with the demo app

### Week 3: First Component
- Create a simple Input component
- Write CSS for the component
- Add PropTypes
- Test in demo

### Week 4+: Keep Building!
- Follow the PROCESS_FLOW.md guide
- Build more components
- Learn advanced patterns
- Have fun!

---

## 🔨 How to Add a New Component (Step-by-Step)

This is the complete process you'll follow every time you want to add a new component to the library.

### Step 1: Create a GitHub Issue

Before starting work, create an issue:

1. Go to the GitHub repository
2. Click **"Issues"** → **"New Issue"**
3. Title: "Add [ComponentName] component"
4. Description:
   ```markdown
   ## Component Description
   Brief description of what the component does
   
   ## Props
   - prop1: description
   - prop2: description
   
   ## Variants (if any)
   - variant1
   - variant2
   
   ## Example Usage
   ```jsx
   <ComponentName prop1="value" />
   ```
   ```
5. Click **"Submit new issue"**
6. Note the issue number (e.g., #12)

### Step 2: Create a New Branch

Always work on a separate branch:

```bash
# Make sure you're on main branch
git checkout main

# Pull latest changes
git pull upstream main

# Create a new branch (use the issue number)
git checkout -b feature/component-name-#12

# Example: git checkout -b feature/input-component-#12
```

**Branch Naming Convention:**
- Feature: `feature/component-name-#issue`
- Bug fix: `fix/bug-description-#issue`
- Documentation: `docs/description-#issue`

### Step 3: Create Component Folder Structure

```bash
# Create component folder
mkdir -p src/components/ComponentName

# Create files
touch src/components/ComponentName/ComponentName.jsx
touch src/components/ComponentName/index.js
```

### Step 4: Write the Component

**File: `src/components/ComponentName/ComponentName.jsx`**

```jsx
import { cn } from '@utils/cn';
import PropTypes from 'prop-types';

/**
 * ComponentName - Brief description
 * 
 * @example
 * <ComponentName variant="primary" size="md">
 *   Content
 * </ComponentName>
 */
export const ComponentName = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}) => {
  // Define base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all';
  
  // Define variants
  const variants = {
    default: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
  };
  
  // Define sizes
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  };

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// PropTypes validation
ComponentName.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};
```

**File: `src/components/ComponentName/index.js`**

```js
export { ComponentName } from './ComponentName';
```

### Step 5: Export from Main Index

Add your component to `src/index.js`:

```js
// Add this line
export { ComponentName } from './components/ComponentName';
```

### Step 6: Add to Demo

Update `demo/App.jsx` to showcase your component:

```jsx
import { ComponentName } from '../src';

// Inside the App component, add a new section:
<section className="mb-12">
  <h2 className="text-3xl font-semibold mb-4">ComponentName</h2>
  
  <h3 className="text-xl font-medium mb-3 text-gray-600">Variants</h3>
  <div className="flex gap-4 flex-wrap items-center mb-6">
    <ComponentName variant="default">Default</ComponentName>
    <ComponentName variant="primary">Primary</ComponentName>
    <ComponentName variant="secondary">Secondary</ComponentName>
  </div>
  
  <h3 className="text-xl font-medium mb-3 text-gray-600">Sizes</h3>
  <div className="flex gap-4 flex-wrap items-center">
    <ComponentName size="sm">Small</ComponentName>
    <ComponentName size="md">Medium</ComponentName>
    <ComponentName size="lg">Large</ComponentName>
  </div>
</section>
```

### Step 7: Test Your Component

1. **Visual Testing**
   - Check all variants work
   - Check all sizes work
   - Check responsive behavior
   - Check hover/focus states

2. **Accessibility Testing**
   - Can you navigate with Tab key?
   - Are focus states visible?
   - Does it work with keyboard only?

3. **Props Testing**
   - Test with different prop combinations
   - Test with className prop
   - Test edge cases

### Step 8: Run Linting and Formatting

```bash
# Check for code issues
npm run lint

# Auto-fix linting issues
npm run lint -- --fix

# Format code
npm run format
```

### Step 9: Commit Your Changes

```bash
# Check what files changed
git status

# Add your files
git add src/components/ComponentName/
git add src/index.js
git add demo/App.jsx

# Commit with a clear message
git commit -m "feat: add ComponentName component (#12)

- Add ComponentName with variants (default, primary, secondary)
- Add size options (sm, md, lg)
- Add PropTypes validation
- Add demo examples
- Closes #12"
```

**Commit Message Format:**
```
type: brief description (#issue-number)

- Detailed change 1
- Detailed change 2
- Closes #issue-number
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Step 10: Push to Your Fork

```bash
# Push your branch to your fork
git push origin feature/component-name-#12
```

### Step 11: Create a Pull Request

1. Go to your fork on GitHub
2. Click **"Compare & pull request"** button
3. Fill in the PR template:

```markdown
## Description
Brief description of what this PR does

Closes #12

## Type of Change
- [x] New component
- [ ] Bug fix
- [ ] Documentation update
- [ ] Code refactoring

## Component Details
**Component Name:** ComponentName
**Variants:** default, primary, secondary
**Sizes:** sm, md, lg

## Screenshots
[Add screenshots of your component in different states]

## Checklist
- [x] Component follows project structure
- [x] PropTypes are defined
- [x] Component is responsive
- [x] Accessibility considered (keyboard navigation, focus states)
- [x] Added to demo with examples
- [x] Code is linted and formatted
- [x] Tested all variants and sizes
- [x] No console errors or warnings
```

4. Click **"Create pull request"**

### Step 12: Code Review Process

1. **Wait for Review**
   - Maintainers will review your code
   - They may request changes
   - Be patient and responsive

2. **Address Feedback**
   ```bash
   # Make requested changes
   # Then commit and push
   git add .
   git commit -m "fix: address review feedback"
   git push origin feature/component-name-#12
   ```

3. **PR Gets Merged**
   - Once approved, maintainers will merge
   - Your component is now part of the library!
   - Celebrate! 🎉

### Step 13: Sync Your Fork

After your PR is merged:

```bash
# Switch to main branch
git checkout main

# Pull latest changes from upstream
git pull upstream main

# Push to your fork
git push origin main

# Delete your feature branch (optional)
git branch -d feature/component-name-#12
git push origin --delete feature/component-name-#12
```

---

## 📋 Component Checklist

Before submitting a PR, ensure:

### Code Quality
- [ ] Component follows naming conventions (PascalCase)
- [ ] Uses `cn()` utility for className merging
- [ ] PropTypes are defined for all props
- [ ] Default values set for optional props
- [ ] Accepts `className` prop for customization
- [ ] Spreads `...props` for additional HTML attributes

### Styling
- [ ] Uses Tailwind utility classes
- [ ] Responsive design (mobile-first)
- [ ] Consistent spacing with other components
- [ ] Hover states defined
- [ ] Focus states visible and accessible
- [ ] Disabled states (if applicable)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA attributes added (if needed)
- [ ] Semantic HTML used
- [ ] Color contrast meets WCAG standards

### Documentation
- [ ] JSDoc comment at top of component
- [ ] PropTypes documented
- [ ] Usage example in JSDoc
- [ ] Added to demo with all variants
- [ ] Clear section headings in demo

### Testing
- [ ] Tested all variants
- [ ] Tested all sizes
- [ ] Tested with different props
- [ ] Tested responsive behavior
- [ ] Tested keyboard navigation
- [ ] No console errors or warnings
- [ ] Runs `npm run lint` without errors

---

## 🐛 How to Report a Bug

Found a bug? Here's how to report it:

1. **Check Existing Issues**
   - Search to see if it's already reported
   - Add a comment if you have more info

2. **Create a New Issue**
   - Click **"New Issue"**
   - Choose **"Bug Report"** template
   - Fill in:
     ```markdown
     ## Bug Description
     Clear description of the bug
     
     ## Steps to Reproduce
     1. Go to '...'
     2. Click on '...'
     3. See error
     
     ## Expected Behavior
     What should happen
     
     ## Actual Behavior
     What actually happens
     
     ## Screenshots
     [Add screenshots if applicable]
     
     ## Environment
     - Browser: Chrome 120
     - OS: Windows 11
     - Node version: 18.0.0
     ```

3. **Wait for Response**
   - Maintainers will investigate
   - You may be asked for more info

---

## 💡 How to Suggest a Feature

Have an idea for a new component or feature?

1. **Create a Feature Request Issue**
   - Click **"New Issue"**
   - Choose **"Feature Request"** template
   - Fill in:
     ```markdown
     ## Feature Description
     What feature do you want to add?
     
     ## Use Case
     Why is this feature needed?
     
     ## Proposed Solution
     How should it work?
     
     ## Example Usage
     ```jsx
     <NewComponent prop="value" />
     ```
     
     ## Alternatives Considered
     Other ways to solve this problem
     ```

2. **Discuss**
   - Community will discuss the idea
   - Maintainers will approve or suggest changes

3. **Get Assigned**
   - Once approved, you can work on it
   - Follow the "Add a New Component" process above

---

## 🤝 Code Review Guidelines

When reviewing others' PRs:

### What to Look For
- **Correctness**: Does it work as intended?
- **Code Quality**: Is it readable and maintainable?
- **Consistency**: Follows project patterns?
- **Accessibility**: Keyboard nav, focus states?
- **Documentation**: Clear examples in demo?

### How to Give Feedback
- Be kind and constructive
- Explain why, not just what
- Suggest solutions
- Praise good work

### Example Comments
✅ Good:
> "Great work on the variants! Consider adding a focus ring for better accessibility. You can use `focus:ring-2 focus:ring-primary-500`"

❌ Bad:
> "This is wrong. Fix it."

---

## 🎯 Git Workflow Summary

```bash
# 1. Start new work
git checkout main
git pull upstream main
git checkout -b feature/my-component-#12

# 2. Make changes
# ... code your component ...

# 3. Commit
git add .
git commit -m "feat: add my component (#12)"

# 4. Push
git push origin feature/my-component-#12

# 5. Create PR on GitHub

# 6. After merge, sync
git checkout main
git pull upstream main
git push origin main
```

---

## 📚 Additional Resources

### Git & GitHub
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [How to Write Good Commit Messages](https://chris.beams.io/posts/git-commit/)

### Open Source
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Timers Only](https://www.firsttimersonly.com/)

### Component Development
- [React Component Patterns](https://www.patterns.dev/posts/react-component-patterns/)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)

---

## ❓ FAQ

**Q: Can I work on multiple components at once?**
A: It's better to focus on one component per PR. Smaller PRs are easier to review.

**Q: How long does code review take?**
A: Usually 1-3 days. Be patient!

**Q: What if my PR is rejected?**
A: Don't worry! Learn from feedback and try again. Everyone's first PR gets feedback.

**Q: Can I update someone else's PR?**
A: Yes! Collaborate in the comments first, then you can push to their branch if they allow it.

**Q: I made a mistake in my commit. What do I do?**
A: You can amend your last commit:
```bash
git add .
git commit --amend
git push origin your-branch --force
```

**Q: How do I resolve merge conflicts?**
A: 
```bash
git checkout main
git pull upstream main
git checkout your-branch
git merge main
# Fix conflicts in your editor
git add .
git commit -m "fix: resolve merge conflicts"
git push origin your-branch
```

---

## 🎉 Your First Contribution

Ready to make your first contribution? Here are some good first issues:

1. **Add a Badge Component** (Easy)
   - Small, simple component
   - Good for learning the workflow

2. **Add a Spinner Component** (Easy)
   - CSS animations practice
   - Simple props

3. **Improve Documentation** (Easy)
   - Fix typos
   - Add examples
   - Clarify instructions

4. **Add an Alert Component** (Medium)
   - Multiple variants
   - Icons (optional)
   - Dismissible functionality

Look for issues labeled `good-first-issue` or `help-wanted` on GitHub!

---

**Remember**: Every expert was once a beginner. Don't be afraid to ask questions, make mistakes, and learn. The community is here to help you grow! 🚀

Happy coding and welcome to open source! 🎉
