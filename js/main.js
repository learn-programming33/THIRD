function openStartPage() {
    document.getElementById("main-page").style.display = "none";
    document.getElementById("start-page").style.display = "grid";
}

function closeStartPage() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("main-page").style.display = "grid";
}

function showLetters() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("letters-page").style.display = "grid";
}
function closeLettersPage() {
    document.getElementById("letters-page").style.display = "none";
    document.getElementById("start-page").style.display = "grid";
}



// function showWriteLetters() {
//     document.getElementById("letters-page").style.display = "none";
//     document.getElementById("write-letters-page").style.display = "grid";
//     // تعريف متغير لحفظ الحرف الحالي
//     let currentLetter = "أ";
  
//     // تعريف متغير لحفظ عنصر DOM الذي يعرض الحرف الحالي
//     const letterElement = document.getElementById("write-letters");
  
//     // تعريف متغير لحفظ عنصر DOM لزر التالي
//     const nextButton = document.getElementById("next");
  
//     // تعريف متغير لحفظ عنصر DOM لزر السابق
//     const previousButton = document.getElementById("previous");
  
//     // إضافة مستمع حدث لزر التالي
//     nextButton.addEventListener("click", () => {
//       // زيادة الحرف الحالي
//       currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
  
//       // تحديث عنصر DOM الذي يعرض الحرف الحالي
//       letterElement.textContent = currentLetter;
  
//       // تعطيل زر التالي إذا وصلنا إلى آخر حرف
//       if (currentLetter === "ي") {
//         nextButton.disabled = true;
//       }
  
//       // تمكين زر السابق إذا لم يكن معطلاً
//       if (previousButton.disabled) {
//         previousButton.disabled = false;
//       }
//     });
  
//     // إضافة مستمع حدث لزر السابق
//     previousButton.addEventListener("click", () => {
//       // نقصان الحرف الحالي
//       currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
  
//       // تحديث عنصر DOM الذي يعرض الحرف الحالي
//       letterElement.textContent = currentLetter;
  
//       // تعطيل زر السابق إذا وصلنا إلى أول حرف
//       if (currentLetter === "أ") {
//         previousButton.disabled = true;
//       }
  
//       // تمكين زر التالي إذا لم يكن معطلاً
//       if (nextButton.disabled) {
//         nextButton.disabled = false;
//       }
//     });
  
//     // عرض الحرف الحالي عند تحميل الصفحة
//     letterElement.textContent = currentLetter;
//   }
  

function showWriteLetters() {
  document.getElementById("letters-page").style.display = "none";
  document.getElementById("write-letters-page").style.display = "grid";
}
function closeWriteLettersPage() {
    document.getElementById("write-letters-page").style.display = "none";
    document.getElementById("letters-page").style.display = "grid";
}

function showListenLetters() {
    document.getElementById("letters-page").style.display = "none";
    document.getElementById("listen-letters-page").style.display = "grid";
}

function closeListenLettersPage() {
    document.getElementById("listen-letters-page").style.display = "none";
    document.getElementById("letters-page").style.display = "grid";
}

function showNumbers() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("numbers-page").style.display = "grid";
}

function closeNumbersPage() {
    document.getElementById("numbers-page").style.display = "none";
    document.getElementById("start-page").style.display = "grid";
}
// function showWriteNumbers() {
//     document.getElementById("numbers-page").style.display = "none";
//     document.getElementById("write-numbers-page").style.display = "grid";
//     // تعريف متغير لحفظ الرقم الحالي
//     let currentNumber = 1;

//     // تعريف متغير لحفظ عنصر DOM الذي يعرض الرقم الحالي
//     const numberElement = document.getElementById("write-numbers");

//     // تعريف متغير لحفظ عنصر DOM لزر التالي
//     const nextButton = document.getElementById("next-num");

//     // تعريف متغير لحفظ عنصر DOM لزر السابق
//     const previousButton = document.getElementById("previous-num");

//     // إضافة مستمع حدث لزر التالي
//     nextButton.addEventListener("click", () => {
//     currentNumber++;

//       // تحديث عنصر DOM الذي يعرض الرقم الحالي
//     numberElement.textContent = currentNumber;

//       // تعطيل زر التالي إذا وصلنا إلى آخر رقم
//     if (currentNumber === 30) {
//         nextButton.disabled = true;
//     }

//       // تمكين زر السابق إذا لم يكن معطلاً
//     if (previousButton.disabled) {
//         previousButton.disabled = false;
//     }
//     });

//     // إضافة مستمع حدث لزر السابق
//     previousButton.addEventListener("click", () => {
//     currentNumber--;

//       // تحديث عنصر DOM الذي يعرض الرقم الحالي
//     numberElement.textContent = currentNumber;

//       // تعطيل زر السابق إذا وصلنا إلى أول رقم
//     if (currentNumber === 1) {
//         previousButton.disabled = true;
//     }

//       // تمكين زر التالي إذا لم يكن معطلاً
//     if (nextButton.disabled) {
//         nextButton.disabled = false;
//     }
//     });

//     // عرض الرقم الحالي عند تحميل الصفحة
//     numberElement.textContent = currentNumber;
// }
    
function showWriteNumbers() {
  document.getElementById("numbers-page").style.display = "none";
  document.getElementById("write-numbers-page").style.display = "grid";
}

function closeWriteNumbersPage() {
    document.getElementById("write-numbers-page").style.display = "none";
    document.getElementById("numbers-page").style.display = "grid";
}
function showListenNumbers() {
    document.getElementById("numbers-page").style.display = "none";
    document.getElementById("listen-numbers-page").style.display = "grid";
}

function closeListenNumbersPage() {
    document.getElementById("listen-numbers-page").style.display = "none";
    document.getElementById("numbers-page").style.display = "grid";
}