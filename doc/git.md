# GIT | GITHUB WORKFLOW

## Table of Contents

- [Set-up](#set-up)
- [Workflow](#workflow)
- [Commands](#commands)
- [Bibliography](#bibliography)

## Set-up

### Admin

Follow these steps in order to set-up a repository:

1. Create a repository on [Github](https://github.com/)
2. Clone repository to your local machine:

```
$ git clone [url provided on Github]
```

3. Create a development branch locally:

```
$ git checkout -b dev
```

4. Create the initial folder structure and files (files and folders provided here are only an example):

```
$ touch index.html
$ touch style.css
$ git add .
$ git commit -m "Initial commit"
```

5. Push changes to remote dev branch:

```
$ git push origin dev
```

6. Add team members as contributors on Github:
   ![](./img/github_collaborators.png)

7. Change default branch to dev

### Contributors

If you are a project contributor, follow these steps for setting up your local git repository:

1. Copy repository URL on Github:

   ![](./img/github_link.png)

2. Clone repository to your local machine:

```
$ git clone [url provided on Github]
```

3. Make sure to be in the main/master branch

Either your git bash shows the branch you are working with or you can call

```
$ git branch
```

and look for the branch with the star (\*):

## Workflow

Follow these steps if you new to create a new feature, make some changes or fix a bug.

1. Update your local development branch:

```
$ git checkout dev
$ git pull origin dev
```

2. Creating a working branch locally:

```
$ git checkout -b [working_branch_name]
```

3. Make sure you are working on your working branch:

```
$ git branch
```

You should see all existing branches and your working branch with a star \*

4. Make the changes needed
5. Once you are done, add your changes to the stagins area:

```
$ git add.
```

5. Check that everything is OK:

```
$ git status
```

5. Commit your changes:

```
$ git commit -m "a good commit meassage"
```

6. Create as many commits as needed until you have solved the initial issue that motivated the creation of the working branch.

7. Once you are done, push your commits to Github:

```
$ git push origin [work_branch_name]
```

6. On Github, create a pull request (base: dev, compare: [work_branch_name])

7. Resolve possible merge conflicts:

8. Give a meaningful title and description and avoid including redundant information. Add pictures if needed.

9. Add reviewers to your PR.
   ![](./img/compare_and_pullRequest.png)
   ![](./img/open_PR.png)

### Handling pull requests

Merging should be a team approach.

1. Review

The assigned Reviewers do their review comments and approve or request changes on the PR.

![](./img/review_PR.png)

2. Implement the required changes

Follow the [daily workflow steps](#daily_workflow).

3. Merge the Pull Request:
   ![](./img/merge_PR.png)

4. Delete your remote working branch
   ![](./img/delete_remote_working_branch.png)

5. Delete your local working branch:

```
$ git checkout [development_branch_name]
$ git branch -d [working_branch_name]
```

6. Update the state of your local repo:

```
$ git fetch -p
```

### Merging dev branch with main/master branch

1. Create a pull request from the dev branch to the main/master branch on github
2. Add Reviewers
3. Reviewing Process
4. Merge PR

**Do not delete the development branch!**

## Commands

- Check existing remote branches:

```
$ git branch -r
```

- Check existing local and remote branches:

```
$ git branch -a
```

## Bibliography

- [Create a new branch with git and manage branches](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)
