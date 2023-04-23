import Link from 'next/link';
export default function Header() {
  return (
    <div className='flex justify-between'>
      <h2>Dashboard</h2>
      <h2>Welcome back</h2>
      {/*<nav>
        <ul>
          <li>
            <Link href='/meetup'>All Meetups</Link>
          </li>
          <li>
            <Link href='/meetup/new'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
  */}
    </div>
  );
}
