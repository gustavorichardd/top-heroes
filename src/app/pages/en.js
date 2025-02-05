// pages/en.js
import Link from 'next/link';

export default function EnPage() {
  return (
    <div>
      <h1>Welcome to the English Version</h1>
      <p>This is the English version of the site.</p>
      <Link href="/">
        <button>Go Back to Home</button>
      </Link>
    </div>
  );
}