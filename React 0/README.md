
!!This is not my content, go to https://gist.github.com/jineshshah36/4a0326abb191781184e9 to see the original and updated content!!

###### Tuesday, March 1, 2016
------

# A Dead-Simple Tutorial on how to use React.js for those who know HTML, CSS, and some Javascript

###### By: Jinesh Shah, Cofounder at [The Redge](https://www.theredge.com/)

### Preface

If you're reading this, I'm going to assume you are comfortable with HTML, CSS, and maybe some javascript and/or JQuery.

*If you are not comfortable with HTML, CSS, and javascript, check out [Codecademy](https://www.codecademy.com/), and maybe spend some time learning and mastering those first.*

### Introduction

In order to drive home how React works, we're going to focus on the simplest possible React application one can build. The HTML equivalent is this:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React JS</title>
</head>
<body>
    <div id="app">
        <h1>Hello, World!</h1>
    </div>
</body>
</html>
```

If we were to write this in React in the simplest possible form, here is what it would be:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React JS</title>
</head>
<body>
    <div id="app"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script type="text/babel">
        var HelloComponent = React.createClass({
            render: function() {
                return (
                    <h1>Hello, World!</h1>
                )
            }
        })
        ReactDOM.render(<HelloComponent />, document.querySelector('#app'))
    </script>
</body>
</html>
```

Ok, this is what we want to get to, so let's take it one step at a time.

### Step by Step

#### Basics

The first thing you will see is that React, at it's core, does not look wildly different from HTML. If we throw away all the logistical components of our HTML and React examples, we are left with the following:

##### HTML:

```
<div id="app">
    <h1>Hello, World!</h1>
</div>
```

As you can see here, we have a `div` with an id of `app`, which, in CSS you would see written as `#app`.

Now, for the React equivalent:

##### React:

```
<div id="app"></div>
<script>
    var HelloComponent = React.createClass({
        render: function() {
            return (
                <h1>Hello, World!</h1>
            )
        }
    })
    ReactDOM.render(<HelloComponent />, document.querySelector('#app'))
</script>
```

Ok, let's take this one piece at a time.

1. We have a `<div>` with an id of `app`, which would be denoted at `#app` in CSS. So, far, it's the same as HTML. This `<div>` is our "mount" component because we will be mounting or inserting our React into this `<div>`.

    ```
    <div id="app"></div>
    ```

2. We have a `<script>` tag with some Javascript inside it. This `<script>` tag holds our entire React application.

    ```
    <script>
    ```

3. We have a javascript variable named `HelloComponent` being defined, and it is equal to `React.createClass({...})`. This `HelloComponent` variable is known in React as a component. Just like a `<div>`, `<h1`>, `<p>`, or `<img>` tag, we are defining a new tag or component called `HelloComponent`, and as you will see, we will use that component like this: `<HelloComponent />`.

    In order to understand React fully, it's important to understand what is happening when you define a new component with `React.createClass({...})`:

    - We have a variable called `React` that has other functions and variables held within it.

    - One of those functions is `createClass`.

    - We know that to call a function, we would call it like this: `createClass()`.

    - Let's say we had to pass a variable into it called `foo`, then we would call `createClass(foo)`.

    - Now, let's say we defined `foo` like so: `var foo = {...}`.

    - Then, when we pass `foo` to `createClass`, we are simply passing what it is equal to, which is `{...}`.

    We could have written it is:

    ```
    var foo = {...}
    var HelloComponent = React.createClass(foo)
    ```

    However, it is more convenient to write it as:

    ```
    var HelloComponent = React.createClass({...})
    ```

    Now, let's see what is held inside of `{...}`.

4. Inside of every React component, there is only one requirement; That component *must* have a `render` function. The `render` function is charged with producing the HTML output of our component. We will see that in our `render` function, we are doing just that:

    ```
    render: function() {...}
    ```

5. Finally, we are at the actual HTML of the page. This is where we return the HTML for this component. In this case, all we want to return is `<h1>Hello, World!</h1>`, but you can imagine very sophisticated components with blocks of HTML. This is where the power of React starts to become clear. You can create components that you can then use in multiple places with different data.

    ```
    return (
        <h1>Hello, World!</h1>
    )
    ```


6. The last thing we have to do is call `ReactDOM` and tell it to `render` the component. What this command does is tell ReactDOM (which knows how to work with the DOM, see below) to render the component and put it in the div with id of `app`.

    ```
    ReactDOM.render(<HelloComponent />, document.querySelector('#app'))
    ```

#### Script Tags

You may have noticed the three script tags in the React app. These are where *the magic happens*. Let's go through what each one does.

##### React

The first script tag is the react.js script:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>
```

This script is getting the actual react.js library. It makes the `React` variable available to us so we can call `React.createClass`.

##### React DOM

The next script tag is the react-dom.js script:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
```

This script is getting a library called React DOM. If you have worked with HTML, you might know what the DOM (Document Object Model) is. It is the structure that holds all the information about how to take the HTML on your page and display it.

##### Babel

The final script tag is the babel.js script:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
```

This script parses something called JSX. In the javascript code we wrote, we returned `<h1>Hello, World!</h1>` which looks a lot like HTML, but it's actually JSX. the `<HelloComponent />` is another example of JSX. It's meant to look and feel like HTML, but what Babel will do is convert that JSX into javascript the will call `document.createElement`. The nice thing is that you don't really need to worry about how this works or what is happening to get started with React, so let's leave it at this.


### Conclusion

This is just an introduction to React and an explanation of all the pieces. If you want to learn more, try taking the code at the top and adding pieces and removing pieces. Don't be afraid to break it. Just try things out. Try adding more to the JSX. Then, start looking for some tutorials that go beyond the super simple basics I have written here. [This](https://scotch.io/tutorials/learning-react-getting-started-and-concepts) is a great tutorial for learning React. Good luck!

---

##### About Me

I am a cofounder at a company called [The Redge](https://www.theredge.com), your personal shopping cart for the web. We are built on Universal React, Redux, Node, Express, and MongoDB. Interested in learning more? [Get in Touch](https://www.theredge.com/get-in-touch)!

P.S. Check out my collection of [Beautiful and useful note taking & markdown tools](https://www.theredge.com/wishlist/14569326750334r0k6n7cunxw29)!
