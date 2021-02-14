# <a name="commit"></a> Commit Message Guidelines

I make use of precise rules over how to format my commit messages.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

## Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.
### Header
The header has a special format that includes a **type**, a **scope** and a **subject**.

The **type** categorizes the change into the following topics:
* 📖  content: Updates to the content of the website were made.
* 🎸  feat: The change contains a new feature added to the site.
* 🧪  test: The change contains tests like unit, e2e, ... .
* 🐛  bug: The change fixes a bug on the website.

The **scope** mentions a particular issue. It's used to group changes together that belong to the same issue. Try to keep this information as small and simple as possible.

The **subject** describes the change inside this commit. Try to describe the change from a users point of view, rather than repeating each line of changed code.

### Body
The body is optional and should contian additional information that might be useful to understand the change.

### Footer
The foot should contain references to github issues. Reference types are:
* closing: used once a issue was closed with the commit.
* fixing: used to fix a bug.
* referencing: in case none of the above fits.