import MeetupList from '@/components/list/Meetup';
import { Btp } from '@prisma/client';
import axios from 'axios';

/*
export async function getServerSideProps(context){
  const req = context.req;
  const res = context.res;
  // fetch data from API
  return { props: { meetups: DUMMY_MEETUPS } }
}
*/
export async function getServerSideProps(){
  const res = await axios.get<Btp[]>('http://localhost:3000/api/meetup');
  return { props: { meetups: res.data } }
}

export default function Index(props: any) {
  return (
    <MeetupList meetups={props.meetups} />
  )
}