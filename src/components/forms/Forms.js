import { useState } from 'react';

import './Forms.css';

const Forms = (props) => {

    const [company, setCompany] = useState("-");

    const Filter = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        if (!(inputValue === '-')) {
            props.searchValue(inputValue, inputName)
        }
    }

    const optionIncome = () => {
        const option =[];
        for (let i = 0; i <= 20; i++) {
            if (i === 0 ) {
                const dohod = `-`
            option.push(<option value={dohod} key={i}>{dohod}</option>);
            } else {
                const dohod = `Доход №${i}`
                option.push(<option value={dohod} key={i}>Доход №{i}</option>);
            }           
        }
        return (
            <select className='income_input' name="income" id="income" onChange={Filter}>
                {option}
            </select>
        );
    }

    const optionSendersAccount = (data) => {
       const option = data.map((item, i) => {
        return <option value={item["sender's_account"]} key={i}>{item["sender's_account"]}</option>
       })
       option.unshift(<option key={option.length + 1}>-</option>)
       return (
        <select className='senders_account_input_1' name="sender's_account" id="sender's_account" onChange={(e) => {companyValue(e); Filter(e);}}>
            {option}
        </select>
       )
    }

    const companyValue = (e) => {
        if (e.target.value === '-') {
            setCompany('-');
        } else {
            const obj = props.data.filter(item => item["sender's_account"] === parseInt(e.target.value));
            setCompany(obj[0]['company']);
        }
    }

    return ( 
            <form>
                <div className='first_column'>
                    <div>Номер:</div>
                    <div>Счет отправителя:
                    <span style={{color: 'red'}}>*</span>
                    </div>
                    <div>Корреспондент</div>
                    <div>Наим. дохода:</div>
                </div>
                <div className='second_column'>
                    <div className='numder_date_transaction_date'>
                        <div className='number_date'>
                            <div className="number">
                                <input className='number_input' type="text" name="№" onChange={Filter}/>
                            </div>
                            <div className="date">
                                <p>Дата:
                                <span style={{color: 'red'}}>*</span>
                                </p>
                                <input className='date_input' type="date" name="date" onChange={Filter} />
                            </div>
                        </div>
                        <div className="transaction_date">
                                <p>Дата проводки:</p>
                                <input className='transaction_date_input' type="date" name="transaction date" onChange={Filter}/>
                        </div>
                    </div>
                    <div className="senders_account">
                        {optionSendersAccount(props.data)}
                        {/* <input className='senders_account_input_1' type="text" name="sender's_account" onChange={Filter}/> */}
                        <div className='senders_account_input_2'>{company}</div>
                    </div>
                    <div className="korespondent">
                        <input className='korespondent_input' type="text" name="korespondent" onChange={Filter}/>
                    </div>
                    <div className="income">
                        {optionIncome()}          
                    </div>
                </div>
            </form>
    )
}

export default Forms;