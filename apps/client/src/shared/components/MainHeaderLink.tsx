interface MainHeaderLinkProps {
  to: string;
  content: string;
}

const MainHeaderLink: React.FC<MainHeaderLinkProps> = ({ to, content }) => {
  return (
    <li>
      <a href={to}>{content ? content : 'Link Empty'}</a>
    </li>
  );
};

export default MainHeaderLink;
