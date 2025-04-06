---
description: "Prisma in 100 Seconds"
keywords:  [程序员, 英文晨读]
group:
  title: 紫升英文晨读
order: 8
toc: content
---

<center>
  <iframe width="600" height="355" src="https://www.youtube.com/embed/rLRIB6AF2Dg?si=NXmDfo5suaYDdBQj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

## Prisma in 100 Seconds

> 喜马拉雅：https://m.ximalaya.com/sound/830240967?from=pc

Prisma, an open source tool that makes it fun and safe to work with your database. The relational database is ancient technology that has stood the test of time. But writing SQL code is not an ideal abstraction for modern app development. It provides too much low-level control, and you'll probably blow your foot off writing it. To address this concern, ORMs like Sqlize implement object-relational mapping to express data with object-oriented code like JavaScript classes. Prisma is also an ORM that addresses similar problems, but instead it has its own declarative schema definition language.

You write a schema to express your data and relationships in a human-readable way, or the schema can be automatically inferred from any existing database. Prisma then converts the schema into type definitions, allowing you to perform type-safe CURD operations with your own database models, which means you get IDE autocompletion tailored to your own custom schema. In addition, it handles migrations as your data structure evolves, and if you want to visualize your data, Prisma Studio allows you to view and manage all of your tables and rows in the browser. To get started, you'll need a relational database like MySQL or Postgres, although MongoDB is supported as well. From a Node.js project run `npx prisma init`.

This creates a `.env` file, where you can add your database URL and a Prisma directory to define the schema. If the existing database already has data, we can run `prisma db pull` to introspect it and automatically generate the schema from it. Notice how each table is represented with the model keyword, then inside the braces, we have column names and their data types, as well as optional constraints. Like for example, we might use relation to create a foreign key constraint between a weapon and a human, and we can also index the weapon ID while we're at it.

The beauty of this is that the code is significantly more concise than what you would write otherwise in raw SQL. Now, if we decide to modify our schema, like add an extra timestamp column, we'll also need to modify the database structure, which can be handled automatically. With the `prisma migrate` command. Now, to interact with the database on the server, we tell Prisma to generate the client library, import the client into a JavaScript file and notice how it autocompletes the models in the schema. If you do something wrong, you'll know about it right away. Now find all the humans with the `findMany` method.

To filter the results, we can add a where clause as a plain JavaScript object, and if we want to join a related table, we can do that by adding the include object. Prisma already knows how to run the complicated SQL code under the hood, and returns the data as an array of JavaScript objects ready to use in your application.

This has been Prisma in 100 seconds. If you want to see more short videos like this, hit the Like button and subscribe. And let me know if you want to see a full Prisma tutorial in the comments. Thanks for watching and I will see you in the next one.

## 单词&短语

1. Prisma [ˈpriːzmə]：Prisma 是一个开源的工具，用于让数据库操作变得有趣且安全。
2. ancient [ˈeɪnʃənt]：古老的
3. has stood the test of time [hæz stʊd ðə test əv taɪm]：经受住了时间的考验
4. ideal [aɪˈdiːəl]：理想的；完美的
5. abstraction [ˌæbˈstrækʃən]：【计】抽象
6. modern [ˈmɑːdərn]：现代的
7. object-oriented [ˌɑːbdʒɪkt ɔːriˈentɪd]：【计】面向对象的
8. address problems [əˈdres ˈprɑːbləm]：解决问题
9. declarative [dɪˈklærətɪv]：【计】声明式
10. definition [ˌdefɪˈnɪʃn]：定义
11. schema [ˈskiːmə]：模式定义
