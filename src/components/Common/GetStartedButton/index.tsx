import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="https://wa.me/6282332901726"
    >
      Contact Us
    </LinkTo>
  );
};

export default GetStartedButton;
