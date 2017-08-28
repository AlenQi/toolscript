# 获取‘当前分支’名
br=$(git branch | grep "*")
current_branch=${br/* /}
git add .
git commit -m "update files"
git push origin $current_branch
