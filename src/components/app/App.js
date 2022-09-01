import {useState} from 'react'
import { faker } from '@faker-js/faker';

import Forms from "../forms/Forms";
import Table from "../table/Table";

import './App.css';

const insome = [];

  for (let i = 1; i <= 20; i++) {
      const str = `Доход №${i}`;
      insome.push(str);
  }

  //Функция для добавления 0 спереди если рандомная цифра однозначная
  function randomNumber(high, low) {
      const number = Math.floor(Math.random() * (high-low) + low);
      if (number < 10) {
          return '0' + number
      } else {
          return number
      }
  }

  const arrData = [];

  for (let i = 1; i <= 100; i++) {
      const obj = {};
      obj['№'] = i;//№
      obj['summa'] = Math.floor(Math.random() * (100000000-1000000) + 1000000);//Сумма
      obj["sender's_account"] = Math.floor(Math.random() * (100000000-1000000) + 1000000);//Счет отправителя
      obj["recipient's account"] = Math.floor(Math.random() * (100000000-1000000) + 1000000);//Счет получателя
      obj["debit"] = Math.floor(Math.random() * (100000000-1000000) + 1000000);//Дебит
      obj["credit"] = Math.floor(Math.random() * (100000000-1000000) + 1000000);//Кредит
      obj["korespondent"] = Math.floor(Math.random() * (10000-1000) + 1000);//Кореспонденсткий счет
      obj['income'] = insome[Math.floor(Math.random() * 20)];
      obj['date'] = `${Math.floor(Math.random() * (2022-2000) + 2000)}`+'-'+`${randomNumber(12, 1)}`+'-'+`${randomNumber(28, 1)}`;
      obj['transaction date'] = `${Math.floor(Math.random() * (2022-2000) + 2000)}`+'-'+`${randomNumber(12, 1)}`+'-'+`${randomNumber(28, 1)}`;
      obj['company'] = faker.company.name();
      arrData.push(obj);
  }


function App() {

  const [data, setData] = useState(arrData);
  const [inputValue, setInputValue] = useState();
  const [nameValue, setNameValue] = useState();
  const [dataFilter, setDataFilter] = useState(data);

  const searchValue = (inputVal, nameVal) => {
    setInputValue(inputVal);
    setNameValue(nameVal);
    const dataFilter = arrData.filter(el => String(el[nameVal]).indexOf(inputVal) > -1);
    setDataFilter(dataFilter);
  }

  return (
    <div className="App">
      <div className="parent_form">
        <Forms searchValue={searchValue} data={data}/>
        <Table dataFilter={dataFilter}/>
      </div>
    </div>
  );
}

export default App;
