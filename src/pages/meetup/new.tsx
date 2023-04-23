import { useRouter } from 'next/router';
import MeetupForm from '@/components/form/Meetup';

export default function New() {
  const router = useRouter();
  async function addHandler(data: any) {
    const res = await fetch('/api/meetup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'content-Type': 'application/json'}
    });
    const response = await res.json();
    console.log(response);
    router.push('/');
  }
  return <MeetupForm onAddMeetup={addHandler} />
}
