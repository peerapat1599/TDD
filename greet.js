function greet(name) {
  if (name == null) {
    return "Hello, my friend.";
  } else if (!Array.isArray(name) && name == name.toUpperCase()) {
    return "HELLO, " + name + "!.";
  } else if (Array.isArray(name)) {
    if (name.length == 2) {
      return `Hello, ${name.join(" and ")}.`;
    } else if (name.length > 2) {
      var sum = "Hello, ";
      for (i = 0; i < name.length; i++) {
        sum += name[i];
        if (i == name.length - 2) {
          sum += ", and ";
        } else if (i < name.length - 1) {
          sum += ", ";
        }
      }
      return sum + ".";
    }
  }
  return "Hello, " + name + ".";
}

module.exports = greet;
