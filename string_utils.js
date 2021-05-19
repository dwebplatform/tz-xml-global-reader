const getLengtOfStrWithOutSpace = (textSymbols) => textSymbols.replace(/ /g, "");
const strSize = (str) => str.length;
    
// функция подсчета символов без пробелов
    const calcAmountofSymbolsWithOutSpace = (jsonElement) => {
      let totalCount = [];
      if (Array.isArray(jsonElement)) {
        jsonElement.forEach(item => {
          let count = strSize(getLengtOfStrWithOutSpace(item.__text));
          totalCount.push(count);
        });
      } else if (typeof jsonElement == 'object') {
        console.log(jsonElement);
        return [];
      }
      return totalCount;
    }
    // функция подсчета символов с пробелами
    const calcAmountofSymbolsWithSpace = (jsonElement) => {
      let totalCount = [];
      if (Array.isArray(jsonElement)) {
        jsonElement.forEach(item => {
          let count = strSize(item.__text);
          totalCount.push(count);
        });
      } else if (typeof jsonElement == 'object') {
        console.log(jsonElement);
        return [];
      }

      return totalCount;
    }