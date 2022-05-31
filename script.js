// Задание 1,нужно создать мини банкомат

/*let personName = prompt("Как вас зовут?")
let money = 10000
let account = 7777
  if (personName === "Alex" || personName[0] == "a") {
      let accountNum = prompt("Напишите свой номер счёта,чтобы продолжить!")
      if (accountNum == account) {
           let moneyCash = prompt("Сколько хотите обналичить?")
           let moneyRemainder = money - moneyCash
           if (moneyRemainder){
               alert(`Отлично,вы сняли ${moneyCash}$,и у вас осталось ${moneyRemainder}$! Спасибо что воспользовались нашими услугами!`)
           } else{
               alert("Недостаточно средств на счету!")
           }
      } else {
          alert("Вы ввели неверный номер счёта,пожалуйста повторите попытку и попробуйте заново!")
      }
  } else{
      alert(`Пользовател с именем ${personName} не существует`)
  }
*/





// Задание 2,написать программу которая будет проверять на правильность имени и подсчитвать числа
let howManyPeople = prompt("Здравствуйте,сколько людей хотят зайти в клуб?")
let busyPlaces = prompt("Сколько занято мест?")
let overAll = howManyPeople + busyPlaces 
if(overAll < 10){
    let name = prompt("Как вас зовут?");
    if (name[0] == "A" || name[0] == "a"){
        let age = +prompt(`Отлично ${name} а теперь,можете написать сколько вам лет?`)
         if (age >= 20 && age <= 40){
             let money = prompt(`Вау,вам уже ${age},это очень круто,сколько у вас денег в кармане?`)
             if (money >= 100){
                 alert(`Отлично ${name},вы можете войти в наш клуб и весело провести время!`)
             } else{
                 alert("Чтобы войти в клуб,нужно иметь минимум 100$")
             }
            }else{
             alert("К сожалению,тем кому меньше 20 или больше 40 лет нельзя входить в наш клуб!")
         }
    } else{
        alert("Вход закрыт")
    }
} else{
    alert("Мест не хватает")
}





 
