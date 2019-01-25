const greet = require('./greet');

test('Write a method greet(name)', ()=> {
    expect(greet("Bob"));
})

test('when name is "Pee", the method should return a string "Hello, Pee."', ()=> {
    expect(greet("Pee")).toBe("Hello, Pee.");
})

test('null, then the method should return the string "Hello, my friend."', ()=> {
    expect(greet(null)).toBe("Hello, my friend.");
})

test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', ()=> {
    expect(greet("JERRY")).toBe("HELLO, JERRY!.");
})

test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', ()=> {
    expect(greet(["Jill","Jane"])).toBe("Hello, Jill and Jane.");
})

test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', ()=> {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
})

test('when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', ()=> {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})