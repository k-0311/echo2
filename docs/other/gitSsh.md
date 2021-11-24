检查一下用户名和邮箱是否配置

```bash
git config --list
```

如未配置，则执行以下命令进行配置

```bash
git config --global user.name 'you name'
git config --global user.email 'you email'
```

然后执行以下命令生成秘钥

```bash
ssh-keygen -t rsa -C 'you email'
```

执行命令后需要进行3次或4次确认：

- 确认秘钥的保存路径（如果不需要改路径则直接回车）；
- 如果上一步置顶的保存路径下已经有秘钥文件，则需要确认是否覆盖（如果之前的秘钥不再需要则直接回车覆盖，如需要则手动拷贝到其他目录后再覆盖）；
- 创建密码（如果不需要密码则直接回车）；
- 确认密码；

在指定的保存路径下会生成2个名为`id_rsa`和`id_rsa.pub`的文件(一般在 C:\Users\xxxxxx\\.ssh文件夹中)

将`id_rsa.pub`的内容配置到`github`里的SSH keys中就完成了

