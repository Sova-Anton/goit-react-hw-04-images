import { RotatingLines } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export default function Loader() {
  return (
    <Container>
      <RotatingLines
        strokeColor="#04c6f7"
        strokeWidth="4"
        animationDuration="2.5"
        width="100"
        visible={true}
      />
    </Container>
  );
}
