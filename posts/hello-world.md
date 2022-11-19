---
title: '👋 Hello, world!'
description: 'First post of the blog, introduction and explanation of how this blog is made.'
isPublished: true
publishedOn: '2022-02-20T08:00:18.758Z'
---

Hello, world! 👋

## Introduction

This blog is here to document my journey of learning computer science, explaining technical difficulties and problems I encountered, and how I solved them.

The idea is that I will share my knowledge with you (readers), and hopefully help you to learn too.

Keep in mind that I will not translate the posts in French, all the posts will be written in English, as I'm not a native English speaker, I will probably make mistakes, feel free to open pull requests on [GitHub](https://github.com/Divlo/Divlo) to correct them. 😊

I plan to publish new posts when I have something new to share. There's no schedule, so stay tuned!

To stay informed of new blog post and to ask questions, feel free to follow me on Twitter: [@Divlo_FR](https://twitter.com/Divlo_FR).

## Project based learning

The blog posts subjects will be often related to the problems I encountered in the projects I am currently working on.

Most of the time, when I am learning something new, I **learn it because I actually need it for a project**, I don't learn [React.js](https://reactjs.org) because it is trending, and everyone talks about it.

I learn something new, because it solved a "real life" problem I had encountered. For example, [React.js](https://reactjs.org) allows to easily update the DOM (Document Object Model) in the browser, so we can add interactivity to our web pages, not only that, it allows to reuse multiple HTML (JSX) elements with components.

[React.js](https://reactjs.org) is only an example, but hopefully you understood my point: I often don't like too much theoretical thing, and enjoy much more practical things.

## How this blog is made

In this section, I will explain what technologies I used to make this blog, and what are the technical choices I had to do.

The code of this website is open source on [GitHub](https://github.com/Divlo/Divlo), so you can see the code and contribute to it.

### Technologies

- [Next.js](https://nextjs.org/)

  It allows to have a server-side rendered website, that means that it is faster and easier to have a good <abbr title="Search Engine Optimization">SEO</abbr> than a <abbr title="Single Page Application">SPA</abbr>.

- [MDX](https://mdxjs.com/)

  MDX is an extension of Markdown that allows you to use custom React components.

  Here's what Markdown looks like:

  ```md
  A simple paragraph, with some **bold** text and some `inline code`.
  ```

  When using Markdown in a web application, there's a "compile" step; the Markdown needs to be transformed into HTML, so that it can be understood by the browser. Those asterisks get turned into a `<strong>` tag, and each paragraph gets a `<p>` tag etc.

- [Tailwind CSS](https://tailwindcss.com/)

  Tailwind is a CSS framework to rapidly build modern websites without ever leaving HTML.

## Conclusion

I hope you will enjoy my blog, and will find it useful.

See you in the next posts! 😊
