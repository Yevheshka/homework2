function localStorageManager(){
    this.massage = []
};
LocalStorageManager.prototype.addLocalStorage = function (text) {
    this.message.push(text);
}

console.log(this.message);
