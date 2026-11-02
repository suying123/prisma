克隆拷贝项目安装依赖后

# 创建数据库迁移并执行

npx prisma migrate dev --name init   //创建sql数据库

生成
prisma\migrations/
  └─ 20261102044750_init/
    └─ migration.sql

# 生成Prisma Client代码

npx prisma generate     //生成generated目录

pnpm run personAdd 执行ts代码，写入数据到sql数据库中

| 命令 | 作用 |
| --- | --- |
| prisma migrate dev --name init | 开发环境创建并执行迁移 |
| prisma migrate deploy | 生产环境应用迁移 |
| prisma generate | 生成客户端代码 |
| prisma db push | 直接同步 schema 到数据库（不生成迁移文件） |
| prisma studio | 可视化数据管理界面 |

CRUD API 与 v6 保持一致，核心方法不变：‌‌
‌创建‌：prisma.user.create({ data: { name: '张三' } })
‌查询‌：findUnique（唯一字段查单条）、findFirst（任意条件查第一条）、findMany（列表，支持分页/排序/过滤）
‌更新‌：update（唯一字段定位）、updateMany（按条件批量更新）
‌删除‌：delete（唯一字段定位，找不到会抛异常）、deleteMany（按条件批量删除，找不到返回 count: 0）
