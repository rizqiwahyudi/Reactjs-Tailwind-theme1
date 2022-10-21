import React from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import ActionButton from "../ActionButton";

const Crud = () => {
    const [quotes, setQuotes] = React.useState(null);
    const [pending, setPending] = React.useState(false);
    const [filterText, setFilterText] = React.useState('');

    React.useEffect(() => {
        setPending(true);
        axios.get(`https://quotable.io/quotes?page=${Math.floor(Math.random() * 5) + 1}&tags=technology|inspirational|education|business|leadership|happiness&maxLength=100`).then((res) => {
            // console.log(res.data.results);
            setQuotes(res.data.results);
            setPending(false);
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
            name: 'Quotes',
            selector: row => row.content,
            sortable: true,
            width: '650px'
        },
        {
            name: 'Action',
            button: true,
            cell: () => <div className="grid grid-cols-2 gap-2">
                            <div>
                                <ActionButton variant="btn-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 group-hover:text-white">
                                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                                    </svg>
                                </ActionButton>
                            </div>
                            <div>
                                <ActionButton variant="btn-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 group-hover:text-white">
                                        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
                                    </svg>
                                </ActionButton>
                            </div>
                        </div>,
            ignoreRowClick: true,
            allowOverflow: true,
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
                                    if (filterText === "") {
                                        return item;
                                    }else if(item.author.toLowerCase().includes(filterText.toLowerCase())){
                                        return item;
                                    }else if(item.content.toLowerCase().includes(filterText.toLowerCase())){
                                        return item;
                                    }else{
                                        return false;
                                    }
                                })
                            }
                            striped
                            responsive
                            pagination="true"
                            progressPending={pending}
                            progressComponent={
                                <button className="btn bg-transparent loading btn-ghost">Loading...</button>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crud;