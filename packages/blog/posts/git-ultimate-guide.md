---
title: "🗓️ Git version control: Ultimate Guide"
description: "What is `git`, what are the most used commands, best practices, and tips and tricks. The Ultimate guide to master `git` in your daily workflow."
isPublished: true
publishedOn: "2022-10-27T14:33:07.465Z"
---

Hello! 👋

Welcome to the Ultimate Guide to master `git` in your daily workflow, we will see what are the most used commands, what are the best practices, and tips and tricks.

This guide is a summary of the most important things to know when working with `git`, and in general, will link to the official documentation of `git` or other resources for more details, it is on purpose to not go in depth in each topic, it allows to summarize `git` and vocabulary about it (you can use it as a `git` cheatsheet).

**Note:** Sources used to write this blog post are available at the [end of this post](#sources).

## Introduction

**Git** is a free and open-source distributed **version control system** for keeping track of changes across a set of files.

Git was originally authored by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) in 2005 for the development of the [Linux kernel](https://kernel.org/).

Git allows:

- to work with several people on the same codebase.
- track changes to know who did what and when.
- revert changes.

Git is **decentralized**, which means that every developer has a full copy of the repository and the complete history of the project.

## Get started with `git` and `.gitconfig` config file

The first thing you should do when you install Git is to set your user name and email address.

```sh
git config --global user.name "Username"
git config --global user.email "email@example.com"
```

These configurations are stored in the `.gitconfig` file in your home directory (e.g: `~/.gitconfig`) with this format:

```sh
[user]
    name = Username
    email = email@example.com
```

You can find more information and useful `git` configurations in the [official documentation](https://git-scm.com/docs/git-config).

## How `git` works?

Each `git` project is called a **repository** (or **repo** for short) and it contains all the files and folders for a project, as well as each file's revision history (**commits**) stored in the `.git` folder.

The history of a repository is represented by a graph.

Each node is called commit and contains:

- an instantaneous view (snapshot) of the state of the repository at a specific moment
- metadata: message, author, creation date, etc.

Commits are **snapshots** (not diffs on each file) of the project at specific moments in time.

There are several areas where the files in your project will live in Git:

- **Working directory**: the files that you see in your computer's file system.
- **Staging area**: the files that will go into your next commit (files added with `git add <filename>` command).
- **Local repository**: the `.git` directory, which contains all of your project's commits, branches, etc. (files added with `git commit -m "message"` command).
- **Remote repository**: the `.git` directory in a remote server (files added with `git push` command).

## Commands cheatsheet

You can find the official documentation of `git` commands at [git-scm.com/docs](https://git-scm.com/docs).

```sh
# Initialize a new git repository
git init

# Clone a repository
git clone <url>

# Add all the files to staging area
git add .

# Add specific file to staging area
git add <file>

# Commit changes
git commit -m "Commit message"

# Commit changes in the past
git commit --date "10 day ago" -m "Commit message"
# Also update the committer date for the last commit
git filter-branch --env-filter 'export GIT_COMMITTER_DATE="$GIT_AUTHOR_DATE"' HEAD^..HEAD

# Add remote repository
git remote add <remote> <url>
# The main <remote> is often called `origin`

# Add forked repository
git remote add <remote> <url>
# The forked <remote> is often called `upstream`

# List all the remotes
git remote

# Sync forked repository
git fetch <remote>
git merge <remote>/<branch>

# Push changes to remote repository
git push <remote>

# Pull changes from remote repository
git pull <remote>

# Show the status of the working tree
git status

# Show the commit history
git log

# Create a new branch
git checkout -b <branch>

# Switch to a branch (or tag or commit)
git checkout <branch>

# Merge a branch into the current branch
git merge <branch>

# Note: Merge creates a "Merge commit" when the base branch and the branch to merge have diverged (they have different commits).

# To avoid creating a "Merge commit", we can use rebase instead of merge.
git rebase --interactive <branch-to-rebase-on>

# Combine multiple commits of a branch into one for a merge
git merge --squash <branch>

# Change several past commits (interactive rebase)
# HEAD points to the current consulted commit.
git rebase --interactive HEAD~<number-of-commits>

# Delete a branch
git branch --delete <branch>
git push <remote> --delete <branch>

# Fetch branches from remote repository and prune
git fetch --prune

# Revert a commit
git revert <commit>

# Reset the current branch, delete all commits since <branch> (without removing the changes)
git reset --soft <branch>

# Apply the changes introduced by some existing commits
# (by first being on the branch where you want to apply the commit)
git cherry-pick <commit>

# To avoid creating duplicated commits with cherry-pick, we can use rebase after cherry-pick.
# <target-branch> being the commit where you want to apply the commit to cherry-pick.
# <from-branch> being the branch where the commit to cherry-pick is.
git rebase <target-branch> <from-branch>

# If, by mistake, you have started a branch from the wrong base branch, you can rebase the branch on the correct base branch.
# For example, if you have started a branch `feature-2` from `feature` instead of `develop`, you can rebase the branch on `develop`.
git rebase --onto <new-base-branch> <old-base-branch> <branch>
# For example:
git rebase --onto develop feature feature-2

# To list all commits that differ between two branches
git log <branch1>..<branch2> # commits in branch2 that are not in branch1 (branch2 ahead of branch1, branch2 behind branch1)
git log <branch2>..<branch1> # commits in branch1 that are not in branch2 (branch1 ahead of branch2, branch1 behind branch2)

# Summary of commit authors across all branches, excluding merge commits.
git shortlog --summary --numbered --all --no-merges
```

## `.gitignore` file

The `.gitignore` file is a text file that tells `git` which files (or patterns) it should ignore.

The `.gitignore` file is usually placed in the root directory of the repository.

We usually ignore files that are generated by the build process or files that contain sensitive information.

Example of `.gitignore` file:

```sh
.env
build
*.exe
```

## `.gitkeep` file

The `.gitkeep` file is a file that is used to keep an empty directory in a Git repository.

This is useful when you want to keep an empty directory in your repository but you don't want to commit any file inside it.

## Git remote repositories (GitHub/GitLab)

Once you are ready to share your code over the internet, you will need to create a remote repository on a service like [GitHub](https://github.com) or [GitLab](https://gitlab.com).

There are many other services, you can also self-host your own Git server.

### SSH vs HTTPS authentication

Once you have created a remote repository, you will need to authenticate to push and pull changes.

There are two main ways to authenticate:

- **SSH**: you will need to generate an SSH key pair and add the public key to your remote repository.
- **HTTPS**: you will need to provide your username and password each time you push or pull changes.

SSH authentication is the recommended way to authenticate to a remote repository.

You can find more information about SSH authentication in the [official documentation](https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key).

### Sign `git` commits with `gpg`

As we have seen in the [Get started with `git` and `.gitconfig` config file](#get-started-with-git-and-gitconfig-config-file) section, we can configure `git` with a name and email address with a value of our choice.

That means that **anyone can create a commit with any name and email address and claim to be whoever they want** when they create a commit.

To avoid this, you can sign your commits with a [GNU Privacy Guard](https://gnupg.org/) (<abbr>gpg</abbr>) key.

You can find more information about signing commits in the [official documentation](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work).

### Continous Integration/Continuous Delivery (CI/CD)

Once you have your code in a remote repository, everyone (with access) can potentially start contributing to the project. This is great, but it also means that you need to have a way to ensure that your code is working as expected for each change in the project.

You could do it manually, depending on the size and the complexity of the project, but it could be a tedious task.

Instead, you can use a **Continuous Integration** (CI) service to automate the process of testing your code, running linting, unit tests, e2e tests, etc.

There are many CI services, but the most popular ones are [GitHub Actions](https://github.com/features/actions), [GitLab CI](https://docs.gitlab.com/ee/ci/), [CircleCI](https://circleci.com/), [Travis CI](https://travis-ci.org/), and many others...

Then, once your code is ready, tested and working as expected, you can use a **Continuous Delivery** (CD) service to automate the process of **deploying your code**.

CI/CD services are usually integrated with remote repositories, so you can configure them to run automatically when you push changes to the remote repository.

## Best practices and `git` workflows

Commit messages are very important, they are a way to easily know what has changed in the project.

There are many conventions for commit messages, but the most popular one is the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

Then, we can use the commit messages to automatically determine a [semantic version](https://semver.org/) for the next release of the project.

When multiple developers are working on the same project, it is important to organize the work in a way that everyone can work on different features without conflicts (changes in the same files).

There are many ways to organize the work, but the most popular ones are:

- [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Trunk-based development](https://trunkbaseddevelopment.com/)

They are called **Git workflows**, or **Git branching strategies**.

## Tips and tricks

### `diff-commits` alias

The `git diff` command allows you to compare the changes between two commits, branches, etc.

Sometimes, you want to compare what commits have been made between two branches, without looking at the changes in the files, to do so, we can create an `alias` in `.gitconfig`:

```sh
[alias]
    diff-commits = !sh -c 'echo -n "Commits in $2 not in $1 \\(" && printf "%d" $(git cherry -v $1 $2 | wc -l) && echo "\\)" && git cherry -v $1 $2 && echo "" && echo -n "Commits in $1 not in $2 \\(" && printf "%d" $(git cherry -v $2 $1 | wc -l) && echo "\\)" && git cherry -v $2 $1' -
```

With this alias, we can compare the commits between `main` and `develop` branches for example:

```sh
$ git diff-commits main develop

Commits in develop not in main (2)
+ 9b80e0724df8454b43bc3935a1bffb67615572d7 feat: new feature
+ 50721f8ecb60ff023bdccc1873ec1e20ee0b21a0 feat: new feature 2

Commits in main not in develop (1)
- f7bb9d2af7763e0a311099e880e8bf7d6b51bf4d fix: urgent hotfix
```

## Conclusion

`git` is the tool that every programmer should know to do collaborative work (not only, `git` is also very powerful even when working alone) and keep track of changes across a set of files.

## Sources

- [Git official website and documentation](https://git-scm.com/)
- [Git Explained in 100 Seconds](https://www.youtube.com/watch?v=hwP7WQkmECE)
- [Understand Git in 7 minutes](https://www.jesuisundev.com/en/understand-git-in-7-minutes/)
- [How (and why) to sign Git commits | With Blue Ink](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html?utm_source=tiktok&utm_campaign=codetok-sign)
- [What Are the Best Git Branching Strategies](https://www.flagship.io/git-branching-strategies/)
