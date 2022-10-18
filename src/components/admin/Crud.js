import React from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const Crud = () => {

    let quotes = [];

    axios({
        headers: {
            'X-Api-Key': '',
        },
        url: 'https://api.api-ninjas.com/v1/quotes?category=success',
        method: 'GET',
    }).then(response => {
        quotes.push(response.data);
    });

    console.log(quotes);

    return (
        <div>
            <div className="grid grid-cols-1 mx-auto">
                <div className="card w-auto h-auto bg-white m-5 border border-sky-200">
                    <div className="card-body">
                        <h2 className="card-title">DataTables</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crud;