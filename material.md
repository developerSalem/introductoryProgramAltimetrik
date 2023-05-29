<!-- BECOME A FRONT END DEVELOPER  -->

<!-- GIT -->

1.What is version control?

Version control is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time.

2.Benefits of version control systems?

Using version control software is a best practice for high performing software and DevOps teams. Version control also helps developers move faster and allows software teams to preserve efficiency and agility as the team scales to include more developers.

3.What is Git?

By far, the most widely used modern version control system in the world today is Git. Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel.

4.What is a Git repository?

A Git repository is a virtual storage of your project. It allows you to save versions of your code, which you can access when needed. 

5. Commands to:
    
    a. Initializing a new repository: git init
    b. Cloning an existing repository: git clone
    c. Saving changes to the repository: git add . 
                                         git commit -m "commit message"
    d. Repo-to-repo collaboration: git push
    e. Configuration & set up: git config --global user.name <name>
                               git config --local user.email <email>
    f. Stashing your work: git stash
    g. Re-applying your stashed changes: git stash pop
    h. Stashing untracked or ignored files: git stash -u
    i. Managing multiple stashes: git stash list
                                  git stash save "message"
                                  git stash pop stash@{0}
    j. Creating a branch from your stash: git stash branch
    k. Cleaning up your stash: git stash drop
    l. Inspecting a repository: git status
                                git tag  
                                git blame
                                git log
    m. Create, view and visit other branches: git branch
                                              git branch -a
                                              git checkout
    n. Changing the Last Commit: git commit --amend -m "commit message"
    o. Changing older or multiple commits: git rebase
    p. Create, view, and delete connections to other repositories: git remote
                                                                   git remote add <name> <url>     
    q. downloads commits, files, and refs from a remote repository into your local repo: git fetch
          git fetch <remote>
          git fetch <remote> <branch>
    r. upload local repository content to a remote repository: git push
    s. download content from a remote repository and immediately update the local repository to match that content: git pull
    t. Combine multiple sequences of commits into one unified history: Git merge

6. Git Hooks:

Like many other Version Control Systems, Git has a way to fire off custom scripts when certain important actions occur. There are two groups of these hooks: client-side and server-side. Client-side hooks are triggered by operations such as committing and merging, while server-side hooks run on network operations such as receiving pushed commits. You can use these hooks for all sorts of reasons.

client-side:

    a. pre-commit
    b. prepare-commit-msg
    c. commit-msg
    d. pre-rebase
    e. post-rewrite
    f. post-merge
    g. pre-push

server-side
    
    a. pre-receive
    b. update
    c. post-receive


8. What is a branching strategy?

A branching strategy, therefore, is the strategy that software development teams adopt when writing, merging and deploying code when using a version control system.

9. What are some common Git branching strategies? 

    a. GitFlow:

        Considered to be a bit complicated and advanced for many of today’s projects, GitFlow enables parallel development where developers can work separately from the master branch on features where a feature branch is created from the master branch.

        This branching strategy consists of the following branches:
            -Master 
            -Develop
            -Feature- to develop new features that branches off the develop branch  -Release- help prepare a new production release; usually branched from the develop branch and must be merged back to both develop and master 
            -Hotfix- also helps prepare for a release but unlike release branches, hotfix branches arise from a bug that has been discovered and must be resolved; it enables developers to keep working on their own changes on the develop branch while the bug is being fixed.

    b. GitHub Flow:
        
        GitHub Flow is a simpler alternative to GitFlow ideal for smaller teams as they don’t need to manage multiple versions.

        Unlike GitFlow, this model doesn’t have release branches. You start off with the main branch then developers create branches, feature branches that stem directly from the master, to isolate their work which are then merged back into main. The feature branch is then deleted.
    
    c. GitLab Flow:
        
        GitLab Flow is great when you want to maintain multiple environments and when you prefer to have a staging environment separate from the production environment. Then, whenever the main branch is ready to be deployed, you can merge back into the production branch and release it.

    d. Trunk-based development:

        Trunk-based development is a branching strategy that in fact requires no branches but instead, developers integrate their changes into a shared trunk at least once a day. This shared trunk should be ready for release anytime.
        
        The main idea behind this strategy is that developers make smaller changes more frequently and thus the goal is to limit long-lasting branches and avoid merge conflicts as all developers work on the same branch. In other words, developers commit directly into the trunk without the use of branches.  


<!-- SCRUM -->    

7. What is scrum?

Scrum is an agile project management framework that helps teams structure and manage their work through a set of values, principles, and practices.

https://drive.google.com/file/d/19pxoUGGJ8Z0VNZOnmlDJeDg_BmxAHs2D/view






