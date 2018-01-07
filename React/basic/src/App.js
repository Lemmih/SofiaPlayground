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

class Length extends Component {
  state = {
    txt: ""
  };

  handleChange = evt => {
    this.setState({ txt: evt.target.value });
  };

  render() {
    const { txt } = this.state; // This line defines the 'txt' variable.
    const N = txt.length; // This line defines the 'N' variable.
    return (
      <span>
        <input value={"txt"} onChange={this.handleChange} />
        {
          //          ^^^^^^^^^^^ is this related to line 492? if not, how to do N=txt.length?
          // "input" , so I can see the rectangle and type character's, right?
          // Yes, the 'input' tag creates an input field.
          // 'txt' refers to the variable defined on line 492. Do you see how line 492 defines a variable called 'txt'?
          // so I can't say {txt} = this.state?
          // Do you mean in Javascript or in HTML? They are two different languages with two different sets of rules.
          // It's important you never confuse the two.
          // can line 496 value={"txt"} that "txt" be changed to other characters?
          // "txt" is a string. It always has the same value.
          // I don't get it.
          // Do you understand the difference between "txt" (a string) and 'txt' (a variable)?
          // change my question: can line 484,488,492,493 "txt" be named by other characters?
          // Yes, 'txt' is a variable that we defined. We can always change the names of variables that we define ourselves.
          // then please try to avoid this afterwards, the same 'txt' made me confused a lot
          // What same txt?
          // I've asked many times.... line 496 value={txt} is that {txt} related to line 492
          // It /is/ related. {txt} refers to the variable defined on line 492.
          // then why can't say txt=this.state?
          // Where do you want to write that? In Javascript or in HTML? Show me the line where you want to write that.
          // or const { txt } = this.state is only the right way to say?
          // Would it be easier to understand if we removed in the 'const' declarations?
          // They aren't necessary. They never are. They just make the code prettier.
          // Now the code doesn't use 'const' anymore.
          // ....this just showed what I was thinking was right.... I was more confused when you tried to explain.
          // Great. Do you see why <input value={"txt"}/> would always be fixed to the same string?
          // it has to make "N" work
          // Actually, let's just try with value={"txt"}. I think it's much easier to understand
          // if it actually see what it does.
          // Run the code and try to enter code text in the input field.
          // can't enter
          // Exactly. Do you understand why? It has to do with the difference between: txt and "txt"
          //Oh, I think I see.
          // When you said:
          //  // can line 496 value={"txt"} that "txt" be changed to other characters?
          // You didn't actually mean anything by the quotes.
          // ......yeah....I also noticed
          // You have to fairly careful with that. The quotes changes the meaning a lot.
          // You can go shower now. :P
          // I feel it'll take years for me to understand
          // It won't.
        }
        Input has {N} characters
      </span>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
