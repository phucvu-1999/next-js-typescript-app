---
title: "What is Typescript ?"
date: "2022-01-29"
image: getting-started-with-typescript.png
excerpt: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. You can call it Javascript superset.
isFeatured: true
slug: "getting-started-with-typescript"
---

# Javscript superset

Typescript is a **Javscript superset**, a open source language developed and mantained by _Microsoft_.

TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). There are multiple options available for transcompilation. Either the default TypeScript Checker can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.

TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.

The TypeScript compiler is itself written in TypeScript and compiled to JavaScript. It is licensed under the Apache License 2.0. TypeScript is included as a first-class programming language in Microsoft Visual Studio 2013 Update 2 and later, alongside C# and other Microsoft languages. An official extension allows Visual Studio 2012 to support TypeScript as well. Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.

![Create routes via your file + folder structure](/images/posts/getting-started-with-typescript/typescript-compiler.png)

## History

TypeScript was first made public in October 2012 (at version 0.8), after two years of internal development at Microsoft. Soon after the announcement, Miguel de Icaza praised the language itself, but criticized the lack of mature IDE support apart from Microsoft Visual Studio, which was not available on Linux and OS X at that time. As of April 2021 there is support in other IDEs and text editors, including Emacs, Vim, Webstorm, Atom and Microsoft's own Visual Studio Code.

TypeScript 0.9, released in 2013, added support for generics. TypeScript 1.0 was released at Microsoft's Build developer conference in 2014. Visual Studio 2013 Update 2 provides built-in support for TypeScript.

In July 2014, the development team announced a new TypeScript compiler, claiming 5× performance gains. Simultaneously, the source code, which was initially hosted on CodePlex, was moved to GitHub.

On 22 September 2016, TypeScript 2.0 was released; it introduced several features, including the ability for programmers to optionally prevent variables from being assigned null values, sometimes referred to as the billion-dollar mistake.

TypeScript 3.0 was released on 30 July 2018, bringing many language additions like tuples in rest parameters and spread expressions, rest parameters with tuple types, generic rest parameters and so on.

TypeScript 4.0 was released on 20 August 2020. While 4.0 did not introduce any breaking changes, it added language features such as Custom JSX Factories and Variadic Tuple Types.

## Design

- Design \*
  TypeScript originated from the shortcomings of JavaScript for the development of large-scale applications both at Microsoft and among their external customers. Challenges with dealing with complex JavaScript code led to demand for custom tooling to ease developing of components in the language.

  TypeScript developers sought a solution that would not break compatibility with the standard and its cross-platform support. Knowing that the current ECMAScript standard proposal promised future support for class-based programming, TypeScript was based on that proposal. That led to a JavaScript compiler with a set of syntactical language extensions, a superset based on the proposal, that transforms the extensions into regular JavaScript. In this sense TypeScript was a preview of what to expect of ECMAScript 2015. A unique aspect not in the proposal, but added to TypeScript, is optional static typing that enables static language analysis, which facilitates tooling and IDE support.

  _ECMAScript 2015 support_
  Main article: **ECMAScript § 6th Edition - ECMAScript 2015**
  TypeScript adds support for features such as classes, modules, and an arrow function syntax as defined in the ECMAScript 2015 standard.

![Create routes via your file + folder structure](/images/posts/getting-started-with-typescript/getting-started-with-typescript.png)

... More content ...
