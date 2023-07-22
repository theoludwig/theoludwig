---
title: '❌ Mistakes I made as a junior developer'
description: 'Here are mistakes I made when I started, to prevent you from making the same mistakes.'
isPublished: true
publishedOn: '2022-03-14T07:42:52.989Z'
---

Hello! 👋

I will explain some of the mistakes I made as a junior developer, so you can avoid doing them.

## 1. Skipped learning how to do automated tests

Probably one of the most common errors junior developers does.

When you begin in programming, you learn a programming language, so you learn variables, conditions, loops, functions, etc.

With these concepts, you might start a new project, but as the project grows, you will end up using functions at multiple places in code, so if you change the behavior of a function, it will affect the whole project.

And because the code grows, you might do some refactoring to make it more maintainable, but because we are humans, we make mistakes, you could accidentally break the entire project even with a tiny change you thought was safe to do.

If you had automated tests, you would have a way to know if you made a mistake even before deploying to production.

Depending on the programming language you are using, and what is the project you are working on, writing tests will be different.

Be aware that there are 3 main testing strategies:

- [Unit testing](https://en.wikipedia.org/wiki/Unit_testing)
- [Integration testing](https://en.wikipedia.org/wiki/Integration_testing)
- [End-to-end testing](https://en.wikipedia.org/wiki/End-to-end_testing)

After you learned the basics of programming, learn how to write automated tests, it will save you a lot of time and debugging.

I would even say that you should get used-to writing tests, it should be an automatism, you should not even have to think about it to do it.

## 2. Thinking too big, with too much abstraction

Abstraction is great, but it can be harder to understand what is going on if actually don't need this abstraction.

Find the right balance, between abstraction and simple implementation, start simple, and then gradually improve and add more features.

When you start a new project, you should focus on the core of the project, not on the details, to release as soon as possible, a working usable version of your project also called a [**Minimum Viable Product** (MVP)](https://en.wikipedia.org/wiki/Minimum_viable_product), it is better than a half-functioning, over-engineered project.

I made this mistake while developing [Thream](https://thream.theoludwig.fr), your **open source** platform to stay close with your friends and communities, **talk**, chat, **collaborate**, share and **have fun**.

Basically, I thought it was cool, to do a "big" v1.0.0 release with a lot of features, but in fact, it was not, because I could not even show what I was developing (to the end-users, not technical people) as I was making multiple features at the same time and also mainly focused on the **REST API** side and not at all the **website (frontend)**.

What I recommend you to do is to start with a **v1.0.0** release as soon as possible with the minimum required features needed for your project idea, and then gradually add new features and release new versions.

In my example for [Thream](https://thream.theoludwig.fr), I could release a v1.0.0 without these features:

- English/French translation (could be only English)
- Light/Dark theme (could be only Dark)
- OAuth2 Authentication (could be only simple email/password authentication)
- User public profile
- Channels (maybe could be only one channel per guild to start with)

And probably more, what was really required with [Thream](https://thream.theoludwig.fr), is that users could authenticate, create a community of friends, and then they could communicate with each other with messages in real-time, really that was enough.

And then with this basis, I could release, v1.1.0, v1.2.0 etc. with more features, and release new versions more often to show the progress of the project, it is also more motivating to have users testing our project and to **get feedback sooner**.

**Start simple, improve later.**

## Conclusion

The real key to success is to **be passionate**, **keep learning** on your own, and **look at mistakes as learning experiences**.
