---
title: 'Cách mình setup git cho công việc'
date: '09/09/2022'
updatedDate: '09/09/2022'
summary: 'Cách mình setup git trên một môi trường mới để thuận tiện cho các thao tác cơ bản như push, pull, fetch,...'
---

#### Username và email

```
git config --global user.name "<name>" && git config --global user.email "<email>"
```

#### Push only the branch you are now working on

```
git config --global push.default simple
```

#### Đặt `--rebase` mặc định cho git pull

```
git config --global pull.rebase true
```

- Đặt rebase là mặc định giúp cho việc pull code không tạo thêm một commit thừa, ví dụ: merge origin/master into master.

#### Đặt `--prune` cho git fetch

```
git config --global fetch.prune true
```
- Điều này giúp xóa các branch ở local khi các branch ở remote đã được xóa khi thực hiện `git fetch` hoặc `git pull`.

#### Không fast-forward trong lúc merge

```
git config --global --add merge.ff false && git config --global --add pull.ff only
```