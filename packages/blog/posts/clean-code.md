---
title: "🧼 Clean Code"
description: 'What is "Clean Code", what are "Design Patterns", and why is it so important today? Tips and tricks to make your code more readable and maintainable in the long term.'
isPublished: true
publishedOn: "2022-02-23T08:00:18.758Z"
---

Hello! 👋

Have you already heard of "**Clean Code**" or "**Design Patterns**"?

Even if you know what it is about, this blog post will probably still be useful to you, I will share some tips and tricks to make your code more readable and maintainable in the long term.

**Note:** Sources used to write this blog post are available at the [end of this post](#sources).

## Definition: Clean Code

A clean code is a code that is **easy** to **read** and easy to **understand**.

But I promise it is not a code that is easy to write, in fact it is really **hard to write Clean Code**.

We could ask ourselves, what is **easy** to **read** and easy to **understand**?

It depends of many factors, and is somewhat relative to each one of us. The **perfect** Clean code **doesn't exist**, but we can try to be **as perfect as possible**.

## Why is it so important?

Code that works is great, but not enough, even if the code will be read and understood by the computer, we should not forget that the code is **written by human** and will be also **read by human** not only a machine.

For example the [Linux kernel](https://www.kernel.org/), is one of the biggest open source project with many contributors worldwide. Last data shows that it is about **20 millions** lines of code.

With a project of this magnitude, we can't let everyone do what they want and however they want, **we must set rules and conventions** to get everyone to agree, this allows to add features faster and will reduce possible bugs as **developers** will not struggle as much to understand the code.

## Definition: Design Patterns

These **rules** and **conventions** are so called **Design Patterns**.

A software design pattern is a general way of **solving a problem** by applying a **well-known solution**.

Design patterns are formalized **best practices** that the programmer can use to solve common problems when designing an application or system.

## How to write Clean Code and famous Design Patterns

To show you the rules and conventions, I will write the examples in the [TypeScript](https://www.typescriptlang.org/) programming language but it is relevant to any programming language.

### Naming variables

We all know that **variables** are used everywhere in **programming**, good variable names allow us to better understand the intention of the code.

#### Same vocabulary for the same type of variable

##### Example (bad way)

```typescript
function getUserInfo(): User
function getUserDetails(): User
function getUserData(): User
```

##### Example (good way)

```typescript
function getUser(): User
```

---

#### Avoid "Magic Numbers"

##### Example (bad way)

```typescript
// What does 86400000 mean?
setTimeout(restart, 86400000)
```

##### Example (good way)

```typescript
const MILLISECONDS_IN_ONE_DAY = 24 * 60 * 60 * 1000
setTimeout(restart, MILLISECONDS_IN_ONE_DAY)
```

---

#### Explicit is better than implicit (no abbreviations or acronyms)

##### Example (bad way)

```typescript
const u = getUser()
const s = getSubscription()
const t = charge(u, s)
```

##### Example (good way)

```typescript
const user = getUser()
const subscription = getSubscription()
const transaction = charge(user, subscription)
```

---

#### As short as possible, as long as necessary

##### Example (bad way)

```typescript
interface Car {
    carModel: string
    carColor: "red" | "blue" | "yellow"
}
const printCar = (car: Car): void => {
    console.log(`${car.carModel} (${car.carColor})`)
}
```

##### Example (good way)

```typescript
interface Car {
    model: string
    color: "red" | "blue" | "yellow"
}
const printCar = (car: Car): void => {
    console.log(`${car.model} (${car.color})`)
}
```

---

#### Boolean names

The name of a boolean variable should be a question, and the answer should be true or false. We can use prefixes like `is`, `has`, `can` to make it more explicit and we should avoid negation.

##### Example (bad way)

```typescript
let person = true
let age = true
let dance = true
function isEmailNotUsed(email: string): boolean
```

##### Example (good way)

```typescript
let isPerson = true
let hasAge = true
let canDance = true
function isEmailUsed(email: string): boolean
```

---

### DRY (Don't Repeat Yourself)

When we copy/paste the same lines of code, we should better abstract it in a function, that we can reuse later without having to copy/paste the lines of code, that makes the code more maintainable afterwards, because if we need to change the behavior of this piece of code, we won't need to change it in several places, but only when declaring the function.

---

### KISS (Keep It Simple Stupid)

As we have just said, we will prefer to abstract the code in multiple functions, rather than leaving everything in the same place, but a function should not do "too much", and we should rather separate it into several distinct functions.

We have to keep it as simple as possible, not to implement features that are not requested, and to divide the functions as much as possible into small functions.

### Example (bad way)

```typescript
import fs from "node:fs"
import path from "node:path"

const createFile = async (
    name: string,
    isTemporary: boolean = false,
): Promise<void> => {
    if (isTemporary) {
        return await fs.promises.writeFile(path.join("temporary", name), "")
    }
    return await fs.promises.writeFile(name, "")
}
```

`createFile` is a function that does 2 things so it is better to split it in 2 separated functions.

### Example (good way)

```typescript
import fs from "node:fs"
import path from "node:path"

const createFile = async (name: string): Promise<void> => {
    await fs.promises.writeFile(name, "")
}

const createTemporaryFile = async (name: string): Promise<void> => {
    await createFile(path.join("temporary", name))
}
```

---

### TDD (Test Driven Development)

Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.

We first write tests that should fails because there are no implementation, and then we write the code implementation to make the tests succeeds.

The End To End (e2e) and Unit tests should document what is the behavior intended for the code.

---

### Avoid comments

One of the most important rule of "Clean Code": If you need to add **comments**, it's because your code is **not clean**.

I know that might be counter intuitive at first, as most developers will advice you to add comments to your code, to document what it does.

The thing is that you should choose good variable names, break down features in multiple functions, so that others developers can read your code and understand it just by reading the functions names etc.

You can write comments, but that should only be used documenting how to use a function but not for the implementation itself and in places where you can't be more explicit.

In fact, as we saw in the [TDD section](#tdd-test-driven-development), automated tests can document what a function should returns, and how the code should behave, so that should already improve code maintainability.

Having a good comment explaining a difficult code is better than nothing with a bad written code, difficult to understand.

#### Example (bad way)

```typescript
// Check if subscription is active
if (subscription.endDate > Date.now()) {
}
```

#### Example (good way)

```typescript
const isSubscriptionActive = subscription.endDate > Date.now()
if (isSubscriptionActive) {
}
```

Here we are creating a new variable `isSubscriptionActive` that allows us to avoid the need of a comment to understand what the code does.

---

## Conclusion

We can't write the perfect clean code understandable by everyone but we can **write code that is as perfect as possible to ease maintaibility** for yourself and others developers.

## Sources

- [Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin](https://books.google.fr/books/about/Clean_Code.html?id=hjEFCAAAQBAJ)
- [Software Design Pattern (Wikipedia)](https://en.wikipedia.org/wiki/Software_design_pattern)
- [TDD - Test-driven development (Wikipedia)](https://en.wikipedia.org/wiki/Test-driven_development)
- [github.com/labs42io/clean-code-typescript](https://github.com/labs42io/clean-code-typescript)
