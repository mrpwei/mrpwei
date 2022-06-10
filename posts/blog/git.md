---
title: "Git"
date: "2022-06-09"
---

## 基本操作

### 查看分支

```bash
git branch -a
```

### 创建并切换到新分支

```bash
git checkout -b newBranch
```

### 删除本地分支

```bash
git branch -d <BranchName>
```

## git 修改 commit

把上一次的 commit 记录去除，修改 commit 信息。

```bash
git commit --amend
```

## git 回滚代码到某个 commit

- git reset --soft commit_hash // 回退到指定 commit，该 commit 之后的提交内容，保留工作目录，并把重置 HEAD 所带来的新的差异放进暂存区
- git reset --hard commit_hash // 回退到指定 commit，该 commit 之后的提交内容，工作区和暂存区的内容都被抹掉
- git reset 或 git reset --mixed commit_hash // 不带参数,或带参数–mixed(默认参数)，与 git reset --soft 不同，它将会把差异放到工作区

```bash
$ git reset --hard/soft HEAD^         回退到上个版本
$ git reset --hard/soft HEAD~3        回退到前3次提交之前，以此类推，回退到n次提交之前
```

回退后强推到远程

```bash
git push origin HEAD --force
```

原文链接：https://blog.csdn.net/qq_41261490/article/details/108119801
