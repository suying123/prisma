// 连接PostgreSQL‌数据库   // "@prisma/adapter-pg": "^7.10.1",
// import { PrismaPg } from '@prisma/adapter-pg';
// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
import 'dotenv/config';
import { PrismaClient } from '../generated/client';  // 注意 import 路径指向 output 目录
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 5,
})
const prisma = new PrismaClient({ adapter })

async function personAdd() {
    await prisma.person.upsert({
        where: { username: 'admin' },
        update: {},
        create: {
            username: 'admin',
            password: "123456",
            nickname: '超级管理员'
        }
    });
    console.log('✅ 管理员账号创建完成：admin / 123456');
}

personAdd()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());