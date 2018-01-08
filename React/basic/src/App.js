import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Excellent.
// Excellent.

// React is a framework for creating websites. That means that we're creating HTML
// documents.
// We're writing the websites using javascript. This javascript is then executed
// in the browsers to generate the HTML.

// This code defines a component called 'App'. We can name components anything
// we want.
// Components can be rendered into HTML.
// Normally in javascript you can't directly write HTML but we're using an
// extention. This extension allows us to write, say, <b>Hello World</b>.
// Let's try editing this file and see the website update automatically.
// Change the text in the <p></p> to say something different.

// It looks the same to me
// Did you save the file? Also, you can't write comments in the HTML code.

// oh...
// It works now

// Let's talk a little bit about React and how it is designed.
// In React, the components we define act just like HTML objects/tags.
// Let's try it out. Let's define a new component called 'Bold'.
// You write it. I'll guide you.
// Good. Now we want a 'render' function in the class.
// Good. And it should return <b>something</b>.
// Hm, no, let's start simple. Just return something in bold.
// <b> is the HTML tag for 'bold', btw.
// Does it make sense?

// I don't see Hello! World!
// Right, becaues we're not using the 'Bold' class anywhere.
// Let's go use it in 'App.'
// There's no such thing as 'bold'.

// Ok, now we know how to define and use components.
// Let's try to put something INSIDE a component.
// Like this: <Bold>Hello world</Bold>
// Try it out and tell me what happens.

// I don't think I follow
// Didn't we put Hello! World! inside already?
// We put the text 'Hello! World!' inside the <b> tag.
// Now I want 'Hello world' inside the <Bold> tag.
// Btw, <Tag/> is the same as <Tag></Tag>
// Does it make sense?

// Not really
// Bold is a name of a component//
// When you say <Bold>. Is <Bold> the same as the component bold?
// Can it be different name as examples. I got confused when they both call bold
// Which things are both called 'bold'? We have the HTML tag 'b' and then we have
// our new component named 'Bold'. There's nothing else.
// <Bold>Hello world</Bold>, you say this <Bold> is not the component Bold
// It is not 'bold' but it IS 'Bold'. Lower case and upper case are different.
// We never use 'bold'. Always 'Bold'.
// <Bold> is the component Bold.
// And we can use the component many times. Like this:
// <Bold>Hello</Bold> <Bold>World</Bold>
// There the same component is used twice. Once with 'Hello' inside of it, and
// again with 'World' inside of it.
// Does it make sense? - not....

// Let's take a few steps back. And please let me know when things become confusing.
// HTML tags look like this:
//    <tag>things inside go here</tag>
//or: <tag/>
// Does this make sense? - yes
// Standard tags include: div, p, img, h1, b, ...
// 'p' is for 'paragraph', 'h1' is for 'header 1', 'img' is for image.
// We can define /new/ tags that do special things. These new tags are called
// components.
// These tags /always/ start with an uppercase letter. The standard tags /always/
// start with a lowercase letter.
// Does this make sense? - yes
// Ok, so we've defined 'Bold' up above. And it just creates some HTML using the
// standard 'b' tag. I changed the code back to 'b' because there's no such thing as 'bold'.
// Makes sense so far?
// In the App component, we use the 'Bold' component. We use it in the form <Bold/>
// because there's nothing inside of it. Remember, <tag/> is the short version of <tag></tag>.
// We could use Bold many times. Actually, let's do that.
// Does everything make sense so far?

// ish. Why there's nothing inside of Bold? we have return <b>xxx</b>
// When I say 'inside', I mean inside the tags where they are used.
// We wrote: <Bold></Bold>
// There's nothing between the start tag and the end tag.
// If we put something inside the Bold tags, it would look like this:
//  <Bold>Something</Bold>
// Does this make sense? - kinda

// make an example to see the difference
// The difference between what?
// between something/nothing in <Bold>

// I feel "Hello World" becomes bold
// Yes. Hopefully you see it as well. :)

// 1. We have component.
// 2. These components can render into HTML tags.
// 3. When we use the components, we can optionally put things inside of them.
// 4. The components may or may not use the things we put inside of them.

// These are the four things I'm trying to say. Do they make sense?

// Still don't see #3

// Here we use the Bold component with nothing inside: <Bold></Bold>
// Does this make sense? Between the start tag (<Bold>) and the end tag (</Bold),
// there's nothing. No text. No nothing. Right? - Yes

// Here we use the Bold component with a text inside: <Bold>Text</Bold.
// Between the start tag (<Bold>) and the end tag (</Bold>), there's a text.
// Right? - Yes
// The text is said to be inside 'Bold'.

// When we use the Bold component, we can choose to put things inside of it.
// Does this make sense? Hm, maybe 'make sense' is a poor choice of words.
// Do you see that it is possible? Do you see that we can either put nothing
// inside or put a text inside? - Yes
// Does #3 cause confusion now? - no, but I still don't understand why you said
// to put things inside of it since we can't really see any difference, that's part of the confusion
// ok

// The 'why' comes later. Right now I just want you to understand that it is possible.
// I want us to understand the same thing when I say to put something inside something else.

// #3 says that it is possible to put things inside of components. Does this feel true to you?
// yes
// So #3 isn't confusing anymore? yes
// Great. #4 says that components may ignore the things we put inside of them.
// And this is indeed what is happening in 'Bold'. It ignores everything we put
// inside of it. That's why it looks the same when it's empty and when something's inside of it.
// Is it because it's only have (return) in it?
// No, it's because it always returns the same thing.
// It returns <b>Hello World</b> no matter what the parameters are.
// And the things inside of it (called children) are just parameters.

// Now we want to change Bold such that it does something with the children.

// Does the code make sense? Do you understand why it shows what it shows?

// they both showed No Children
// Oops, try again.
// Does it make sense? - ok

//
// Let's write the code a little nicer.
// When we write: a.b
// it means that 'b' is a field inside the object 'a'.
// We can access fields in another way:
// const { b } = a;
// This allows us to get many fields as once if we want it:
// const { b, c } = a;

// can you please write it again with
// if (this.props. children) else - ish, I don't quite Remember
// then use const{children}= this.props
// thanks, then can use "//" to hide it, right?

// hello? np
// Sorry, was away.

// I got simple if, else. how about const now?
// 'const' declares a constant variable. Like:
// const three = 3;
// can the variable be other than numbers?
// Yes.
// const name = "Sofia";
// const obj = {name: "Sofia", looks: "cute" };
// const array = [1,2,3];
// yesterday you used const {b} = a; to show filed
// we didn't talk about it, line 154-160

// const obj = {name: "Sofia", looks: "cute" };
// const {name} = obj;
// now 'name' = 'Sofia'.
// obj.name is also 'Sofia'.
// const {looks} = obj?
// Yes.

// So instead of writing this.props.children many times, we write:
// const { children } = this.props;
// and then just 'children' many times.

// Does everything in the Bold component make sense now?
// is that right? new if.
// Yes. Well, you don't need to write this.props.children. You can write the short version.
// Yes, this should work. If we have children, put them in <b>. Otherwise, return the other thing. Looks good.

// Oh, I should explain the brackets (these things {}).
// If we just wrote: <b>children</b> then we would get the text 'children'.
// When we use curly brackets, we get code instead of text.
// We could write: {10+5} and get '15'.
// So {children} is code that refers to the variable 'children'.

// Anything that causes confusion?
// no
// Ok, let's try another component.

// David's weight
// This component will get a property called 'mass'. We would like it to show:
//   "David weighs 'mass' kgs."
// Can you guess how we're gonna do that?

// first to show text "David weighs" "kgs", right?
// Yes, that's good first step.
// can we have another class to show text? or can it be in clss Weight?
// We can do it in this class. Try running this code and see what it does.
// 3 times Hello World, why? - it's <Weight massxxx/> you wrote, not<Weight>
// are they the same?
// We're invoking the Weight component three times with three different parameters.
// Once with mass="67", once with mass="63" and finally with mass="70".
// However, the Weight component ignores the 'mass' parameter and just prints
// out a fixed string every time.
// Does the behavior make sense? - all the time?
// What do you mean? - that 'mass' parameter got ignored
// The 'mass' parameter is ignored by the Weight component. If you look in the
// code for the Weight component, you won't see any references to 'mass'. In a
// bit, we're gonna change Weight to /not/ ignore the mass parameter.

// Btw, the goal of these exercises is for you to be able to run this code in
// your head. You should be able to look at some code and imagine what the output
// would be.
// When I ask if something makes sense, I'm asking if the result you got in your
// head matches the result of actually running the code.
// I'll try
// Are you trying now? Or do you mean you'll try in the future?
// I don't quite get mass got ignored, but it looks like it's the setting
// or say, it seems like <Weight xxx/> just invoke component Weight to function, no mattet what
// Yes, <Weight xxx/> invokes the Weight component with 'xxx' as the parameters.
// The function is completely free to ignore the parameters if it wants to.
// I see
// So everything makes sense? When you run the code in your head, you get the
// same output as in the browser?
// at first, not really, I thought it'd be nothing, until I saw 3 times Hello world
// then my questions came. It's okay now
// But now it makes sense, right? Otherwise we'll go through it step-by-step.

// Great, then the next step is to use the parameter. Can you guess how we're
// gonna do that?

// const obj = {name: "Sofia", looks: "cute" };
// const {name} = obj;
// now 'name' = 'Sofia'.
// obj.name is also 'Sofia'.
// const {looks} = obj?
// Yes.

// All parameters (also called properties) are in this.props

// stuck. I'm thinking should print "David weights" first
// You can concatenate strings using '+'.

// shouldn't we show David weights + mass(67) + kg?
// Yes, show me how.
// Do you have any guesses? Any wild ideas? If you're completely blank then I'll help.

// you already put mass= 67, 63, 70 in component App
// Does it mean we can do something about it in Weight component?
// but I feel it's opposite
// we should do the funcion in component Weight, and call it in com. App
// We need to change something in the Weight component. You're 95% of the way there.
// Just one small change needed.
// Right now we print out "10". We want to print out the mass instead. Right?
// Yes, I guessed to put something to replace "10"
// Try it.
// 'const' is used for declarations.
// const three = 3; // This says: There is a variable called 'three' which has the value '3'. It doesn't /use/ the variable.
// Look at Bold to see how we're using variables. In Bold, we have a parameter
// called 'children'. Do you see how we take the parameter out of 'this.props'
// and then use it later?

class Bold extends Component {
  render() {
    const { children } = this.props;
    // If we have any children, return them inside a 'b' tag.
    // simple code  - if (this.props.children) return <b>{this.props.children}</b>;
    if (children) return <b>{children}</b>;
    else
      // else tell the world that we're childless.
      return <b>No children</b>;
  }
}
// Does it work?

// yes
// I didn't expect that to work. Interesting.
// Can just +mass+ ?

// Yep. "string " + "string" = "string string"

// I've changed App to invoke Weight without the mass property. Does the result
// still make sense?
// no result, it went wrong
// Good. We need to output something in the case that there is no 'mass'.
// Or, we could make use of Javascript's flexibility.
// Let's just try to remove the 'if' statement.
// do you mean plus else to show when there's no mass?
// We either need an else /or/ we need to remove the 'if'. - ok
// We had an 'else' in Bold so let's try removing the 'if' here.
// Makes sense?
// Does the new result make sense?
// so it can show both case with mass and without mass?
// What does it show when the 'mass' property is missing?
// David weighs undefined kg.
// Great, so 'mass' is undefined when we didn't define it.
// Is anything confusing?

// Is anything confusing about the code? Does it give the result you expect it to?

// If everything makes sense, let's move on to default properties.

// 'const' is short for 'constant'. It just declares a constant variable.
// <Weight mass="67"/> calls 'render' with this.props={mass: "67"}
// <Weight /> calls 'render' with this.props={mass: "65"}

// this.props={mass: "65"} = defaultProps?
// Yes. And default props can be overwritten by explicit properties. Like, explicitly setting mass="67".

// Does it make sense? Do you feel you understand the concept of properties and default properties?
// I think so, yeah

class Weight extends Component {
  static defaultProps = {
    mass: "65"
  };
  render() {
    const { mass } = this.props;
    if (mass) return "David weighs " + mass + " kg.";
    else return null; // we need to return something else if we don't have 'mass'.
    // we can return null. Null is shown as nothing.
  }
}

// Now we move on to state. This component introduces three new things:
//  * State: this.state and this.setState
//  * Handlers: onClick ---- what's this?
//  * Function syntax: () => { ... }

// handleClick is like 'const', built in words in atom, right?
// state

// No, 'handleClick' is just our name for the function. We can name it anything.

// 'state' is special. It is part of React.
// 'const' is part of Javascript.
// They both are fixed, right? can't use randomly
// Yes.

// onClick is an event handler in React. It tells React to run a certain function
// when something happens.
// So, onClick={this.myFunctionName} means that React will call 'myFunctionName'
// when the user clicks on the element in question.

// Why use <p>? - why use <p>
// We need an HTML element to attach the handler to. The onClick handler.
// We can attach handlers to HTML elements but not to text.

// Have you tried running the code and clicking on the counter? -
// I ran. but didn't click "count" until you told

// I've called <Counter/> two more times in App, btw. To show that the state
// is contained in each separate instance of the component.
// ok

class Counter extends Component {
  state = {
    count: 0
  };

  // this defines a function that takes zero arguments (hence the ()) and increments
  // the state by one.
  myFunctionName = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    // First we get 'count' out of the state object. This is very similar to
    // what we did for props before.
    const { count } = this.state;
    return <span onClick={this.myFunctionName}>The count is: {count}</span>;
  }
}

// If everything makes sense, let's move on to a more complicated component.

// txt: "", what is ""? a number or string or nothing
// is "" = " "? No.
// "" is an empty string.
// " " is a string that contains a space. - ok
// ist evt built in?

// No, it's the argument to the function handleChange.
// target.value, .length are built in like this.props?
// Yes. We didn't define those. They are already defined.

// what is <span>
// <span> is an HTML element that doesn't do anything.
// <b> is an HTML element that makes the text bold.
// <u> underscores the text

// <span> does nothing to the text. But we can attach handlers and put things inside of it.
// why use it and why does it exist?
// We want to return two things: An input field, and some text.
// However, we can only return /one/ thing. So we create a <span> and put the
// two things inside of it.

// why {N}{" "}? why not just {N}?
// It's because the line was split in two.
// Without the {" "} (which was inserted automatically), there won't be a space
// between the number and 'characters'.

// is the column created by span?
// the rectangle place to type characters
// No, that's the <input/> tag.

// <input value={txt} onChange={this.handleChange} />
// are  value={txt} onChange={this.handleChange} together?
// can it be written like this in any or just <input>?
// 'onChange' can be used many places.
// 'value' can only be used in a few HTML elements.
// For example, <p value="blah"/> does not make sense.
// But: <textarea value="blah"/> does make sense.

// why no need ; or something to separate  them?
// Because a space works just as well.
// value={txt}, {txt} = this.state?
// What? Oh, I think I see the confusion.
// HTML and javascript are two separate langauges.
// When we write something like: <p>hello<b>World</b></p>   <- this is HTML.
// But this is Javascript: const { mass } = this.props;
// Two (completely) different languages. They have different rules.

// This is HTML: <input value={text}/>
// It creates an input element with the property 'value' set to the javascript variable called 'text'.
// which means it has nothing to do with const{txt} or evt.target.value
// Nothing at all. Except that 'text' might have been defined using a 'const'.
// But it could have been defined in any kind of way.

// but onChange={this.handleChange}? links to handleChange?
// Yes, the curly brackets {} mean that we switch back to Javascript.
// That way, we can refer to functions and variables defined in Javascript.
// value={txt}, use {} as well....
// Yes, exactly.
// 'txt' is a variable in Javascript, right?
// We want to use that variable inside HTML.

// This is pure HTML, no Javascript:  <input value="some value"/>
// But that's no fun because the value never changes.
// So we get the value from a Javascript variable:
//   <input value={txt}/>
// If 'txt' is "Hello world" then that code generates:
//  <input value="Hello world"/>
// If 'txt' is "Something different here" then that code generates:
//  <input value="Something different here"/>

// What? I don't understand what you're asking.
// We're returning the <input/> tag from the render() function.
// And the variables are defined using 'const'.
// It feels like there's something about 'const' that isn't sitting right.
// 'const' is just a way to define variables. Nothing more.
// We can always remove 'const'. The code might just be a little longer.
// For example:
//   return this.props.mass;
// is the same as:
//   const { mass } = this.props;
//   return mass;
// They are /exactly/ the same. Completely 100% the same. But it's usually
// prettier to use 'const'.

// I'm trying to link the code, I don't know if it's a right way to think

// As an exercise, let's rename the 'txt' variable. What's your guess on how to do that?
// I don't understand "rename the 'txt' variable"
// Can you be more specific? What don't you understand? Do you know what renaming is?
// change the name
// Yes, so we want to change the name of the 'txt' variable.
// Do you see that the code below is using a variable called 'txt'?
// Yes
// Do you understand what we want to do now? You don't have to understand /how/, just have to understand /what/ we want.
// Yes, that would be part of it. Can you guess what else you have to do?
// Let's try to do it. Let's rename it to 'myText'
// Good so far. You can always try the app in the browser if you're in doubt
// whether it's done or not.
// Does the app work in the browser? - I think so
// Does the number increase correctly as you type in the input field?
// a moment, it's still with "txt" in the input
// Did you run 'yarn start' ?
// If so, reload the browser window.
// I can't type character in the field
// Good, that means we're not done with the renaming.
// Does it work now?
// Yes
// Good. Working like this (making a change, checking it in the browser, going back to make another small change)
// is very common. We will be doing it a lot. Never be afraid to break things.
// Always just guess and then check out the result in the browser.

// {} switches from HTML to JavaScript. Anything that goes inside {} will
// be JavaScript.

// so we're writing javascript or html?
// We're writing both. We can switch between the two languages.
// Out here is Javascript.
// The 'render' function is a JavaScript function that returns some HTML.

class Length extends Component {
  state = {
    myText: ""
  };

  handleChange = evt => {
    this.setState({ myText: evt.target.value });
  };

  render() {
    const { myText } = this.state; // This line defines the 'txt' variable.
    const N = myText.length; // This line defines the 'N' variable.
    return (
      <span>
        <input value={myText} onChange={this.handleChange} />
        Input has {N} characters
      </span>
    );
  }
}

// Let's write a TODO list component.
// This component should show a list of items.
// Each item should be deletable.
// New items should be added from a text field.
// We will be creating several components to solve this problem.

// Step one: Create a component to show the list of TODO items. Let's call it ShowTodos

// Let's make it such that ShowTodos doesn't have any state. It only displays the
// TODO items.
// ShowTodos is a component that takes a list of TODOs and renders them.
// It gets the TODOs from the properties.
// Let's add some default properties. How do we add default properties?
// Maybe look at the other components that we wrote. Copying from previous code
// is a very common technique.
// Did we add default properties to any of the previous components?
// I remember we talked about default properties
// You don't have to remember. It's OK to look at the code again. Do you see
// anything about default properties?

// I don't understand what is good or bad defaultProps
// Ok, let's start with the type. What should the type be?

// string? text?
// How would you handle multiple TODO items? Imagine the TODO items are "Take out the trash" and "Feed the dog".
// Let's try to use those as the defaults. How would you do that? Think aloud. Making (wrong) guesses is completely OK.
// Thinking aloud helps me understand where your brain is at.

// I'd just write the texts, which means "Take out the trash"
// Then write it! That's a great idea. Go for it. Good, write it. Go ahead and write it in the code.

class ShowTodos extends Component {
  // In HTML, you can use <ul> and <li> to make lists. Like this:
  // <ul>
  //   <li>First list element</li>
  //   <li>Second list element</li>
  // </ul>
  // ul = unordered list
  // li = list item
  render() {
    // So far, so good.
    // Now, let's try to use variables instead of plain HTML strings for the TODO items.
    // Can you guess how to move the HTML strings into variables?
    // How do we define a variable? - use const?
    // Show me how. Define anything. Do we use parenthesies?
    // It's OK to copy code you've written before. - I know
    // It's a good thing to copy code you've written before. It helps you learn. It's not cheating or anything.
    // You've never used parenthesies here before. You've never used () here before.

    // let's use lower case names for variables. Good.
    // Now, do you remember how to use a JavaScript variable in HTML?

    const list = ["Take out the trash", "Feed the dog"];

    // Ok, now let's get rid of 'list1', we don't need it anymore. Excellent.
    // Now we're gonna learn about 'map'.
    // The 'map' function does a thing for each element in a list.
    // [1,2,3].map(x => x+1)    === [2,3,4]
    // list.map(x => x.length)  === [18, 12]

    // We want to use map to create the <li> elements.
    // Does the browser output make sense?
    // No. I'm trying to figure out .map
    // What is the browser output? What do you see? Often, describing it helps to understand it.
    // it shows twice take out the trash and feed the doing
    // Right.
    // So it should show the list once because of line 606+607, right?
    // I don't understand what you meant once
    // The list of todo items is "take out..." and "feed ...", right?
    // We show that list twice. - I still don't understand how the code line 608 make sense to me
    // Can you see which output it generates? Which of the lines in the browser
    // came from the 'map' ? - no
    // This won't work.Comments are weird when we start to mix JavaScript and HTML.
    // Now my problem is I don't understand {list.map(todoItem => <li>{todoItem}</li>)}
    // Do you understand the other map examples? - Yes
    // [1,2,3].map(x => x+1)                        === [2,3,4]
    // list.map(x => x.length)                      === [18, 12]
    // list.map(todoItem => <li>{todoItem}</li>)    === list.map(x => <li>{x}</li>)
    // list.map(x => <li>{x}</li>)                  === [__, __]
    // It's an array of length 2. Now we have the general structure of the result
    // but we still don't want what to put in the two holes.
    // I don't understand <li>{x}</li>, why can't it be just x, or {x}
    // Do you understand the difference between:
    //   <li>{list[0]}</li> - Html and javascript
    // and
    //   {list[0]} - only javascript
    // ?
    // Well, that's true but they're also different in another way.
    // The first line creates an li element.
    // The second line does not - do you mean the dot showed in browser
    // Yes, it is shown as a dot in the browser.
    // I'm talking about this thing: <li></li> - understand
    // So if we wrote: list.map(x => x)
    // then we wouldn't get the <li></li> part. And we need that part. -  i see

    return (
      <ul>
        {list.map(todoItem => <li>{todoItem}</li>)}
        <li>{list[0]}</li>
        <li>{list[1]}</li>
      </ul>
    );
  }
}
// I called ShowTodos from App. Do you see it in the browser?
// Yes. I saw that in the browser. I was about to do that.
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <ShowTodos />
        </p>
        <p className="App-intro">
          <Length />
        </p>
        <p className="App-intro">
          <Counter />
          <Counter />
          <Counter />
        </p>
        <p className="App-intro">
          <Weight mass="67" />
          <br />
          <Weight mass="63" />
          <br />
          <Weight />
        </p>
        <p className="App-intro">
          Bold with nothing inside: <Bold />
          <br />
          Bold with something inside: <Bold>Something</Bold>
          <br />
        </p>
      </div>
    );
  }
}

export default App;
