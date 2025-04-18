interface MainHeaderLinkProps {
  to: string;
  content: string;
}

const MainHeaderLink: React.FC<MainHeaderLinkProps> = ({ to, content }) => {
  return (
    <li className={'font-bold text-lg hover:text-amber-400'}>
      <a href={to}>{content ? content : 'Link Empty'}</a>
    </li>
  );
};

export default MainHeaderLink;
