import React from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const Crud = () => {
    const [quotes, setQuotes] = React.useState(null);
    const [filterText, setFilterText] = React.useState('');

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
                            title={
                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="">
                                        <span className="text-black">Quotes Data</span>
                                    </div>
                                    <div className="form-control lg:ml-32">
                                        <input onChange={e => {setFilterText(e.target.value)}} type="text" placeholder="Search…" value={filterText} className="focus:ring-2 focus:ring-sky-400 input lg:input-group-md sm:input-group-xs input-bordered lg:w-64 w-2/3 bg-[#FAFAFA] text-black" />
                                    </div>
                                </div>
                            }
                            columns={columns} 
                            data={
                                data.filter(item => {
                                    if (filterText == "") {
                                        return item;
                                    }else if(item.author.toLowerCase().includes(filterText.toLowerCase())){
                                        return item;
                                    }else if(item.content.toLowerCase().includes(filterText.toLowerCase())){
                                        return item;
                                    }
                                })
                            }
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