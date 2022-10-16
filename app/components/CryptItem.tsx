import * as R from '../styles/CryptItem';

interface Props {
  name: string;
}

export default function CryptItem({ name }: Props) {
  return (
    <R.CryptContainer>
      <R.CryptInfo>
        <R.CryptName>{name}</R.CryptName>
        <R.ButtonContainer>
          <R.Link to={`/cryptInfo/${name}`}>Info</R.Link>
          <R.ButtonCart>+</R.ButtonCart>
        </R.ButtonContainer>
      </R.CryptInfo>
    </R.CryptContainer>
  );
}
