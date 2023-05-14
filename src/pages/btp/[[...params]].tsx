import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { Btp } from '@prisma/client';
import BtpForm from '@/components/btp/Form';
import BtpList from '@/components/btp/List';
const baseUrl = "http://localhost:3000/api/btps";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const params = context.query!.params;
  if (params !== undefined) {
    if (params[0] == "new") return { props: { new: true } }
    else if (params[0] == "edit") {
      const btp = await axios.get(`${baseUrl}/${params[1]}`).then(function (res) { return res.data }).catch(function (e) { console.log(e); return {} });
      return { props: { edit: true, btp } }
    }
    else {
      const btp = await axios.get(`${baseUrl}/${params[0] == "edit" ? params[1] : params[0]}`).then(function (res) { return res.data }).catch(function (e) { console.log(e); return {} });
      return { props: { btp } }
    }
  } else return { props: { list: true } }
}

export default function Find(props: any) {
  const router = useRouter();
  async function addHandler(btp: Btp) {
    console.log(btp);
    if (btp.id == null || btp.id == undefined) await axios.post('${baseUrl}', btp).then(function () { router.push('/btp') }).catch(function (e) { console.log(e) });
    else await axios.put(`${baseUrl}/${btp.id}`, btp).then(function () { router.push('/btp') }).catch(function (e) { console.log(e) });
  }
  return (
    <div className="card">
      <div className="card-body">
        {!props.edit && props.btp &&
          <div className='d-flex'>
            {props.btp.fphoto && <img className="me-3" src={props.btp.fphoto} width={150} height={150} alt={props.btp.nom} />}
            <div>
              <h1>{props.btp.nom}</h1>
              <address>{props.btp.prenoms}</address>
              <p>{props.btp.nomjeunefille}</p>
            </div>
          </div>
        }
        {props.list && <BtpList />}
        {props.new && <BtpForm onAddBtp={addHandler} data={{}} />}
        {props.edit && <BtpForm onAddBtp={addHandler} data={props.btp} />}
      </div>
    </div >
  )
}
