```javascript
  // Section A: Basics & Core Understanding (1–10)

1. var, let, const ke scope, hoisting, re-declaration ka real difference likh. Ek real bug example de.
answer = 
var is a re-declaration its has hoisting you declare like var a =8  or var a =3
let is cahngable it has but tdz temoral dead zone 
cosnt is same tdz and scopes he normally  not chnagable but when using object so the refernec changes not memory 



2. JS me primitive vs non-primitive data types kya hote hain? Heap vs Stack ka relation bata.

number bollean bigint string undefined null  = stack memory or primtive data types 

object or array  = heap memory or non-primitve data





3."5" + 1, "5" - 1, true + true, null == undefined — output + WHY.

"5" + 1 = 51 because is a string concatination and the + operator change to a string

"5" - 1  = 4  beacsue the - oprerator change into num 
true + true  =2  becuase true =1 
null == undefined = true  but when === so its false 




4. typeof null ka output kya hai aur kyon galat hai?

object 

5. == aur === me sirf “type checking” hi difference hai? Agar haan to tu galat hai — explain.

== only number check 
=== type chek also



6. Number("123abc"), parseInt("123abc"), +"123abc" — outputs aur use-cases.

 Number("123abc") isme error ayyega becuase number string char ko leta hi nai

  parseInt("123abc")  iska ouptut 123 because parseint function when a string start with number so he change when its start with char so he dosent change 

 

 

7. NaN kya hai? NaN === NaN false kyon hota hai?

nan is a aslo a nnumber bhai ye tu bata kyo aata hai 

8.JS me immutability ka matlab kya hai? String example de.

js me imuutable ka matlab hai suppouse you have a string like let name3= ankit  when yoiu cahneg this like name3 = rohit so he change the value but not in the memory location so its mutable ye as copy dega 

9. BigInt kyon introduce hua? Ek real-world problem bata jo Number solve nahi kar paata.

bigint introduce to large number when you have number very big and the each decimal point is important so 


10. Date object timezone ke sath kaise behave karta hai? Ek common bug explain kar.

date object time zone ke sath 

 // Section B: Arrays, Objects & Functions (11–18)

map, filter, reduce ka internal difference likh — sirf definition nahi.

forEach aur map me practical difference bata — return value ke alawa.

Array shallow copy vs deep copy kya hoti hai? Example ke sath.

Object me this kab window/global ko point karta hai? 3 cases likh.

Arrow function me this ka behavior normal function se alag kyon hai?

Object destructuring me default values aur renaming ka example likh.

Rest (...rest) aur Spread (...spread) ka actual difference kya hai?

Function ke andar function ho to closure kaise banta hai? Ek interview-level example de.

// Section C: Execution, Scope & Memory (19–23)

JS code execute hone ka exact flow likh:
👉 Global Execution Context → Memory Phase → Execution Phase

Hoisting kya hai? let/const hoist hote hain ya nahi? Sach bata.

Temporal Dead Zone (TDZ) kya hai aur kyon exist karta hai?

Call Stack overflow ka matlab kya hai? Infinite recursion ka role?

JS single-threaded hone ke bawajood async kaise handle karta hai?

//Section D: DOM & Events (24–27)

NodeList aur HTMLCollection me real difference likh — live vs static.

event.target aur event.currentTarget ka difference example ke sath.

Event bubbling aur capturing kya hota hai? Default kya hota hai?

DOM me element create karte waqt innerHTML dangerous kyon hai?

//Section E: Async JS, API & OOP (28–30)

setTimeout zero delay hone ke bawajood turant kyon nahi chalta?

Promise ke 3 states likh aur .then() chain ka flow explain kar.

Prototype kya hai? JS OOP classical language se alag kyon hai?
```