function localStorageManager(){
    this.massage = []
};
LocalStorageManager.prototype.addLocalStorage = function (text) {
    this.message.push(text);
}

console.log(this.message);

/*
Робота із localStorage відсутня. Очікувалася робота із localStorage та prototype.

function LocalStorageManager() { }

LocalStorageManager.prototype.saveData = function (key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(`Data with key '${key}' saved successfully.`);
  } catch (error) {
    console.error(`Error saving data with key '${key}': ${error.message}`);
  }
};

LocalStorageManager.prototype.getData = function (key) {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    console.log(`Data with key '${key}' retrieved successfully:`, data);
    return data;
  } catch (error) {
    console.error(`Error retrieving data with key '${key}': ${error.message}`);
    return null;
  }
};


const localStorageManager = new LocalStorageManager();
*/
