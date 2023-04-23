import Image from 'next/image';
import { GetStaticPropsContext, GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { Btp } from '@prisma/client';
import classes from '@/styles/ui.module.css';

/*export async function getStaticPaths() {
  const res = await axios.get<Btp[]>('/api/meetup');
  return { paths: res.data.map((meetup: any) => { params: { id: meetup.id } }), fallback: false }
}*/

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params!.id;
  const { data: res } = await axios.get<Btp>('http://localhost:3000/api/meetup/' + id);
  return {
    props: {
      meetup: {
        id: res.id,
        nom: res.nom,
        fphoto: 'https://placehold.co/200x200/png',
        prenoms: res.prenoms,
        nomjeunefille: ''
      }
    }
  }
}

export default function FindById(props: any) {
  console.log(props.meetup);
  return (
    <div className={classes.card}>
      {props.meetup.fphoto && <Image src={props.meetup.fphoto} width={100} height={100} alt={props.meetup.nom} />}
      <h1>{props.meetup.nom}</h1>
      <address>{props.meetup.prenoms}</address>
      <p>{props.meetup.nomjeunefille}</p>
    </div>
  )
}
