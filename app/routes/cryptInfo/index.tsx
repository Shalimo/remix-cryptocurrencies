// import { Container, Content } from "~/styles/EachCryptContainer";

// export default function JokesIndexRoute() {
//     return (
//       <Container>
//         <Content>
//             <p>id: bitcoin</p>
//             <p>ssss: ssdsd</p>
//         </Content>
//       </Container>
//     );
//   }

import { Container, Content, Table, Row, Colums } from '~/styles/EachCryptContainer';

export default function JokesIndexRoute() {
  return (
    <Container>
      <Content>
        <Table>
          <Row>
            <Colums
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Attribute
            </Colums>
            <Colums
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Value
            </Colums>
          </Row>
          <Row>
            <Colums className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                supply
            </Colums>
            <Colums className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
            https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
            </Colums>
          </Row>
        </Table>
      </Content>
    </Container>
  );
}
