import {
  Container,
  Content,
  Table,
  MainRow,
  Row,
  Colums,
} from '~/styles/EachCryptContainer';

import { Link, useLoaderData } from '@remix-run/react';
import { useMemo } from 'react';
import { LoaderFunction, MetaFunction } from '@remix-run/node';

import crypts, { Crypts } from '../../../lib/crypts';

export let handle = {
  title: (params: { name: string }) => params.name,
  breadcrumb: (params: { name: string }) => (
    <Link to={`/cryptInfo/${params.name}`}>{params.name}</Link>
  ),
};

export const loader: LoaderFunction = ({ params }) => {
  return crypts.find(
    ({ name }) => name.toLowerCase() === (params.name ?? '').toLowerCase()
  );
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data ? data.name : 'Error',
  };
};

export default function JokesIndexRoute() {
  const data = useLoaderData<Crypts>();

  const attributes = useMemo(
    () => ({
      Symbol: data.symbol,
      Supply: data.supply,
      MaxSupply: data.maxSupply || 'Не указано',
      MarketCapUsd: data.marketCapUsd,
      VolumeUsd24Hr: data.volumeUsd24Hr,
      PriceUsd: data.priceUsd,
      ChangePercent24Hr: data.changePercent24Hr,
      Vwap24Hr: data.vwap24Hr,
      Explorer: data.explorer,
    }),
    [data]
  );

  return (
    <Container>
      <Content>
        <Table>
          <MainRow>
            <Colums>Attribute</Colums>
            <Colums>Value</Colums>
          </MainRow>
          {Object.entries(attributes).map(([key, value]) => (
            <Row key={key}>
              <Colums>{key}</Colums>
              <Colums>{value}</Colums>
            </Row>
          ))}
        </Table>
      </Content>
    </Container>
  );
}
