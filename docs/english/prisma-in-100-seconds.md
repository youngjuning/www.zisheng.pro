---
description: "Prisma, an open source tool that makes it fun and safe to work with your database."
keywords:  [程序员, 英文晨读]
group:
  title: 全栈英文晨读
order: 8
toc: content
---

## Prisma in 100 Seconds

<iframe width="100%" height="415" src="https://www.youtube.com/embed/rLRIB6AF2Dg?si=NXmDfo5suaYDdBQj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Prisma, an open source tool that makes it fun and safe to work with your database. The relational database is ancient technology that has stood the test of time. But writing SQL code is not an ideal abstraction for modern app development. It provides too much low-level control, and you'll probably blow your foot off writing it. To address this concern, ORMs like Sqlize implement object-relational mapping to express data with object-oriented code like JavaScript classes. Prisma is also an ORM that addresses similar problems, but instead it has its own declarative schema definition language.

You write a schema to express your data and relationships in a human-readable way, or the schema can be automatically inferred from any existing database. Prisma then converts the schema into type definitions, allowing you to perform type-safe CURD operations with your own database models, which means you get IDE autocompletion tailored to your own custom schema. In addition, it handles migrations as your data structure evolves, and if you want to visualize your data, Prisma Studio allows you to view and manage all of your tables and rows in the browser. To get started, you'll need a relational database like MySQL or Postgres, although MongoDB is supported as well. From a Node.js project run `npx prisma init`.

This creates a `.env` file, where you can add your database URL and a Prisma directory to define the schema. If the existing database already has data, we can run `prisma db pull` to introspect it and automatically generate the schema from it. Notice how each table is represented with the model keyword, then inside the braces, we have column names and their data types, as well as optional constraints. Like for example, we might use relation to create a foreign key constraint between a weapon and a human, and we can also index the weapon ID while we're at it.

The beauty of this is that the code is significantly more concise than what you would write otherwise in raw SQL. Now, if we decide to modify our schema, like add an extra timestamp column, we'll also need to modify the database structure, which can be handled automatically. With the `prisma migrate` command. Now, to interact with the database on the server, we tell Prisma to generate the client library, import the client into a JavaScript file and notice how it autocompletes the models in the schema. If you do something wrong, you'll know about it right away. Now find all the humans with the `findMany` method.

To filter the results, we can add a where clause as a plain JavaScript object, and if we want to join a related table, we can do that by adding the include object. Prisma already knows how to run the complicated SQL code under the hood, and returns the data as an array of JavaScript objects ready to use in your application.

This has been Prisma in 100 seconds. If you want to see more short videos like this, hit the Like button and subscribe. And let me know if you want to see a full Prisma tutorial in the comments. Thanks for watching and I will see you in the next one.

## Prisma 100 秒速览

> 喜马拉雅：https://m.ximalaya.com/sound/830240967?from=pc

Prisma，一款开源工具，让你的数据库工作变得有趣而安全。关系数据库是一项古老的技术，经受住了时间的考验。但编写 SQL 代码并不是现代应用程序开发的理想抽象。它提供了太多的底层控制，你的脚很可能会被写死。为了解决这个问题，Sqlize 等 ORM 实现了对象关系映射，用 JavaScript 类等面向对象代码来表达数据。Prisma 也是一种解决类似问题的 ORM，但它有自己的声明式模式定义语言。

你可以编写一个模式，以人类可读的方式表达你的数据和关系，也可以从任何现有数据库中自动推断出模式。然后，Prisma 会将模式转换为类型定义，允许你对自己的数据库模型执行类型安全的 CURD 操作，这意味着你可以获得为自己的自定义模式量身定制的集成开发环境自动完成功能。此外，它还能在你的数据结构发生变化时处理迁移，如果你想将数据可视化，Prisma Studio 还能让你在浏览器中查看和管理所有表和行。要开始使用，您需要一个关系数据库，如 MySQL 或 Postgres，当然 MongoDB 也支持。在 Node.js 项目中运行 `npx prisma init`。

这会创建一个 `.env` 文件，你可以在其中添加你的数据库 URL 和 Prisma 目录，以定义模式。如果现有数据库中已经有数据，我们可以运行 `prisma db pull` 对其进行自省，并从中自动生成模式。请注意，每个表都用模型关键字表示，然后在大括号内是列名及其数据类型，以及可选约束。例如，我们可以使用关系在武器和人类之间创建外键约束，同时还可以索引武器 ID。

这样做的好处是，代码比你用原始 SQL 写的要简洁得多。现在，如果我们决定修改我们的模式，比如添加额外的时间戳列，我们也需要修改数据库结构，这可以自动处理。使用 `prisma migrate` 命令即可。现在，为了与服务器上的数据库交互，我们告诉 Prisma 生成客户端库，将客户端导入 JavaScript 文件，注意它是如何自动完成模式中的模型的。如果你做错了什么，马上就会知道。现在使用 `findMany` 方法查找所有人类。

要过滤结果，我们可以添加一个 where 子句作为普通 JavaScript 对象，如果要加入相关表，可以添加 include 对象。Prisma 已经知道如何在引擎盖下运行复杂的 SQL 代码，并将数据作为 JavaScript 对象数组返回，以便在你的应用程序中使用。

以上就是 Prisma 的 100 秒视频。如果你想看到更多类似的短视频，请点击“赞”按钮并订阅。如果你想看完整的 Prisma 教程，请在评论中告诉我。感谢观看，我们下期再见。

## 单词&短语

1. **Prisma** [ˈpriːzmə]：Prisma 是一个开源的工具，用于让数据库操作变得有趣且安全。
2. **ancient** [ˈeɪnʃənt]：古老的
3. **has stood the test of time** [hæz stʊd ðə test əv taɪm]：经受住了时间的考验
4. **ideal** [aɪˈdiːəl]：理想的；完美的
5. **abstraction** [ˌæbˈstrækʃən]：【计】抽象
6. **modern** [ˈmɑːdərn]：现代的
7. **object-oriented** [ˌɑːbdʒɪkt ɔːriˈentɪd]：【计】面向对象的
8. **address problems** [əˈdres ˈprɑːbləm]：解决问题
9. **declarative** [dɪˈklærətɪv]：【计】声明式
10. **definition** [ˌdefɪˈnɪʃn]：定义
11. **schema** [ˈskiːmə]：模式定义
