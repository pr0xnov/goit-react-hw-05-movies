import { NotFoundBlock } from './NotFound.styled';
import notFound from '../../images/square_вектор-08.jpg';

const NotFound = () => {
  return (
    <NotFoundBlock>
      <img src={notFound} alt="Not Found" />
      <h2>404 Страница не найдена :(</h2>
    </NotFoundBlock>
  );
};

export default NotFound;
