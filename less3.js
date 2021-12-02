let styles = ["Джаз","Блюз"]; 

styles.push("Рок-н-ролл");// с помощью push добавляем элемент рок-н-ролл в конец//

styles.splice((styles.length / 2), 1, "Классика"); // заменяем значение "Блюз" на "Класика" //


document.write (styles.shift()); // с помощью sift удаляем  первый элемент массива //

styles.unshift( "Рэп", "Регги");// c помощью unshift вставляем "Рэп", "Регги" в начало массива//
console.log (styles);




  