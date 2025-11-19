Steps to push this local project to https://github.com/Sunil734-cyber/Atom.git

1) Install Git for Windows
   - Download and install from: https://git-scm.com/download/win
   - During install, enable "Git Credential Manager" (recommended) so HTTPS pushes prompt once for credentials.

Optional: Install GitHub CLI (recommended) to authenticate easily:
   - https://cli.github.com/

2) Open PowerShell and run the following commands (replace the path if different):

```powershell
cd "C:\Users\sanjay i\Videos\XenderDownload\phone\video\sunil-main\sunil-main"
# initialize and commit
git init
git add .
git commit -m "Initial import: move project to Sunil734-cyber/Atom"
# set branch to main
git branch -M main
# add the remote
git remote add origin https://github.com/Sunil734-cyber/Atom.git
# push to GitHub (will prompt for credentials / use credential manager)
git push -u origin main
```

3) If you prefer to authenticate with GitHub CLI instead of typing credentials:

```powershell
# login using web-based auth
gh auth login
# verify
gh auth status
# then push (after the earlier git remote add)
git push -u origin main
```

4) Troubleshooting
   - "git' is not recognized": install Git for Windows and reopen PowerShell.
   - 403 / authentication errors: create a Personal Access Token (PAT) on GitHub with `repo` scope and either use the Git Credential Manager or set the remote temporarily with the PAT (not recommended to store PAT in plain text):
     - git remote set-url origin https://<USERNAME>:<PAT>@github.com/Sunil734-cyber/Atom.git
   - If the repository already exists and you get a non-fast-forward error, fetch and merge or force push only if you understand the implications.

If you want, I can retry the `git` commands here after you install Git (or grant remote access). Let me know when Git is available and I'll push for you and confirm the remote history.
