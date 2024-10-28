# Step-by-step list for a new feature

- `git pull`
  - First pull all changes of main to make sure that you're up-to-date

- `git checkout -b new-feature`
  - Creates and switches to the new branch "new-feature" at the same time

- Make changes related to the new feature

- `git status`
  - View all changed files before staging them

- `git add .`
  - Stage all changed files

- `git commit -m "Message"`
  - Commit the staged changes with a descriptive commit message

- `git checkout main`
  - Switch back to the main branch

- `git pull`
  - Pull again all changes of main that may have been made while you where working on another branch

- `git checkout new-feature`
  - Switch back to your feature branch.

- `git merge main`
  - Merge `main` into your feature branch to incorporate the latest changes.
  - Resolve any conflicts that may arise and commit them if necessary.

- `git push origin new-feature`
  - Push the updated feature branch to the remote repository.

- Open a Pull Request on GitHub and wait for the review
