## Question & Answers

**Why do we use Keys in ReactJS lists?**
  
Keys in React are used to identify unique elements in a list, hey help React efficiently update the Virtual DOM and 
optimize rendering

**How can the transversal of lists be achieved in ReactJS?**

Using methods like `map()`, `forEach()`, or even traditional `for` loops. With them you can iterate through data and 
render components or elements based on the data

**What do you understand about components in React?**

Components are the building blocks of React applications. They should be reusable and self-contained, encapsulating
UI elements and their behavior. Components can be either functional or class-based

**Explain the two types of Components in ReactJS?**

*Functional Components:* JavaScript functions and can accept input data (props) and return JSX elements

*Class Components:* JavaScript classes that extend from the `React.Component` class and can accept input data (props) 
                    and maintain a private internal state

**What are Synthetic events in React?**

Synthetic events are React's cross-browser wrapper around the browser's native event

**What are Pure Components in ReactJS?**

PureComponent are Component that skips unnecessary re-renders for same props and state

**What are some important features of Redux?**

    - Centralized and predictable state management
    - Use of a single immutable state tree
    - Actions and reducers for modifying state
    - Middleware for handling side effects

**What do you understand about Flux in React?**

I know Flux is similar to Redux, but I don't know much about it, I never used it before

**Why are Routers used in ReactJS?**

Routers (like React Router) are used to handle navigation and routing within a single-page application (SPA)

**What are some disadvantages associated with the ReactJS framework?**

First, I like to say React is library, not a framework. Some disadvantages of React are:
    - View mixed with logic by default
    - Flexibility and Lack of Conventions
    - Not a full-featured framework
    - React apps are based on 3rd party libraries
    - JSX, a syntax extension to JavaScript 

**Why can’t browsers read JSX? How can browsers be made to read JSX?**

Browsers cannot directly read JSX because it's not valid JavaScript. JSX must be transpiled into regular JavaScript 
before it can be executed in a browser

**What do you understand about Higher-Order Components in ReactJS?**

HOC is a pattern in React where a function takes a component and returns a new component with. HOCs are often used for 
code reuse, cross-cutting concerns, and adding props or behavior to components

**What do you understand by References in ReactJS?**

References (refs) are a way to access and interact with DOM elements directly

**What are Props in ReactJS?**

Props are a mechanism for passing read-only data from a parent component to a child component

**How do you modularize code in the ReactJS framework?**

Creating reusable components

**What is the use of Webpack in React?**

It's used to bundle and optimize JavaScript and other assets like CSS and images

**What is Babel in ReactJS?**

Babel is a JavaScript transpiler, it "converts" modern Javascript into compatible code that can run in older browsers

**What is Prop-drilling in ReactJS?**

Prop drilling happens when you pass props through multiple layers of nested components

**What are Error boundaries in ReactJS?**

Components that catch and handle errors that occur during rendering. They catch errors in the tree below them

**What do you understand about the Strict mode in React?**

Additional checks and warnings in the console to encourage best practices and improve code quality.

