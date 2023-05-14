import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DataTable from 'react-data-table-component';
import * as Icon from 'react-feather';
import { Btp } from '@prisma/client';
import axios from 'axios';

export default function BtpList() {
  const router = useRouter();
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);
	const [rows, setRows] = useState([]);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(data);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

  const getData = () => { axios.get<Btp[]>('http://localhost:3000/api/btps').then(function (res) { setData(res.data); setFilter(res.data); }); }
  useEffect(() => { getData() }, []);
  useEffect(() => {
    const match = search.toLowerCase();
    const res = data.filter(p => { return p.nom.toLowerCase().match(match) || p.prenoms.toLowerCase().match(match) });
    setFilter(res);
  }, [search]);

  return (
    <DataTable data={filter} pagination defaultSortFieldId={1} dense highlightOnHover pointerOnHover subHeader progressPending={pending}
      columns={[
        { selector: row => row.id, name: "Id", sortable: true },
        { selector: row => row.nom, name: "Noms", sortable: true },
        { selector: row => row.prenoms, name: "Prénoms", sortable: true },
        { cell: (row) => (<button className='btn btn-xs btn-inverse-primary my-1' onClick={() => router.push('/btp/edit/' + row.id)}><Icon.Edit className="icon-xs" /></button>), name: "Action" }
      ]}
      subHeaderComponent={
        <div className='w-100 d-flex justify-content-between m-0 p-0'>
          <button className='btn btn-inverse-primary'><Icon.Download className="icon-sm" /> Exporter</button>
          <input type="text" placeholder="Recherche" className='w-50 form-control' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      }
    />
  );
}