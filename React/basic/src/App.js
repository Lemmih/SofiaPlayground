import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Portal  7101e515-1269-4f53-85fa-c88fbd145c02

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

// Let's talk a little bit about React and how it is designed.
// In React, the components we define act just like HTML objects/tags.
// Let's try it out. Let's define a new component called 'Bold'.
// You write it. I'll guide you.
// Good. Now we want a 'render' function in the class.
// Good. And it should return <b>something</b>.
// Hm, no, let's start simple. Just return something in bold.
// <b> is the HTML tag for 'bold', btw.
// Does it make sense?

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
    const { list, remove } = this.props;
    // Here we call 'remove', right?
    // Do we call it with any arguments?
    // (idx)?
    // Yep. Do you see what 'idx' is?
    // I don't understand the question
    // If TODO=['dance', 'drink', 'sex'] and you click on 'drink', what value
    // do you guess will be in 'idx'?
    // 1
    // Great! That's right. What if you clicked on 'sex' instead?
    // 2
    // Excellent. So 'idx' is the index. And it's the argument for 'remove' which
    // is actually the 'handleRemove' function, right?
    // yeah
    // So now we can go to 'handleRemove' and use that index when deleting the TODO item.
    return (
      <ul>
        {list.map((todoItem, idx) => (
          <li onClick={() => remove(idx)}>{todoItem}</li>
        ))}
      </ul>
    );
  }
}

// Ok, time to make the TodoApp. Let's make a component with that name.
// Ok, this component needs some state. We would like to have the TODO items
// in the state. Do you remember we've done something similar before? Can you
// copy the code we used before and adept it to our needs?
// Good. Now, what's should the type be for the TODO items? - strings
// Good. That's the JavaScript type for 'strings'?
// In other words, which type does ShowTodos expect? - array of string
class TodoApp extends Component {
  // Our TodoApp component contains an array of TODO items.
  // ok
  state = {
    TODO: [],
    myText: ""
  };

  handleChange = evt => {
    this.setState({ myText: evt.target.value });
  };
  handleKeyPress = evt => {
    const { TODO, myText } = this.state;
    if (evt.key === "Enter") {
      console.log("Enter was pressed.");
      this.setState({
        myText: "",
        TODO: TODO.concat([myText])
      });
    }
  };

  handleRemove = idx => {
    const { TODO } = this.state;

    // You had no way of knowing this but the 'splice' function
    // directly modifies the TODO variable. So we do this step
    // first and then update the state using the new TODO variable.
    TODO.splice(idx, 1);
    // Here we set the new state to use the modified TODO variable.
    this.setState({ TODO: TODO });
  };

  render() {
    const { TODO, myText } = this.state;
    const N = myText.length; // This line defines the 'N' variable.

    return (
      <p className="App-intro">
        <ShowTodos list={TODO} remove={this.handleRemove} />
        <span>
          <input
            value={myText}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          Input has {N} characters
        </span>
      </p>
    );
  }
}

// Do you have a mental model of what will happen when you run this code
// in the browser?
// which code? line 578 or 593?
// The current code. Like, what would happen if you hit ctrl+s right now?
// see feed the dog
// Alright, does this expectation match reality?
// yes
// Good.
// What about now? Do you have an expectation? And does it match reality?
// I think it will show nothing, because in TodoApp, TODO is an empty array
// Excellent. Is that what happens?
// Yes
// Wonderful. This means you understand the code.
// So, let's imagine that TODO changed to be ["Take exam"], what do you expect
// the browser result to be?
// Take exam
// Excellent. So now we just need a way to add items to the TODO state and
// the todo app will be nearly finished, right?
// Yes.
// We need an input field so let's start by copying the code from the Length component.

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <TodoApp />
        </p>
      </div>
    );
  }
}

export default App;
