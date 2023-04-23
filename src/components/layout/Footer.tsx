import Image from 'next/image'

export default function MainNavigation() {
  return (
    <div>
      <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by {' '}
        <div><Image src="/vercel.svg" width={100} height={100} alt="Vercel Logo" /></div>
      </a>
    </div>
  );
}

