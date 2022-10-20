import React from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const Crud = () => {
    const [quotes, setQuotes] = React.useState(null);

    React.useEffect(() => {
        axios.get(`https://quotable.io/quotes?page=${Math.floor(Math.random() * 3) + 1}&tags=technology`).then((res) => {
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
        },
        {
            name: 'Author',
            selector: row => row.author,
            sortable: true,
        },
        {
            name: 'Content',
            selector: row => row.content,
            sortable: true,
        },
    ];

    const data = [];

    quotes.map((res, index) => {
        return data.push({
            no: index+1,
            author: res.author,
            content: res.content
        })
    })

    return (
        <div>
            <div className="grid grid-cols-1 mx-auto">
                <div className="card w-auto h-auto bg-white m-5 border border-sky-200">
                    <div className="card-body">
                        <h2 className="card-title">DataTables</h2>

                        <DataTable 
                            columns={columns} 
                            data={data}
                            striped
                            responsive
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crud;