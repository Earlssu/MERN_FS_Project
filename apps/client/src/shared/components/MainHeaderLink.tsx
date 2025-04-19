interface MainHeaderLinkProps {
  to: string;
  content: string;
}

const MainHeaderLink: React.FC<MainHeaderLinkProps> = ({ to, content }) => {
  return (
    <li className={'font-bold text-lg hover:text-amber-400 sm:border-b-2 sm:border-gray-200'}>
      <a href={to}>{content ? content : 'Link Empty'}</a>
    </li>
  );
};

export default MainHeaderLink;
