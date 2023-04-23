import { useRouter } from 'next/router';
import Image from 'next/image';
import classes from '@/styles/ui.module.css';
import { Btp } from '@prisma/client';

export default function MeetupList(props: any) {
  const router = useRouter();
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: Btp) => (
        <li className={classes.item}>
          <div className={classes.card}>
            { meetup.fphoto && <div className={classes.image}><Image src={meetup.fphoto} width={100} height={100} alt={meetup.nom} /></div>}
            <div className={classes.content}>
              <h3>{meetup.nom}</h3>
              <address>{meetup.prenoms}</address>
            </div>
            <div className={classes.actions}>
              <button onClick={() => router.push('/meetup/' + meetup.id)}>Show Details</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
