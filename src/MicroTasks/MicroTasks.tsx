import { ArrayList } from "./MicroTasksComponents/ArrayList";
import { Button } from "./MicroTasksComponents/Button";
import { useState } from "react";

export const MicroTasks = () => {
    const [money, setMoney] = useState([
        { banknote: "dollar", nominal: 100, number: "a123456789" },
        { banknote: "dollar", nominal: 50, number: "b123456789" },
        { banknote: "ruble", nominal: 100, number: "c123456789" },
        { banknote: "dollar", nominal: 100, number: "d123456789" },
        { banknote: "dollar", nominal: 50, number: "e123456789" },
        { banknote: "ruble", nominal: 100, number: "f123456789" },
        { banknote: "dollar", nominal: 50, number: "j123456789" },
        { banknote: "ruble", nominal: 50, number: "h123456789" },
      ]);
      
      const [filteredMoney, setFilteredMoney] = useState(money);
      
      const [topCars, setTopCars] = useState([
        { manufacturer: "BMW", model: "m5cs" },
        { manufacturer: "Mercedes", model: "e63s" },
        { manufacturer: "Audi", model: "rs6" },
      ]);
      
      const [students, setStudents] = useState([
        { id: 1, name: "James", age: 8 },
        { id: 2, name: "Robert", age: 18 },
        { id: 3, name: "John", age: 28 },
        { id: 4, name: "Michael", age: 38 },
        { id: 5, name: "William", age: 48 },
        { id: 6, name: "David", age: 58 },
        { id: 7, name: "Richard", age: 68 },
        { id: 8, name: "Joseph", age: 78 },
        { id: 9, name: "Thomas", age: 88 },
        { id: 10, name: "Charles", age: 98 },
        { id: 11, name: "Christopher", age: 100 },
      ]);
      
      //let a = 1
      let [a, setA] = useState(1);
      
      let [name, setName] = useState("Марина");
      
      const onClickHandlerFilter = (valute: string) => {
        valute === "all"
          ? setFilteredMoney(money)
          : setFilteredMoney(money.filter((mon) => mon.banknote === valute));
      };
      
      const onClickHandler = () => {
        setA(++a);
        //a++
        alert(`${a}`);
      };
      
      const onClickHandlerReStart = () => {
        setA(0);
        alert(`${a}`);
      };
      
      const onClickHandlerChangeName = () => {
        setName(() => "Анжелика");
        alert(`${name}`);
      };
      
      const GuessMyAge = () => {
        const year = prompt("Год твоего рождения?");
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;
        alert(`В этом году тебе ${age} лет`);
      };
      const Sqrt = () => {
        const a = prompt("Какое число?");
        const b = prompt("Возвести в степень?");
      
        const sqrt = a ** b;
      
        alert(`${a} в степени ${b} это ${sqrt}`);
      };
      


  return (
    <div>
      <ArrayList items={students} />
      <ArrayList items={topCars} />
      <ArrayList items={filteredMoney} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginLeft: "35px",
        }}
      >
        <Button name="all" callBack={() => onClickHandlerFilter("all")} />
        <Button name="ruble" callBack={() => onClickHandlerFilter("ruble")} />
        <Button name="dollar" callBack={() => onClickHandlerFilter("dollar")} />
      </div>

      <h1>{a}</h1>

      <Button name="number" callBack={onClickHandler} />
      <Button name="0" callBack={onClickHandlerReStart} />
      <Button name="changeName" callBack={onClickHandlerChangeName} />

      <Button name="Угадаю возраст" callBack={() => GuessMyAge()} />
      <Button name="Возведу в степень" callBack={() => Sqrt()} />
    </div>
  );
};

