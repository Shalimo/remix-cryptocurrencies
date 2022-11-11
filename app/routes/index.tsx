import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node'; // or cloudflare/deno
import { useLoaderData } from '@remix-run/react';
import CryptItem from '~/components/CryptItem';

import crypts, { Crypts } from '../../lib/crypts';
import * as R from '../styles/CryptsContainer';

export let loader: LoaderFunction = ({ request }: any) => {
  const url = new URL(request.url);
  const crypt = (url.searchParams.get('crypt') ?? '').toLowerCase();
  return json(crypts.filter(({ name }) => name.toLowerCase().includes(crypt)));
};

export default function Main() {
  let crypts = useLoaderData<Crypts[]>();

  return (
    <R.Container>
      <h1 style={{color: "#fff"}}>Cryptocurrencies</h1>
        <R.Crypts>
          {crypts.map((p: any) => (
              <CryptItem key={p.id} name={p.name}/>
          ))}
        </R.Crypts>
    </R.Container>
  );
}