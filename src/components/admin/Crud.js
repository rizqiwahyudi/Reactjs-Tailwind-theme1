import React from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const Crud = () => {
    const [quotes, setQuotes] = React.useState(null);

    React.useEffect(() => {
        axios.get(`https://quotable.io/quotes?page=${Math.floor(Math.random() * 5) + 1}&tags=technology|inspirational|education|business|leadership|happiness&maxLength=100`).then((res) => {
            // console.log(res.data.results);
            setQuotes(res.data.results);
        });
    }, []);

    if (!quotes) return null;

    // console.log(quotes);

    const columns = [
        {
            name: 'No',
            selector: row => row.no,
            sortable: true,
            width: '100px'
        },
        {
            name: 'Author',
            selector: row => row.author,
            sortable: true,
            width: '250px'
        },
        {
            name: 'Content',
            selector: row => row.content,
            sortable: true,
            width: '650px'
        },
        {
            name: 'Action',
            selector: row => row.action,
            width: 'auto'
        },
    ];

    const data = [];

    quotes.map((res, index) => {
        return data.push({
            no: index+1,
            author: res.author,
            content: res.content,
            action: `this is a action`
        })
    })

    return (
        <div>
            <div className="grid grid-cols-1 mx-auto">
                <div className="card w-auto h-auto bg-white m-5 border border-sky-200">
                    <div className="card-body">
                        <h2 className="card-title">DataTables</h2>

                        <DataTable
                            title="Quotes Data"
                            columns={columns} 
                            data={data}
                            striped
                            responsive
                            pagination="true"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crud;