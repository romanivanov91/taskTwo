
import './Table.css';

const Table = (props) => {

    const View = (tableData) => {
        return tableData.map((item, i) => {
            return (
                <div className="table_string" key={i}>
                    <div className="table_string_el column_1">{item["№"]}</div>
                    <div className="table_string_el column_2">{item["summa"]}</div>
                    <div className="table_string_el column_3">{item["recipient's account"]}</div>
                    <div className="table_string_el column_4">{item["debit"]}</div>
                    <div className="table_string_el column_5">{item["credit"]}</div>
                </div>
            )
        })
    } 

    return (   
        <div className="table">
            <div className="table_heading">
                <div className="table_heading_el column_1">№</div>
                <div className="table_heading_el column_2">Сумма</div>
                <div className="table_heading_el column_3">Счёт получателя</div>
                <div className="table_heading_el column_4">Дт</div>
                <div className="table_heading_el column_5">Кт</div>
            </div>
            {View(props.dataFilter)}
        </div>
    )
}

export default Table;