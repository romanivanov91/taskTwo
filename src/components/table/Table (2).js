import { useState } from 'react';
import './Table.css';

const Table = (props) => {

    return (   
        <div className="table">
            <div className="table_heading">
                <div className="table_heading_el column_1">№</div>
                <div className="table_heading_el column_2">Сумма</div>
                <div className="table_heading_el column_3">Счёт получателя</div>
                <div className="table_heading_el column_4">Дт</div>
                <div className="table_heading_el column_5">Кт</div>
            </div>
            <div className="table_string">
                <div className="table_string_el column_1">тест</div>
                <div className="table_string_el column_2">тест</div>
                <div className="table_string_el column_3">тест</div>
                <div className="table_string_el column_4">тест</div>
                <div className="table_string_el column_5">тест</div>
            </div>
        </div>
    )
}

export default Table;