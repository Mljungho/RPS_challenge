class GameCounter {
  storage = window.localStorage;

  index() {
    const foo = this.storage.getItem("foo");
    return JSON.parse(foo);
  }
  create(data) {
    if (data.constructor === Object) {
      const oldEntries = this.storage.getItem("entries") || "[]";
      const newEntries = JSON.parse(oldEntries);
      newEntries.push(data);
      this.storage.setItem("entries", JSON.stringify(newEntries));
      return "The result is displayed";
    } 
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = GameCounter;
}
